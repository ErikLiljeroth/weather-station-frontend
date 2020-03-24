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
                    <th id={'borderboth'}> Storhet [enhet] </th>
                    <th id={'borderboth'}> Min </th>
                    <th id={'borderbottom'}> Max </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td id={'borderboth'}> Temperatur [&deg;C] </td>
                    <td id={'borderboth'}>  {minTemp}          </td>
                    <td id={'borderbottom'}  >  {maxTemp}                           </td>
                </tr>
                <tr>
                    <td id={'borderright'}> Luftfuktighet [%]   </td>
                    <td id={'borderright'}> {minHumi}           </td>
                    <td >  {maxHumi}                             </td>
                </tr>
            </tbody>
        </table>
    )
}

export default ExtremeValuesTable