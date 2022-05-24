import React from 'react'
import "../styles/ActivityRow.css"

function ActivityRow( {Colour, Name, Hour} ) {
    return (
        <div className="ActivityRow">
            <div className='normal'>
                <i className="r bi bi-sticky-fill" style={{ 
                    color: Colour,
                    }}>
                </i>
                <div className='infoContainer'>
                    <div className='Name'>{Name}</div>
                    <div className='Hour'>{Hour}</div>
                </div>
            </div>
            <div className='hover'>
                <i className="bi bi-pencil-fill"></i>
                <i className="bi bi-trash3-fill"></i>
            </div>
        </div>
        
    )
}

export default ActivityRow
