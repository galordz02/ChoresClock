import React, {useState, createPortal} from 'react'
import ReactDOM from 'react-dom';
import MoreInfoRow from './MoreInfoRow'
import styled from 'styled-components'

function NewActivity() {

    const [NAModal, setNAModal] = useState(false);
    const toogleNAModal = () => {
        setNAModal(!NAModal)
    }
    const [ moreInfo, setMoreInfo] = useState(false);
    const toogleMoreInfo = () => {
        setMoreInfo(!moreInfo)
    }

    const NAButton = styled.div`
    padding-left: 6px;
    padding-top: 2px;
    font-size: 70%;

    .bi-plus-lg::before{
        display: block;
        padding-left: 20px;
        color: cornflowerblue;
        font-size: 26px;    
    }
    `;

    const NAwindow = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    bottom: 50%;
    right: 50%;
    transform: translate(50%, 50%);

    margin: 0%;
    padding: 0%;

    background-color: white;
    font-family: Arial, Helvetica, sans-serif;
    `;
    const NAhead = styled.div`
    width: 100%;
    height: 45px;
    background-color: white;

    margin: 0%;
    padding: 0%;

    background-color: white;
    border-bottom: solid 3px lightgray;
    display: flex;
    justify-content: space-between;
    `;
    const Xbutton = styled.div`
    color: cornflowerblue;
    width: 45px;
    height: 100%;
    font-size: 35px;
    align-items: center;
    justify-content:center;
    display: flex;
    `;
    const HeadText = styled.div`
    color: black;
    height: 100%;
    font-size: 30px;
    align-items: center;
    justify-content:center;
    display: flex;
    `;
    const Yesbutton = styled.div`
    color: cornflowerblue;
    width: 45px;
    height: 100%;
    font-size: 45px;
    align-items: center;
    justify-content:center;
    display: flex;
    padding-right: 5px;
    `;
    const NAbody = styled.div`
    background-color: white;
    width: 90%;
    margin: auto;
    `;
    const Title = styled.input`
    border-bottom: 1px solid lightgray;
    border-top: none;
    border-left: none;
    border-right: none;
    height: 45px;
    font-size: 25px;
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 3px;
    `;
    const TCcontainer = styled.div`
    display: flex;
    height: 45px;
    align-items: center;
    width: 100%;
    margin-bottom: 3px;
    color: gray;
    `;
    const Start = styled.div`
    border-bottom: 1px solid lightgray;
    border-top: none;
    border-left: none;
    border-right: none;
    height: 100%;
    font-size: 25px;
    display: flex;
    align-items: center;
    width: 20%;
    justify-content: center;
    `;
    const Guion = styled.div`
    height: 100%;
    font-size: 30px;
    display: flex;
    align-items: center;
    width: 10%;
    justify-content: center;
    `;
    const End = styled.div`
    border-bottom: 1px solid lightgray;
    border-top: none;
    border-left: none;
    border-right: none;
    height: 100%;
    font-size: 25px;
    display: flex;
    align-items: center;
    width: 20%;
    justify-content: center;
    `;
    const CPbutton = styled.div`
    border-radius: 2em;
    border: 2px solid lightgray;
    height: 100%;
    font-size: 25px;
    display: flex;
    align-items: center;
    width: 90px;
    justify-content: center;
    margin: auto;
    color: gray;
    `;
    const MIbutton = styled.div`
    width: 50%;
    height: 45px;
    font-size: 30px;
    border: 2px solid cornflowerblue;
    border-radius: 2em;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: gray;
    margin-top: 10px;
    `;
    const MoreInfo = styled.div`
    `;
    const MIrow = styled.div`
    width: 100%;
    height: 45px;
    margin-top: 10px;
    display: flex;
    color: gray;
    `;
    const Container = styled.div`
    height: 45px;
    display: flex;
    border-bottom: 1px solid lightgray;
    flex-grow: 1;
    `;
    const D = styled.input`
    border: none;
    font-size: 25px;
    margin-left: 15px;
    display: flex;
    align-items: center;
    flex-grow: 1;
    `;

    return (
        <>
            <NAButton onClick={toogleNAModal}>
                <i className="bi bi-plus-lg "></i>
                <div>New Activity</div>
            </NAButton>

            {NAModal && (
                ReactDOM.createPortal(
                    <>
                        <NAwindow>
                            <NAhead>
                                <Xbutton 
                                onClick={() => { toogleNAModal(); setMoreInfo(false)}}><i className="bi bi-x-lg"></i></Xbutton>
                                <HeadText>New Activity</HeadText>
                                <Yesbutton
                                onClick={() => { toogleNAModal(); setMoreInfo(false)}}><i className="bi bi-check2"></i></Yesbutton>                                
                            </NAhead>
                            <NAbody>
                                <Title type='text' placeholder='Title'/>
                                <TCcontainer>
                                    <Start type='number'>Start</Start>
                                    <Guion style={{color: 'gray'}}>-</Guion> 
                                    <End type='number'>End</End>
                                    <CPbutton>Color</CPbutton>
                                </TCcontainer>
                                {!!!moreInfo && (
                                    <MIbutton onClick={() => {setMoreInfo(true)}}>More</MIbutton>
                                )}
                                {moreInfo && (
                                    <MoreInfo>
                                        <MoreInfoRow Icon='bi bi-globe2' BigText='Time zone' SmallText='GMT-5:00' />
                                        <MoreInfoRow Icon='bi bi-arrow-repeat' BigText='Repeat' SmallText='Never' />
                                        <MoreInfoRow Icon='bi bi-bell-fill' BigText='Remind' SmallText='10 min before' />
                                        <MIrow>
                                            <i className="bi bi-text-left" style={{
                                                fontSize: "30px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            }}></i>
                                            <Container>
                                                <D type='text' placeholder='Description'></D>
                                            </Container>
                                        </MIrow>
                                    </MoreInfo>
                                )}
                            </NAbody>

                        </NAwindow>
                    </>, document.getElementById('App')
                )
            )}
        </>

    )
    

}
  
  export default NewActivity