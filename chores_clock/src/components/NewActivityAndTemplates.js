import React from 'react'
import styled from 'styled-components'
//import '../styles/NewActivityAndTemplates.css'
import NewActivity from './NewActivity'
import Templates from './Templates'

function NewActivityAndTemplates() {

  const NAAT = styled.div`
  position: fixed;
  left: 50%;
  top: 95%;
  transform: translate(-50%, -50%);
  display: flex;

  height: 45px;
  width: 160px;
  border: solid 1px lightgray;
  border-radius: 2em;
  background-color: white;
  box-shadow: 2px 2px 2px lightgray;

  color: gray;
  font-family: Arial, Helvetica, sans-serif;
  justify-content: center;
  @media (orientation: landscape) {
    left: 75%;
    top: 92%;
    transform: translate(-50%, -50%);
  }
  `;
  const NAATcontainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

  return (
  <NAAT>
    <NAATcontainer>
      <NewActivity/>
      <Templates/>
    </NAATcontainer>
  </NAAT>
)}

export default NewActivityAndTemplates