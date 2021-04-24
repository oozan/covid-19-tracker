/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
import numeral from 'numeral';
import React, {useState, useEffect} from 'react';
import { Line } from 'react-chartjs-2';

function LineGraph () {
  const [data, setData] = useState ({});
  // https://disease.sh/v3/covid-19/historical/all?lastdays=120

  const options = {
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      }
    },
    maintainAspectRatio: false,
    tooltips: {
      mode: "index",
      intersect: false,
      callbacks: {
        label: function(tooltipItem, data) {
          return numeral(tooltipItem.value).format("+0,0");
        },
      },
    },
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            format: "MM/DD/YY",
            tooltipFormat: "ll",
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            // Include a dollar sign in the ticks
            callback: function (value, index, values) {
              return numeral(value).format("0a");
            },
          },
        },
      ],
    },
  };

  
  const buildChartData = (data, casesType = 'cases' ) => {
    const chartData = [];
    let lastDataPoint;
    for (let date in data.cases) {
      if (lastDataPoint) {
        const newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPoint,
        };
        chartData.push(newDataPoint)
      }
      lastDataPoint = data[casesType][date];
    }
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
