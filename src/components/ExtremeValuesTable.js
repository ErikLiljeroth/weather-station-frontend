import React from 'react'

const ExtremeValuesTable = ({ data }) => {

    const temperatures = data.map(d => Number(d.temperature))
    const humidities = data.map(d => Number(d.humidity))
    const maxTemp = Math.max(...temperatures)
    const minTemp = Math.min(...temperatures)
    const maxHumi = Math.max(...humidities)
    const minHumi = Math.min(...humidities)

    return (
        <table >
            <thead >
                <tr className="table_header">
                    <th> Storhet [enhet] </th>
                    <th> Min </th>
                    <th> Max </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> Temperatur [&deg;C] </td>
                    <td>  {minTemp}         </td>
                    <td>  {maxTemp}          </td>
                </tr>
                <tr>
                    <td> Luftfuktighet [%]</td>
                    <td> {minHumi}           </td>
                    <td> {maxHumi}           </td>
                </tr>
            </tbody>
        </table>
    )
}

export default ExtremeValuesTable