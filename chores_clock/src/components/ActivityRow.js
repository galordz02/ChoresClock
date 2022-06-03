import React from 'react'
import styled from 'styled-components'

function ActivityRow( {Colour, Name, Hour} ) {

    const Normal = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    height: 45px;
    min-width: 95%;
    align-items: center;
    display: flex;
    scroll-snap-align: start;
    padding-left: 2.5%;
    padding-right: 2.5%;
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
    background-color: white;
    `;
    const SwipedPencil = styled.div`
    min-width: 100%;
    height: 100%;
    display: flex;
    background-color: cornflowerblue;
    .bi-pencil-fill{
        height: 100%;
        font-size: x-large;
        display: flex;
        align-items: center;
        color: white;
        position: sticky;
        left: 16px;
        margin: auto; 
    }
    .bi-pencil-fill::before{
        margin: auto;
    }
    `;
    const SwipedTrash = styled.div`
    min-width: 100%;
    height: 100%;
    display: flex;
    position: sticky;
    background-color: #f73722;
    justify-content: flex-end;
    .bi-trash3-fill{
        height: 100%;
        font-size: x-large;
        display: flex;
        align-items: center;
        color: white;
        position: sticky;
        right: 16px;
        margin: auto;
    }
    .bi-trash3-fill::before{
        margin: auto;
    }
    `;
    const ActivityRow = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    height: 45px;
    display: flex;
    overflow: auto;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    border-bottom: solid 1px lightgray;
    ::-webkit-scrollbar{
        display: none;
    }      
    `; 

    return (
        <ActivityRow>
            <SwipedPencil>
                <i className="bi bi-pencil-fill"></i>
            </SwipedPencil>
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
            <SwipedTrash>
                <i className="bi bi-trash3-fill"></i>
            </SwipedTrash>
        </ActivityRow>
        
    )
}

export default ActivityRow
