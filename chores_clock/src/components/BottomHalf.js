import React from 'react'
import '../styles/BottomHalf.css'
import NewActivityAndTemplates from './NewActivityAndTemplates'
import ActivityRow from './ActivityRow'

function BottomHalf() {

    return (
    <div className='BottomHalf'>
        <ActivityRow Colour="red" Name={new Date().getDate()} Hour="00:00-02:00" />
        <ActivityRow Colour="blue" Name="Toluca" Hour="00:00-02:00" />
        <ActivityRow Colour="yellow" Name="Toluca" Hour="00:00-02:00" />
        <ActivityRow Colour="purple" Name="Toluca" Hour="00:00-02:00" />
        <ActivityRow Colour="green" Name="Toluca" Hour="00:00-02:00" />
        <ActivityRow Colour="gray" Name="Toluca" Hour="00:00-02:00" />
        <ActivityRow Colour="pink" Name="Toluca" Hour="00:00-02:00" />
        <ActivityRow Colour="orange" Name="Toluca" Hour="00:00-02:00" />
        <ActivityRow Colour="red" Name="Toluca" Hour="00:00-02:00" />
        <ActivityRow Colour="blue" Name="Toluca" Hour="00:00-02:00" />
        <ActivityRow Colour="yellow" Name="Toluca" Hour="00:00-02:00" />
        <ActivityRow Colour="purple" Name="Toluca" Hour="00:00-02:00" />
        <ActivityRow Colour="green" Name="Toluca" Hour="00:00-02:00" />
        <ActivityRow Colour="gray" Name="Toluca" Hour="00:00-02:00" />
        <ActivityRow Colour="pink" Name="Toluca" Hour="00:00-02:00" />
        <ActivityRow Colour="orange" Name="Toluca" Hour="00:00-02:00" />
        <div className='emptySpace'></div>
        <NewActivityAndTemplates/>
    </div>

    )
}

export default BottomHalf