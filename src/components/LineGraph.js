/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, {useState, useEffect} from 'react';
import { Line } from 'react-chartjs-2';

function LineGraph () {
  const [data, setData] = useState ({});
  // https://disease.sh/v3/covid-19/historical/all?lastdays=120

  
  const buildChartData = (data, casesType = 'cases' ) => {
    const chartData = [];
    let lastDataPoint;
    data[casesType].forEach (date => {
      if (lastDataPoint) {
        const newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPoint,
        };
        chartData.push(newDataPoint)
      }
      lastDataPoint = data[casesType][date];
    });
    return chartData;
  };

  useEffect (() => {
    fetch ('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
      .then (response => response.json ())
      .then (data => {
        const chartData = buildChartData(data);
        setData(chartData);
      });
  }, []);

  return (
    <div>
      <h1>////GRAPH\\\\\</h1>
      <Line data={{
        datasets: [{
          backgroundColor: 'rgba(247, 4, 129, 1)',
          borderColor: '#DDA6C2',
          data: data
        }]
      }} />
    </div>
  );
}

export default LineGraph;
