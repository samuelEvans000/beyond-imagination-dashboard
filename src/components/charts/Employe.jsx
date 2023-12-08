

import { Pie } from 'react-chartjs-2';

const Employe = () => {
  const data = {
    labels:['Full Time', 'Part Time', 'Daily Wage'],
    datasets: [
      {
        data: [15, 10, 5], 
        backgroundColor: ['#FFCE56', '#4CAF50', '#9C27B0'],
      },
    ],
  };

  const options = {
    plugins:{
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 1, height: '14em', }}>
        <Pie data={data} options={options} />
      </div>
      <div style={{ marginLeft: '20px' }}>
        <ul>
          {data.labels.map((label, index) => (
            <li key={index} style={{ listStyle: 'none', marginBottom: '15px' }}>
              <div
                style={{
                  backgroundColor: data.datasets[0].backgroundColor[index],
                  width: '40px',
                  height: '10px',
                  display: 'inline-block',
                  marginRight: '45px',
                }}
              ></div>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Employe;
