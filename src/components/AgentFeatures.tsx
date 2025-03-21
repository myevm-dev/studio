interface Feature {
    title: string;
    description: string;
  }
  
  const AgentFeatures: React.FC = () => {
    const features: Feature[] = [
      { title: "Chain preinstalled", description: "Get this chain preinstalled along with basic Web3 interactions as skills." },
      { title: "Personality airdrop", description: "Get a future airdrop of a randomly generated AI personality." },
      { title: "GenCredit airdrop", description: "Receive a GenCredit airdrop to buy additional plugins and skills from our shop." },
      { title: "MyEVM network name", description: "Register a one-of-a-kind name for your agent before anyone else." },
      { title: "Chat interface", description: "Easy-to-use chat interface to interact, train, and strategize with AI." },
      { title: "Agent-bound smart wallet", description: "An ERC7579 token-bound smart wallet brain core for your agent." },
    ];
  
    return (
      <div className="max-w-6xl mx-auto bg-black p-6 rounded-lg shadow-lg text-center">
        {/* Features Cards */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-accent1 mb-4">Features</h3>
          <div className="grid grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-black p-2 rounded-lg shadow-md text-center border border-accent2" // Darker background
              >
                <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-accent1">{feature.description}</p> {/* Slightly brighter text */}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default AgentFeatures;
  