import React from 'react'

const ExtremeValuesTable = ({ data }) => {

    let temperatures = data.map(d => Number(d.temperature))
    temperatures = temperatures.slice(-48*7)
    let humidities = data.map(d => Number(d.humidity))
    humidities = humidities.slice(-48*7)
    const maxTemp = Math.max(...temperatures)
    const minTemp = Math.min(...temperatures)
    const maxHumi = Math.max(...humidities)
    const minHumi = Math.min(...humidities)

    return (
        <table >
            <thead >
                <tr className="table_header">
                    <th id={'borderboth'}> Quantity [unit] </th>
                    <th id={'borderboth'}> Min </th>
                    <th id={'borderbottom'}> Max </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td id={'borderboth'}> Temperature [&deg;C] </td>
                    <td id={'borderboth'}>  {minTemp}          </td>
                    <td id={'borderbottom'}  >  {maxTemp}                           </td>
                </tr>
                <tr>
                    <td id={'borderright'}> Relative Humidity [%]   </td>
                    <td id={'borderright'}> {minHumi}           </td>
                    <td >  {maxHumi}                             </td>
                </tr>
            </tbody>
        </table>
    )
}

export default ExtremeValuesTable