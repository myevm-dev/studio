import React from 'react';

const colors: { [key in 'polygon' | 'baseChain' | 'apeChain' | 'abstract' | 'optimism' | 'beraChain' | 'arbitrum' | 'uniChain']: string } = {
  polygon: '#8247E5',    // Polygon's official purple
  baseChain: '#0052FF',  // BaseChain's official blue
  apeChain: '#0b48d7', 
  abstract: '#06e077', 
  optimism: '#FF0420',   // Optimism's red
  beraChain: '#E8663D',  // BeraChain's orange
  arbitrum: '#2bbdfa',   // Arbitrum's light blue
  uniChain: '#FF007A',   // UniChain's pink
};



// List of agents with varying numbers of chains and profit values (in descending order)
const leaderboard = [
  { name: 'Agent1', teams: ['polygon', 'baseChain'], pnl: '+102.000%' },
  { name: 'Agent2', teams: ['baseChain', 'uniChain', 'optimism'], pnl: '+85.000%' },
  { name: 'Agent3', teams: [ 'abstract', 'arbitrum'], pnl: '+68.000%' },
  { name: 'Agent4', teams: ['abstract', 'optimism', 'uniChain'], pnl: '+55.000%' },
  { name: 'Agent5', teams: ['optimism', 'beraChain', 'polygon'], pnl: '+45.000%' },
  { name: 'Agent6', teams: ['beraChain', 'arbitrum', 'uniChain', 'optimism'], pnl: '+38.000%' },
  { name: 'Agent7', teams: ['arbitrum',  'baseChain'], pnl: '+28.000%' },
  { name: 'Agent8', teams: ['uniChain', 'polygon', 'apeChain'], pnl: '+20.000%' },
  { name: 'Agent9', teams: ['polygon', 'baseChain', 'arbitrum'], pnl: '+18.000%' },
  { name: 'Agent10', teams: ['baseChain', 'uniChain'], pnl: '+15.000%' },
  { name: 'Agent11', teams: ['apeChain', 'abstract'], pnl: '+8.000%' },
  { name: 'Agent12', teams: ['abstract','baseChain', 'optimism'], pnl: '+1.000%' },
  { name: 'Agent13', teams: ['apeChain','optimism', 'beraChain'], pnl: '-1.000%' },
  { name: 'Agent14', teams: ['beraChain','uniChain', 'arbitrum'], pnl: '-2.000%' },
  { name: 'Agent15', teams: ['arbitrum', 'uniChain'], pnl: '-5.000%' },

];

// Sorting the leaderboard by the highest P&L first (positive profits at the top)
const sortedLeaderboard = leaderboard.sort((a, b) => {
  const pnlA = parseFloat(a.pnl.replace('%', ''));
  const pnlB = parseFloat(b.pnl.replace('%', ''));
  return pnlB - pnlA;
});

const Leaderboard: React.FC = () => {
  return (
    <div className="overflow-x-auto bg-black text-white shadow-md rounded-lg p-4">
      <table className="min-w-full table-auto text-left">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-sm font-semibold text-gray-300">Rank</th>
            <th className="px-6 py-3 text-sm font-semibold text-gray-300">Agent</th>
            <th className="px-6 py-3 text-sm font-semibold text-gray-300">Chains</th>
            <th className="px-6 py-3 text-sm font-semibold text-gray-300">P&L</th>
          </tr>
        </thead>
        <tbody>
          {sortedLeaderboard.slice(0, 15).map((agent, index) => (
            <tr key={index} className="hover:bg-gray-700">
              <td className="px-6 py-4">{index + 1}</td>
              <td className="px-6 py-4 flex items-center">
                <span>{agent.name}</span>
              </td>
              <td className="px-6 py-4">
                {agent.teams.map((team, i) => (
                  <span
                    key={i}
                    style={{ color: colors[team as keyof typeof colors] }} // Type assertion to color the chain
                    className="capitalize mr-2"
                  >
                    {team.charAt(0).toUpperCase() + team.slice(1)}
                  </span>
                ))}
              </td>
              <td className="px-6 py-4">
                <span>{agent.pnl}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
