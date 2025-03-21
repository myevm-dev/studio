// GpoSaleABI.ts

export const GpoSaleABI = [
    {
      "inputs": [
        { "internalType": "address", "name": "owner", "type": "address" },
        { "internalType": "address", "name": "spender", "type": "address" }
      ],
      "name": "allowance",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "account", "type": "address" }
      ],
      "name": "balanceOf",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "claimCondition",
      "outputs": [
        { "internalType": "uint256", "name": "currentStartId", "type": "uint256" },
        { "internalType": "uint256", "name": "count", "type": "uint256" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getActiveClaimConditionId",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "spender", "type": "address" },
        { "internalType": "uint256", "name": "amount", "type": "uint256" }
      ],
      "name": "approve",
      "outputs": [
        { "internalType": "bool", "name": "", "type": "bool" }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "amount", "type": "uint256" }
      ],
      "name": "burn",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "account", "type": "address" },
        { "internalType": "uint256", "name": "amount", "type": "uint256" }
      ],
      "name": "burnFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
  
    // --------------------------
    // ADDING the "claim" function:
    // --------------------------
    {
      "inputs": [
        { "internalType": "address", "name": "_receiver",       "type": "address" },
        { "internalType": "uint256", "name": "_quantity",       "type": "uint256" },
        { "internalType": "address", "name": "_currency",       "type": "address" },
        { "internalType": "uint256", "name": "_pricePerToken",  "type": "uint256" },
        {
          "components": [
            { "internalType": "bytes32[]",  "name": "proof",                  "type": "bytes32[]" },
            { "internalType": "uint256",    "name": "quantityLimitPerWallet", "type": "uint256" },
            { "internalType": "uint256",    "name": "pricePerToken",          "type": "uint256" },
            { "internalType": "address",    "name": "currency",               "type": "address" }
          ],
          "internalType": "struct IDrop.AllowlistProof",
          "name": "_allowlistProof",
          "type": "tuple"
        },
        { "internalType": "bytes",    "name": "_data",           "type": "bytes" }
      ],
      "name": "claim",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    // --------------------------
  
  
    {
      "inputs": [
        {
          "components": [
            { "internalType": "uint256", "name": "startTimestamp",           "type": "uint256" },
            { "internalType": "uint256", "name": "maxClaimableSupply",       "type": "uint256" },
            { "internalType": "uint256", "name": "supplyClaimed",            "type": "uint256" },
            { "internalType": "uint256", "name": "quantityLimitPerWallet",   "type": "uint256" },
            { "internalType": "bytes32", "name": "merkleRoot",               "type": "bytes32" },
            { "internalType": "uint256", "name": "pricePerToken",            "type": "uint256" },
            { "internalType": "address","name": "currency",                  "type": "address" },
            { "internalType": "string", "name": "metadata",                  "type": "string" }
          ],
          "internalType": "struct IClaimCondition.ClaimCondition[]",
          "name": "_conditions",
          "type": "tuple[]"
        },
        { "internalType": "bool", "name": "_resetClaimEligibility", "type": "bool" }
      ],
      "name": "setClaimConditions",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "to",    "type": "address" },
        { "internalType": "uint256", "name": "amount","type": "uint256" }
      ],
      "name": "transfer",
      "outputs": [
        { "internalType": "bool", "name": "", "type": "bool" }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "from",  "type": "address" },
        { "internalType": "address", "name": "to",    "type": "address" },
        { "internalType": "uint256", "name": "amount","type": "uint256" }
      ],
      "name": "transferFrom",
      "outputs": [
        { "internalType": "bool", "name": "", "type": "bool" }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
  
    {
      "inputs": [
        { "internalType": "uint256", "name": "_conditionId", "type": "uint256" }
      ],
      "name": "getClaimConditionById",
      "outputs": [
        {
          "components": [
            { "internalType": "uint256", "name": "startTimestamp",           "type": "uint256" },
            { "internalType": "uint256", "name": "maxClaimableSupply",       "type": "uint256" },
            { "internalType": "uint256", "name": "supplyClaimed",            "type": "uint256" },
            { "internalType": "uint256", "name": "quantityLimitPerWallet",   "type": "uint256" },
            { "internalType": "bytes32", "name": "merkleRoot",               "type": "bytes32" },
            { "internalType": "uint256", "name": "pricePerToken",            "type": "uint256" },
            { "internalType": "address","name": "currency",                  "type": "address" },
            { "internalType": "string", "name": "metadata",                  "type": "string" }
          ],
          "internalType": "struct IClaimCondition.ClaimCondition",
          "name": "condition",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];
  