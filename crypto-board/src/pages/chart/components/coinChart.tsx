import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { CoinChartProps } from './types';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip
);

export const CoinPriceChart = ({ priceData, timeData }: CoinChartProps) => {
  const data = {
    labels: timeData,
    datasets: [
      {
        label: 'Price in USD',
        data: priceData,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        tension: 0.4,
      },
    ],
  };

  return <Line data={data} height={400} width={1000} />;
};
