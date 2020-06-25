import React, { useEffect, useState, useRef } from "react"

import './Dropdown.css'

// source: https://medium.com/@pitipatdop/little-neat-trick-to-capture-click-outside-with-react-hook-ba77c37c7e82

const Dropdown = ({ value, options, options_numbers, onChange }) => {
    // Below node variable is used for the "close menu on elsewhere click"-functionality
    const node = useRef(null)

    const [open, setOpen] = useState(false)

    const handleClick = e => {
        if (node.current.contains(e.target)) {
            // inside click
            return
        }
        // outside click
        setOpen(false)
    }

    const handleChange = selectedValue => {
        onChange(selectedValue)
        setOpen(false)
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClick)

        return () => {
            document.removeEventListener("mousedown", handleClick)
        }
    }, [])

    return (
        <div ref={node} className="dropdown">
            <button className="dropdown-toggler" onClick={e => setOpen(!open)}>
                <div className='dropdown-toggler-text'>
                    {value === 1 && <div>{value} day</div>}
                    {value !== 1 && <div>{value} days</div>}
                </div>
                <div className='dropdown-toggler-arrow'>
                    ▼
                </div>
            </button>
            {open && (
                <ul className="dropdown-menu">
                    {options.map((opt, index) => (
                        <li key={index} className="dropdown-menu-item" onClick={e => handleChange(options_numbers[index])}>
                            {opt}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Dropdown;
