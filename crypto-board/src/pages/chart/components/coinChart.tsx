import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale, // Register this for "category" scales
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { CoinChartProps } from './types';

// Register the components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip
);

export const CoinPriceChart = ({ priceData, timeData }: CoinChartProps) => {
  const data = {
    labels: timeData, // Your time data
    datasets: [
      {
        label: 'Price in USD',
        data: priceData, // Example coin prices
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        tension: 0.4,
      },
    ],
  };

  return <Line data={data} />;
};
