import React from 'react'
import Plot from 'react-plotly.js'

const Plots = ({ data, className }) => {

    const dtgs = data.map(d => d.dtg)
    const temperatures = data.map(d => Number(d.temperature))
    const humidities = data.map(d => Number(d.humidity))

    const temp_data = [{ x: dtgs, y: temperatures, name: 'temperature', type: 'scatter' }]
    const hum_data = [{ x: dtgs, y: humidities, name: 'humidity', type: 'scatter' }]

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
        yaxis: { range: [minTemp - 5, maxTemp + 5] }
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
        yaxis: { range: [minHumi - 15, maxHumi + 15] }
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
