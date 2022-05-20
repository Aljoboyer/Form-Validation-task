import React, { useEffect, useState } from 'react';
import { drawChart } from './DrawChart';

const dataset = [
  [10, 30, 40, 20],
  [10, 40, 30, 20, 50, 10],
  [60, 30, 40, 20, 30],
  [40, 50, 90, 15, 110]
]
var i = 0;

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
      changeChart();
  }, []);

  const changeChart = () => {
      drawChart(400, 600, dataset[i++]);
      if(i === dataset.length) i = 0;
  }

  return (
    <div className='Home'>
        <div className='Home__HomeDiv'>
            <h1 className='Home_HomeTitle'>Bar Chart Using D3.js</h1>
              <div id="chart">
              </div>
        </div>
    </div>
  );
}

export default Home;




