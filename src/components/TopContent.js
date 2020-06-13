import React from 'react'

const TopContent = ({ total_measurements, first_day, last_day }) => {

    return (
        <div className='topContent'>
            <div className='infoBox'>
                <h2 className='infoBoxHeader'>
                    About
                </h2>
                <p className='infoBoxContent'>
                    The greenhouse is placed on Erik's balcony on the fourth floor.
                    This website runs on a Raspberry Pi inside the greenhouse.
                </p>
            </div>

            {/*<h1 className='mainTtile'>Erik's Greenhouse</h1>*/}

            <div className='dataBox'>
                <h2 className='dataBoxHeader'>
                    Summary stats
                </h2>
                <ul className='dataBoxContent'>
                    <li>Total measurements: {total_measurements}</li>
                    <li>Measuring init: {first_day}</li>
                    <li>Current day: {last_day}</li>
                </ul>
            </div>
        </div>
    )
}

export default TopContent