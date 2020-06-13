import React, { useState, useEffect } from 'react'

// Components
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Plots from './components/Plots.js'
import ExtremeValuesTable from './components/ExtremeValuesTable'
import TopContent from './components/TopContent'

// Fonts
import './fonts/GloriaHallelujah-Regular.ttf'

// Styles
import './styles/main.css'
import './styles/tableStyle.css'
import './styles/footerHeaderStyle.css'
import './styles/buttonStyle.css'
import './styles/plotStyle.css'
import './styles/topContentStyle.css'

// Services
import dataService from './services/data.js'
import infoService from './services/info.js'
import tempForecastService from './services/tempforecast.js'


const App = () => {

    // allData contains all data fetched from DB
    const [allData, setAllData] = useState([])
    // displayData contains the data to be displayed in plots, initialized as allData
    const [displayData, setDisplayData] = useState([])
    // info contains general information about the measurements on the website
    const beforeLoadInfo = {total_measurements: '-', first_day_of_measurements: '-', last_day_of_measurements: '-'}
    const [info, setInfo] = useState([beforeLoadInfo])

    // tempforecast contains temperature forecast
    const [tempForecast, setTempForecast] = useState([])

    // Initialize data states
    useEffect(() => {
        dataService
            .getData()
            .then(initialData => {
                setAllData(initialData)
                setDisplayData(initialData)
            })
        infoService
            .getInfo()
            .then(retrievedInfo => {
                setInfo(retrievedInfo)
            })
        tempForecastService
            .getForecast()
            .then(retrievedForecast => {
                setTempForecast(retrievedForecast)
            })
    }, [])

    // For bug-checking the info-boxes
    /* 
    const fetchInfo = () => {
        const info = {}
        info.total_measurements = 5000
        info.first_day_of_measurements = '2020-03-31'
        info.last_day_of_measurements = '2020-04-05'
        return info
    }
    */

    const handlePlotButton = (nbrDays) => {
        const nbrtoShow = -nbrDays * 48 // 48 measurements per day
        setDisplayData(allData.slice(nbrtoShow)) // NOTE asynch function
    }


    return (
        <div className='wrapper'>
            <Header />

            <TopContent total_measurements={info[0].total_measurements} first_day={info[0].first_day_of_measurements} last_day={info[0].last_day_of_measurements} />

            <h2>Temperature and Relative Humidity</h2>

            <div className='plotbuttons'>
                <button onClick={() => handlePlotButton(1)}  >1 day</button>
                <button onClick={() => handlePlotButton(2)}  > 2 days</button >
                <button onClick={() => handlePlotButton(7)}  >7 days</button>
                <button onClick={() => handlePlotButton(30)} >30 days</button>
            </div>

            <Plots data={displayData} tempForecast={tempForecast} className={'plots'} />

            <h2>Extremevalues past 7 days</h2>

            <ExtremeValuesTable data={allData} />

            <Footer />
        </div >
    )
}

export default App