
import React from 'react'
import styled from 'styled-components'
import Clock from './Clock'
import MenuButton from './MenuButton'
import NewActivityAndTemplates from './NewActivityAndTemplates'
import ActivityRow from './ActivityRow'


function App() {

  const App = styled.div`
    height: 100vh;
    width: 100vw;
    padding: 0%;
    margin: 0%;    

    @media (orientation: landscape) {
      display: flex;
    }
    @media (orientation: portrait) {
      display: block;
    }
  `;

  const TopHalf = styled.div`
    margin: 0%;
    padding: 0%;
    position: fixed;
    background-color: white;

    @media (orientation: portrait) {
            height: 50%;
            width: 100%;
            bottom: 75%;
            right: 50%;
            transform: translate(50%, 50%);
    }
    @media (orientation: landscape) {
            height: 100%;
            width: 50%;
            bottom: 50%;
            right: 75%;
            transform: translate(50%, 50%);
    }
  `;

  const BottomHalf = styled.div`
    display: block;

    @media (orientation: portrait) {
            height: 50%;
            width: 100%;
            padding-top: 50vh;
    }
    @media (orientation: landscape) {
            height: 100%;
            width: 50%;
            margin-left: 50%;
    }

  `;

  const RowSection = styled.div`
    padding-bottom: 65px;
  `;

  return (
    <App id='App'>
      <TopHalf>
        <MenuButton/>
        <Clock/>
      </TopHalf>
      <BottomHalf>
        <RowSection>
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
        </RowSection>
        <NewActivityAndTemplates/>
      </BottomHalf>
    </App>
  )
  
}

export default App