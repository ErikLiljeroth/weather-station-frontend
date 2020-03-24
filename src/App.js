import React, { useState, useEffect } from 'react'

// Components
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Plots from './components/Plots.js'
import ExtremeValuesTable from './components/ExtremeValuesTable'

// Styles
//import './styles/main.css'
import './styles/tableStyle.css'
import './styles/footerHeaderStyle.css'

// Service
import dataService from './services/data.js'


const App = () => {

    // allData contains all data fetched from DB
    const [allData, setAllData] = useState([])
    // displayData contains the data to be displayed in plots, initialized as allData
    const [displayData, setDisplayData] = useState([])

    // Initialize states
    useEffect(() => {
        dataService
            .getData()
            .then(initialData => {
                setAllData(initialData)
                setDisplayData(initialData)
            })
    }, [])

    const handlePlotButton = (nbrDays) => {
        const nbrtoShow = -nbrDays*48 // 48 measurements per day
        setDisplayData(allData.slice(nbrtoShow)) // NOTE asynch function
    }

    return (
        <div className='wrapper'>
            <Header />
            
            <h1>Växthuset</h1>

            <h2>Temperatur och luftfuktighet</h2>

            <button onClick={() => handlePlotButton(1)}  >1 dygn</button>
            <button onClick={() => handlePlotButton(2)}  > 2 dygn</button >
            <button onClick={() => handlePlotButton(7)}  >7 dygn</button>
            <button onClick={() => handlePlotButton(30)} >30 dygn</button>

            <Plots data={displayData} />

            <h2>Extremvärden senaste 7 dagar</h2>

            <ExtremeValuesTable data={allData} />

            <Footer />
        </div >
    )
}

export default App