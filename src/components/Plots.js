import React from 'react'

import createPlotlyComponent from 'react-plotly.js/factory';
var Plotly = require('../custom-plotly.js');
const Plot = createPlotlyComponent(Plotly);

const Plots = ({ data, tempForecast, className }) => {

    const dtgs = data.map(d => d.dtg)
    const temperatures = data.map(d => Number(d.temperature))
    const humidities = data.map(d => Number(d.humidity))

    let filteredForecast = [...tempForecast]

    // Avoid forecast- and sensor values overlap by removing overlapping forecast values
    if (tempForecast[0] && dtgs[0]) {
        filteredForecast = tempForecast.filter(t => Date.parse(t.dtg) >= Date.parse(dtgs[data.length - 1]))
    }

    const forecastDtgs = filteredForecast.map(t => t.dtg)
    const tempForecastValues = filteredForecast.map(t => Number(t[Object.keys(t)[1]]))

    const temp_data = [
        {x: dtgs, y: temperatures, name: 'temperature', type: 'scatter', marker:{color:'blue'} }, 
        {x:forecastDtgs, y:tempForecastValues, name:'sarimax forecast', type:'scatter', marker:{color:'purple'}}
    ]
    const hum_data = [{ x: dtgs, y: humidities, name: 'humidity', type: 'scatter', marker:{color:'blue'} }]

    const maxTemp = Math.max(...temperatures)
    const minTemp = Math.min(...temperatures)
    const maxHumi = Math.max(...humidities)
    const minHumi = Math.min(...humidities)

    const temperatureLayout = {
        autosize: false,
        width: 500,
        height: 500,
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        title: {
            text: 'Temperature [&deg;C]',
            font: {
                family: 'Courier New, monospace',
                size: 20,
                color: '#000'
            },
            xref: 'paper',
            x: 0.05
        },
        yaxis: { range: [minTemp - 15, maxTemp + 15] }, 
        legend: {x: 0.6, y:1.15}
    }

    const humidityLayout = {
        autosize: false,
        width: 500,
        height: 500,
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        title: {
            text: 'Relative Humidity [%]',
            font: {
                family: 'Courier New, monospace',
                size: 20,
                color: '#000'
            },
            xref: 'paper',
            x: 0.05
        },
        yaxis: { range: [minHumi - 15, maxHumi + 15] }, 
        showlegend: true, 
        legend: {x: 0.6, y:1.15}
    }
    
    const config = { useresizehandler: true }

    return (
        <div className={className}>
            <Plot
                data={temp_data}
                layout={temperatureLayout}
                config={config}
            />

            <Plot
                data={hum_data}
                layout={humidityLayout}
                config={config}
            />
        </div>

    )
}

export default Plots
