import React, { useState, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';

// Register necessary components from Chart.js
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

interface Token {
  label: string;
  color: string;
  progress: number[];
  symbol: string;
}

interface PreOrderChartProps {
  tokenData: Token[];
}

interface DexscreenerResponse {
  pair: {
    priceUsd: number;
  };
}

const PreOrderChart: React.FC<PreOrderChartProps> = ({ tokenData }) => {
  const [chartData, setChartData] = useState<any>(null);
  const chartRef = useRef<any>(null);

  useEffect(() => {
    const fetchPrices = async () => {
      const updatedData = await Promise.all(
        tokenData.map(async (token) => {
          try {
            const response = await axios.get<DexscreenerResponse>(
              `https://api.dexscreener.com/latest/dex/pairs/${token.symbol.toLowerCase()}/eth`
            );
            const price = response.data.pair.priceUsd;
            token.progress.push(price); // Append the price to the progress array
            return token;
          } catch (error) {
            console.error(`Error fetching price for ${token.symbol}:`, error);
            return token; // Return token even in case of error
          }
        })
      );

      const datasets = updatedData.map((token) => ({
        label: token.label,
        data: token.progress,
        borderColor: token.color,
        pointBackgroundColor: token.color,
        fill: false,
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      }));

      setChartData({
        labels: Array.from({ length: updatedData[0].progress.length }, (_, index) => `${index + 1} min`),
        datasets: datasets,
      });
    };

    fetchPrices();

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy(); // Cleanup the chart on component unmount
      }
    };
  }, [tokenData]);

  return (
    <div className="chart-container">
      {chartData ? (
        <Line
          ref={chartRef}
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "top",
              },
            },
            scales: {
              x: {
                type: 'category',
                title: {
                  display: true,
                  text: "Time (minutes)",
                  color: "#fff",
                },
                ticks: {
                  color: "#fff",
                },
              },
              y: {
                title: {
                  display: true,
                  text: "Price",
                  color: "#fff",
                },
                ticks: {
                  color: "#fff",
                },
                min: 0,  // Set the minimum value for the y-axis here
              },
            },
          }}
        />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
};

export default PreOrderChart;
