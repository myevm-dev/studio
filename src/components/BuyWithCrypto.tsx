import React from "react";

const BuyWithCrypto: React.FC = () => {
  return (
    <section className="max-w-screen-lg mx-auto py-8">
      <h2 className="text-3xl font-bold text-accent2 text-center">
        Buy with Crypto
      </h2>

      <div className="mt-6 text-center">
        <p className="text-lg">
          You can swap for Gen Credits Here.
        </p>
        <div className="mt-4">
          {/* Placeholder for crypto payment button */}
          <button className="bg-accent1 text-black font-bold px-6 py-3 rounded hover:bg-[#fd01f5]/80 transition">
            Swap
          </button>
        </div>
      </div>
    </section>
  );
};

export default BuyWithCrypto;
