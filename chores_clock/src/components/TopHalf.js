import React from 'react'
import Clock from './Clock'
import '../styles/TopHalf.css'
import MenuButton from './MenuButton'

function TopHalf() {

  return (
    <div className='TopHalf'>
        <MenuButton/>
        <Clock/>
    </div>

  )

}

export default TopHalf