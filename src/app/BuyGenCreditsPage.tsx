import React, { useState, useEffect } from "react";
import BuyWithCrypto from "../components/BuyWithCrypto"; // Make sure the BuyWithCrypto component exists

const BuyGenCreditsPage: React.FC = () => {
  const [hasWallet, setHasWallet] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [hasGasToken, setHasGasToken] = useState<string | null>(null);

  // Dynamically load the Stripe script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/buy-button.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  // Handle wallet check
  const handleWalletAnswer = (answer: string) => {
    setHasWallet(answer);
  };

  // Handle payment method selection
  const handlePaymentMethod = (method: string) => {
    setPaymentMethod(method);
  };

  // Handle gas token check
  const handleGasTokenAnswer = (answer: string) => {
    setHasGasToken(answer);
  };

  // Reset all states to start over
  const startOver = () => {
    setHasWallet(null);
    setPaymentMethod(null);
    setHasGasToken(null);
  };

  return (
    <section className="max-w-screen-lg mx-auto py-8 bg-black text-white">
      <h1 className="text-4xl font-bold text-white text-center">
        Purchase Gen Credits
      </h1>

      {/* Step 1: Do you have a Wallet? */}
      {hasWallet === null && (
        <div className="text-center mt-4">
          <p>Do you have an Ethereum Wallet?<br /> If not, we can create one!</p>
          <button
            onClick={() => handleWalletAnswer("yes")}
            className="bg-[#01fcfc] text-black font-bold px-4 py-2 rounded m-2 w-full sm:w-48"
          >
            Yes
          </button>
          <button
            onClick={() => handleWalletAnswer("no")}
            className="bg-[#fd01f5] text-white font-bold px-4 py-2 rounded m-2 w-full sm:w-48 cursor-not-allowed"
            disabled
            title="Coming Soon"
          >
            No
          </button>
        </div>
      )}

      {/* Step 2: If the user has a wallet */}
      {hasWallet === "yes" && paymentMethod === null && (
        <div className="text-center mt-4">
          <p>Do you want to buy Credits with Crypto or Card?<br /> Swap Crypto for Gen Tokens or Load with Stripe.</p>
          <button
            onClick={() => handlePaymentMethod("crypto")}
            className="bg-[#01fcfc] text-black font-bold px-4 py-2 rounded m-2 w-full sm:w-48"
          >
            Crypto
          </button>
          <button
            onClick={() => handlePaymentMethod("card")}
            className="bg-[#fd01f5] text-white font-bold px-4 py-2 rounded m-2 w-full sm:w-48"
          >
            Card
          </button>
        </div>
      )}

      {/* Step 3: If the user selected Card, ask for gas token */}
      {paymentMethod === "card" && hasGasToken === null && (
        <div className="text-center mt-4">
            <p>Do you have Gas Tokens in your wallet to cover small transaction fees? <br /> Fees are typically under a penny, but can rise to 5 cents during peak times.</p>
            <button
              onClick={() => handleGasTokenAnswer("yes")}
              className="bg-[#01fcfc] text-black font-bold px-4 py-2 rounded m-2 w-full sm:w-48"
            >
              Yes
            </button>
            <button
              onClick={() => handleGasTokenAnswer("no")}
              className="bg-[#fd01f5] text-white font-bold px-4 py-2 rounded m-2 w-full sm:w-48"
            >
              No
            </button>
        </div>
      )}

      {/* Step 4: Show appropriate payment option */}
      {paymentMethod === "crypto" && (
        <div className="text-center mt-6">
          <BuyWithCrypto /> {/* Render Crypto Buy Button */}
        </div>
      )}

      {paymentMethod === "card" && hasGasToken === "no" && (
        <div className="flex flex-col justify-center items-center w-full mt-6">
          <p className="text-center text-accent1 mb-4"> Click Buy, then choose how much you want to buy. <br />Whatever amount we will give you $3 of it in the network gas token.</p>
          <script async src="https://js.stripe.com/v3/buy-button.js"></script>
          <stripe-buy-button
            buy-button-id="buy_btn_1Qg7NjANbA5DNh8yiChz3Pts"
            publishable-key="pk_live_51PtNmAANbA5DNh8ySgAQSlxd3nlcbYGOhbfkZLaSO6xhRUO8m8HUNFwBh5O06bDwsJijMTGiiTr66cZnA4arfg0T00qW8fxFny"
          ></stripe-buy-button>
        </div>
      )}

      {paymentMethod === "card" && hasGasToken === "yes" && (
        <div className="flex flex-col justify-center items-center w-full mt-6">
          <p className="text-center mb-4">All of your purchase will be in Gen Credits <br /> Knowing you already have gas in your wallet.</p>
          <script async src="https://js.stripe.com/v3/buy-button.js"></script>
          <stripe-buy-button
            buy-button-id="buy_btn_1Qg7ECANbA5DNh8yPgoVVblP"
            publishable-key="pk_live_51PtNmAANbA5DNh8ySgAQSlxd3nlcbYGOhbfkZLaSO6xhRUO8m8HUNFwBh5O06bDwsJijMTGiiTr66cZnA4arfg0T00qW8fxFny"
          ></stripe-buy-button>
        </div>
      )}

      {/* Fixed "Start Over" button at the bottom */}
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={startOver}
          className="bg-[#fd01f5] text-black font-bold px-4 py-2 rounded-full w-full sm:w-48"
        >
          Start Over
        </button>
      </div>
    </section>
  );
};

export default BuyGenCreditsPage;
