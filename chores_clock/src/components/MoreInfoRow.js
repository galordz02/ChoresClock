import React from 'react'
import styled from 'styled-components'
//import '../styles/MIrow.css'

function MoreInfoRow({Icon, BigText, SmallText}) {

  const MIrow = styled.div`
  width: 100%;
  height: 45px;
  margin-top: 10px;
  display: flex;
  color: gray;

  .R{
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

}
  `;
  const Container = styled.div`
  height: 45px;
  display: flex;
  border-bottom: 1px solid lightgray;
  flex-grow: 1;
  .bi-chevron-right{
    font-size: 25px;
  }
  `;
  const Container2 = styled.div`
  flex-grow: 1;
  display: flex;
  `;
  const BigTextClass = styled.div`
  border: none;
  font-size: 25px;
  width: 50%;
  margin-left: 15px;
  display: flex;
  align-items: center;
  `;
  const SmallTextClass = styled.div`
  font-size: 20px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  `;


  return (
    <MIrow>
        <i className={`R ${Icon}`}></i>
        <Container>
            <Container2>
                <BigTextClass>{BigText}</BigTextClass>
                <SmallTextClass>{SmallText}</SmallTextClass>
            </Container2>
            <i className="r bi bi-chevron-right"></i>
        </Container>
    </MIrow>
  )
  
}

export default MoreInfoRow