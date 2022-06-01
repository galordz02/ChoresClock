import React from 'react'
import styled from 'styled-components'

function ActivityRow( {Colour, Name, Hour} ) {

    const Normal = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    align-items: center;
    height: 45px;
    overflow: hidden;
    display: flex;
    width: 100%;
    padding-left: 10px;
    .bi-sticky-fill{
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    
    }
    `;
    const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    font-size: 20px;
    `;
    const NameClass = styled.div`
    padding-left: 10px;
    `;
    const HourClass = styled.div`
    padding-right: 10px;
    background-color: white;
    `;
    const Hover = styled.div`
    width: 0%;
    height: 100%;
    display: flex;
    transition: width .5s;
    .bi-pencil-fill, .bi-trash3-fill{
        width: 50%;
        height: 100%;
        color: white;
        font-size: x-large;
        display: flex;
        align-items: center;
    }
    
    .bi-pencil-fill::before, .bi-trash3-fill::before{
        margin: auto;
    }
    
    .bi-pencil-fill{
        background-color: cornflowerblue;
    }
    
    .bi-trash3-fill{
        background-color: red;
    }    
    `;
    const ActivityRow = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    align-items: center;
    height: 45px;
    overflow: hidden;
    display: flex;
    width: 100%;
    border-bottom: solid 1px lightgray;
    &:hover ${Hover}{
        width: 25%;
        transition: width .5s;
    }
    `; 

    return (
        <ActivityRow>
            <Normal>
                <i className="bi bi-sticky-fill" style={{ 
                    color: Colour,
                    }}>
                </i>
                <InfoContainer>
                    <NameClass>{Name}</NameClass>
                    <HourClass>{Hour}</HourClass>
                </InfoContainer>
            </Normal>
            <Hover>
                <i className="bi bi-pencil-fill"></i>
                <i className="bi bi-trash3-fill"></i>
            </Hover>
        </ActivityRow>
        
    )
}

export default ActivityRow
