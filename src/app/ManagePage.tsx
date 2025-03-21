import React, { useEffect, useState } from "react";
import { Chain } from "../utils/chains";
import { ethers } from "ethers";

interface Collection {
  name: string;
  address: string;
}

interface NFT {
  id: string;
  imageUrl: string;
  name: string;
}

const ManagePage: React.FC<{ selectedChain: Chain | null }> = ({ selectedChain }) => {
  const [account, setAccount] = useState<string | null>(null);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null);
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [newCollectionAddress, setNewCollectionAddress] = useState<string>("");

  const connectWallet = async () => {
    if (window.ethereum && typeof window.ethereum.request === "function") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } catch (err) {
        console.error("Error connecting wallet:", err);
      }
    } else {
      alert("MetaMask is not installed or Ethereum provider is unavailable.");
    }
  };

  const fetchCollectionName = async (address: string): Promise<string> => {
    if (!selectedChain) return "Unknown Collection";

    try {
      const provider = new ethers.JsonRpcProvider(selectedChain.rpc);
      const erc721Contract = new ethers.Contract(
        address,
        ["function name() view returns (string)"],
        provider
      );

      const name = await erc721Contract.name();
      return name;
    } catch (error) {
      console.error("Failed to fetch collection name:", error);
      return "Unknown Collection";
    }
  };

  const addCollection = async () => {
    if (!newCollectionAddress || !selectedChain) return;

    const name = await fetchCollectionName(newCollectionAddress);
    setCollections((prev) => [...prev, { name, address: newCollectionAddress }]);
    setNewCollectionAddress(""); // Clear input field
  };

  const fetchNFTs = async (collection: Collection) => {
    if (!selectedChain || !account) return;

    const provider = new ethers.JsonRpcProvider(selectedChain.rpc);
    const erc721Contract = new ethers.Contract(
      collection.address,
      [
        "function balanceOf(address owner) view returns (uint256)",
        "function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256)",
        "function tokenURI(uint256 tokenId) view returns (string)",
      ],
      provider
    );

    try {
      const balance = await erc721Contract.balanceOf(account);
      const nfts: NFT[] = [];

      for (let i = 0; i < balance; i++) {
        const tokenId = await erc721Contract.tokenOfOwnerByIndex(account, i);
        const tokenURI = await erc721Contract.tokenURI(tokenId);

        // Fetch metadata from the tokenURI
        const metadata = await fetch(tokenURI).then((res) => res.json());

        nfts.push({
          id: tokenId.toString(),
          name: metadata.name || `NFT #${tokenId}`,
          imageUrl: metadata.image || "",
        });
      }

      setNfts(nfts);
    } catch (error) {
      console.error("Failed to fetch NFTs:", error);
    }
  };

  useEffect(() => {
    if (selectedChain) {
      connectWallet();
    }
  }, [selectedChain]);

  useEffect(() => {
    if (selectedCollection) {
      fetchNFTs(selectedCollection);
    }
  }, [selectedCollection]);

  return (
    <section className="text-center max-w-screen-lg mx-auto py-8">
      <h1 className="text-5xl font-bold text-[#fd01f5] mt-10">
        Manage your Agent Core Brain
      </h1>
      <p className="text-3xl text-accent1 mt-4">
        Turn any NFT into a Smart NFT by Equipping an ISAI Core Brain
      </p>

      <div className="flex mt-8">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-800 p-4 rounded shadow-lg">
          <h3 className="text-xl text-white mb-4">Import Collection</h3>
          <div className="mb-4">
            <input
              type="text"
              value={newCollectionAddress}
              onChange={(e) => setNewCollectionAddress(e.target.value)}
              placeholder="Enter ERC-721 contract address"
              className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400"
            />
            <button
              onClick={addCollection}
              className="mt-2 py-2 px-4 bg-[#fd01f5] text-white rounded hover:bg-[#fd01d0] w-full"
            >
              Import
            </button>
          </div>

          {account && collections.length > 0 ? (
            <>
              <h3 className="text-xl text-white mb-4">Your Collections</h3>
              <ul className="space-y-4">
                {collections.map((collection) => (
                  <li
                    key={collection.address}
                    onClick={() => setSelectedCollection(collection)}
                    className={`cursor-pointer p-4 rounded shadow ${
                      selectedCollection?.address === collection.address
                        ? "bg-[#fd01f5] text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    <a
                      href={`${selectedChain?.explorerUrl}/address/${collection.address}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-blue-300 hover:text-blue-400"
                    >
                      {collection.name}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="text-white">
              {account
                ? "No collections imported. Add one using the form above."
                : "Connect your wallet and select a chain to view collections."}
            </p>
          )}
        </div>

        {/* NFT Display */}
        <div className="w-3/4 bg-gray-900 p-8 rounded shadow-lg ml-4">
          {account && selectedCollection ? (
            <>
              <h3 className="text-xl text-white mb-6">
                NFTs in {selectedCollection.name}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {nfts.map((nft) => (
                  <div
                    key={nft.id}
                    className="bg-gray-800 p-4 rounded shadow hover:bg-gray-700 flex flex-col items-center"
                  >
                    <img
                      src={nft.imageUrl}
                      alt={nft.name}
                      className="w-full h-48 object-cover rounded"
                    />
                    <p className="text-white mt-2">{nft.name}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="text-gray-400">
              {account
                ? "Select a collection to view its NFTs."
                : "Sign in to view your NFT collections."}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ManagePage;
