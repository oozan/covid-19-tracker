/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from 'react'
//import { Line } from 'react-chartjs-2';

function LineGraph() {
    const [data, setData] = useState({});
    // https://disease.sh/v3/covid-19/historical/all?lastdays=120

    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
        .then(response => response.json())
        .then(data => {
            console.log("DATA IS HERE -->", data)
        })
    }, [])
    return (
        <div>
            <h1>////GRAPH\\\\\</h1>
        </div>
    )
}

export default LineGraph
