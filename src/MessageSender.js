import React, { useState ,useStateValue} from 'react'
import './MessageSender.css';
import {Avatar } from '@material-ui/core'
import { green , red ,orange } from '@material-ui/core/colors';
import VideoacamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmotionIcon from '@material-ui/icons/InsertEmoticon'

function MessageSender() {
    const [{user},dispatch] = useStateValue()
    const [input,setInput] = useState('')
    const [imageUrl , setImageUrl] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault();

        //for db 
        setInput("");
        setImageUrl("");
    };
    return (
        <div className="messageSender">
            <div className ="messageSender__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="messageSender__input"
                    placeholder={`What's on your mind ${user.displayName}`} type="text" />
                    <input 
                    value={imageUrl}
                    onChange={(e)=>setImageUrl(e.target.value)}
                    placeholder="image URL {Optional}" type="text"/>
                    <button onClick = {handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>

            </div>

            <div className ="messageSender__bottom">
                <div className="messageSender__option">
                    <VideoacamIcon style={{color:"red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color:"green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                <InsertEmotionIcon style={{color:"orange"}} />
                    <h3>Feelings/Activity</h3>
                </div>


            </div>
            
        </div>
    )
}

export default MessageSender
