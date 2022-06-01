import React from 'react'
import styled from 'styled-components'

function MenuButton() {

  const MenuButton = styled.div`
    height: 45px;
    width: 45px;
    border: solid 1px lightgray;
    border-radius: 30%;
    position: absolute;
    left: 15px;
    top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;

  .bi-list::before{
      color: cornflowerblue;
      font-size: 30px;
  }
  `;

  return (
    <MenuButton>
        <i className="bi bi-list"></i>
    </MenuButton>

  )
}

export default MenuButton