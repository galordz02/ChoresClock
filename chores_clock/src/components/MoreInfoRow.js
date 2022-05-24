import React from 'react'
import '../styles/MIrow.css'

function MoreInfoRow({Icon, BigText, SmallText}) {

  return (
    <div className='MIrow'>
        <i className={`r ${Icon}`}></i>
        <div className='container'>
            <div className='container2'>
                <div className='bigText'>{BigText}</div>
                <div className='r smallText'>{SmallText}</div>
            </div>
            <i className="r bi bi-chevron-right"></i>
        </div>
    </div>
  )
  
}

export default MoreInfoRow