import React from 'react'
import "../App.css"

export default function Pagination({gotoNextPage,gotoPrevPage}) {
    return (
        <div className='button-container'>
            {gotoPrevPage && <button onClick={gotoPrevPage} className="button">Previous</button>}
            {gotoNextPage && <button onClick={gotoNextPage} className="button">Next</button>}
        </div>
    )
}