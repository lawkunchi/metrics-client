import {FC} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export type Props = {
    datasets: any[],
    labels: number[]
};
const Chat: FC<Props> = ({ datasets, labels }) => {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Traffic for Core Link to Joburg',
      },
    },
  };

  const data = {
    labels,
    datasets: datasets,
  };

  
  return (
    <Line options={options} data={data} />
  );
}

export default Chat;
