import React, {useState, createPortal} from 'react'
import '../styles/NewActivity.css'
import ReactDOM from 'react-dom';
import MoreInfoRow from './MoreInfoRow'

function NewActivity() {

    const [NAModal, setNAModal] = useState(false);
    const toogleNAModal = () => {
        setNAModal(!NAModal)
    }
    const [ moreInfo, setMoreInfo] = useState(false);
    const toogleMoreInfo = () => {
        setMoreInfo(!moreInfo)
    }

    return (
        <>
            <div onClick={toogleNAModal} className='NAButton'>
                <i className="bi bi-plus-lg "></i>
                <div>New Activity</div>
            </div>

            {NAModal && (
                ReactDOM.createPortal(
                    <>
                        <div className='NAwindow'>
                            <div className='NAhead'>
                                <div 
                                className='Xbutton' 
                                onClick={() => { toogleNAModal(); setMoreInfo(false)}}><i className="bi bi-x-lg"></i></div>
                                <div className='headText'>New Activity</div>
                                <div 
                                className='Yesbutton' 
                                onClick={() => { toogleNAModal(); setMoreInfo(false)}}><i className="bi bi-check2"></i></div>                                
                            </div>
                            <div className='NAbody'>
                                <input type='text' placeholder='Title' className='Title'/>
                                <div className='TCcontainer'>
                                    <input type='number' placeholder='Start' className='Start'/>
                                    <div className='guion'>-</div> 
                                    <input type='number' placeholder='End' className='End'/> 
                                    <div className='CPbutton'>Color</div>
                                </div>
                                {!!!moreInfo && (
                                    <div className='MIbutton' onClick={() => {setMoreInfo(true)}}>More</div>
                                )}
                                {moreInfo && (
                                    <div className='moreInfo'>
                                        <MoreInfoRow Icon='bi bi-globe2' BigText='Time zone' SmallText='GMT-5:00' />
                                        <MoreInfoRow Icon='bi bi-arrow-repeat' BigText='Repeat' SmallText='Never' />
                                        <MoreInfoRow Icon='bi bi-bell-fill' BigText='Remind' SmallText='10 min before' />
                                        <div className='MIrow'>
                                            <i className="r bi bi-text-left"></i>
                                            <div className='container'>
                                                <input type='text' placeholder='Description' className='bigText'></input>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>
                    </>, document.getElementById('App')
                )
            )}
        </>

    )
    

}
  
  export default NewActivity