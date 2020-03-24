import React from 'react'
import Plot from 'react-plotly.js'

const Plots = ({ data }) => {

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
        title: {
            text: 'Temperatur [&deg;C]',
            font: {
                family: 'Courier New, monospace',
                size: 18,
                color: '#b02'
            },
            xref: 'paper',
            x: 0.05
        },
        yaxis: { range: [minTemp - 7, maxTemp + 7] }
    }

    const humidityLayout = {
        title: {
            text: 'Luftfuktighet [%]',
            font: {
                family: 'Courier New, monospace',
                size: 18,
                color: '#b02'
            },
            xref: 'paper',
            x: 0.05
        },
        yaxis: { range: [minHumi - 20, maxHumi + 20] }
    }

    return (
        <div>
            <Plot
                data={temp_data}
                layout={temperatureLayout}

            />

            <Plot
                data={hum_data}
                layout={humidityLayout}

            />
        </div>

    )
}

export default Plots
