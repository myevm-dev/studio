interface ChainDetailProps {
  chain: {
    name: string;
    image?: string;
    color: string;
    id: number;
  };
  sold?: number; // Optional prop for sold
  totalunits?: number; // Optional prop for totalunits
}

const ChainDetail: React.FC<ChainDetailProps> = ({ chain, sold = 0, totalunits = 100 }) => {
  const progress = totalunits ? sold / totalunits : 0;

  return (
    <div className="max-w-lg mx-auto bg-black p-0 rounded-lg shadow-lg text-center">
      {/* Centered Logo and Chain Name */}
      <div className="flex flex-col items-center justify-center mb-1">
        <img
          src={chain.image || "/defaultLogo.png"}
          alt={`${chain.name} logo`}
          className="w-20 h-20 object-cover rounded-full mb-4"
        />
        <h2 className="text-3xl font-semibold text-white">{chain.name}</h2> {/* Increased font size */}
      </div>

      {/* Progress Bar */}
      <div className="w-full mt-6"> {/* Increased margin-top */}
        <div className="relative pt-1">
          <div className="flex mb-4 items-center justify-between w-full px-4"> {/* Increased margin-bottom */}
            <span className="text-sm font-medium text-white">Progress</span> {/* Increased font size */}
            <span className="text-sm font-medium text-white">
              {sold}/{totalunits}
            </span>
          </div>
          <div className="flex mb-6 items-center justify-between w-full"> {/* Increased margin-bottom */}
            <div className="relative pt-1 w-full">
              <div className="flex mb-2">
                <div className="flex w-full">
                  <div
                    className="progress-bar h-4 rounded-full"
                    style={{
                      width: `${progress * 100}%`,
                      backgroundColor: progress >= 1 ? "#4caf50" : chain.color,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Text at the Bottom */}
      <div className="mt-8 mb-10 text-center max-w-2xl mx-auto"> {/* Increased max-width */}
        <h3 className="text-3xl font-bold text-accent2 tracking-wide">Epoch Based Pricing</h3> {/* Bold and spaced heading */}
        <p className="text-xl text-gray-300 mt-2 tracking-wide">
          Pre-Order Early & Check often for Arbitrage Deals
        </p> {/* Subheading style */}
      </div>

    </div>
  );
};

export default ChainDetail;
