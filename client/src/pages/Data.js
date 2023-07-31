import React, { useState, useEffect } from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Scatter, Bar, Line, Pie } from 'react-chartjs-2';


const Data = () => {
  const [chartData, setChartData] = useState({});
//   const [lineChartData, setLineChartData] = useState({});
  const [pieChartData, setPieChartData] = useState({});
  const [barChartData, setBarChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/assets/data.json");
        const jsonData = await response.json();

        // Assuming the JSON data is in the format { "data": [...] }
        const userData = jsonData.data;

        setChartData({
          labels: userData.map((data) => data.Country_name),
          datasets: [
            {
              label: 'Gold Medals',
              data: userData.map((data) => data.Gold_Medals),
              backgroundColor: 'gold',
            },
            {
              label: 'Silver Medals',
              data: userData.map((data) => data.Silver_Medals),
              backgroundColor: 'silver',
            },
            {
              label: 'Bronze Medals',
              data: userData.map((data) => data.Bronze_Medals),
              backgroundColor: 'brown',
            },
          ],
        });

        // setLineChartData({
        //     labels: userData.map((data) => data.Country_name),
        //     datasets: [
        //       {
        //         label: 'Some Other Data 1',
        //         data: userData.map((data) => data.Some_Other_Data_1),
        //         borderColor: 'blue',
        //         fill: false,
        //       },
        //       {
        //         label: 'Some Other Data 2',
        //         data: userData.map((data) => data.Some_Other_Data_2),
        //         borderColor: 'green',
        //         fill: false,
        //       },
        //     ],
        //   });

        setPieChartData({
            labels: userData.map((data) => data.Country_name),
            datasets: [
              {
                data: userData.map((data) => data.Gold_Medals),
                backgroundColor: ['gold','brown', 'blue', 'green'],
                borderColor: '#CBC3CB',
              },
            ],
          });
        setBarChartData({
            labels: userData.map((data) => data.Country_name),
            datasets: [
              {
                label: 'Gold Medals',
                data: userData.map((data) => data.Gold_Medals),
                backgroundColor: 'gold',
              },
              {
                label: 'Silver Medals',
                data: userData.map((data) => data.Silver_Medals),
                backgroundColor: 'silver',
              },
              {
                label: 'Bronze Medals',
                data: userData.map((data) => data.Bronze_Medals),
                backgroundColor: 'brown',
              },
            ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="firstSection">
        <div className="leftSection">Hi this is our <span className="purple">Charts page</span></div>
        <div className="rightSection"></div>
      </section>
      <hr />

      <h2>Celebrating Excellence</h2>
      <p>At Olympic Medals World Map, we take pride in celebrating the spirit of sportsmanship, dedication, and perseverance demonstrated by athletes and countries at the Olympic Games. Our Medals Charts offer a unique opportunity to analyze the historical data, discover captivating trends, and pay tribute to the remarkable achievements of nations worldwide.

Come, embark on this captivating journey through Olympic history, and witness the impact of sporting triumphs on a global scale. Let the Medals Charts inspire you, spark your curiosity, and instill a deeper appreciation for the timeless legacy of the Olympic Games.</p>
      <div>
      {Object.keys(chartData).length > 0 && (
        <Scatter
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            x: {
              type: 'category', // Use 'category' scale for x-axis
            },
          },
        }}
      />
      )}
      </div>
      <h2>Medals Distribution</h2>
      <div>
      {Object.keys(chartData).length > 0 && (
      <Bar
        data={barChartData}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            x: {
              type: 'category',
            },
          },
        }}
      />
      )}
    </div>
      {/* <h2>Some Other Data Line Chart</h2>
      <div>
      <Line
        data={lineChartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              type: 'category',
            },
          },
        }}
      />
    </div> */}
      <h2>Gold Medals Distribution (Pie Chart)</h2>
      <div style={{ width: '400px', height: '400px' }}>
      {Object.keys(chartData).length > 0 && (
      <Pie
        data={pieChartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false, // Set to false to hide the legend
            },
          },
        }}
      />
      )}
    </div>
    </>
  );
};

export default Data;
