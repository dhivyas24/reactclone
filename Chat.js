import MoreVert from '@mui/icons-material/MoreVert';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Avatar, IconButton } from '@mui/material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from'@mui/icons-material/Mic';
import React from 'react';
import './Chat.css';
import axios from './axios';
import { useState } from 'react';


function Chat({messages}) {
  const[input,setInput]=useState("");
  const sendMessage=async(e)=>{
    e.preventDefault();

    await axios.post('/messages/new',{
      name:"Dhivya",
      message:input,
      timestamp:"Just now!",
      received:false,
    });
    setInput("");
  };
  return (
    <div className="chat">
     <div className="chatheader">
       <Avatar/>
       <div className="chatheaderinfo">
         <h3>Aswahi</h3>
         <p> last seen at 7:00 PM</p>
       </div>
       <div className="chatheaderright">
         <IconButton>
         <SearchOutlined/>
         </IconButton>
         <IconButton>
          </IconButton>
         <IconButton>
         <MoreVert/>
         </IconButton>
       
       </div>
     </div>
     <div className="chatbody  " style ={ { backgroundImage: "url('https://preview.redd.it/qwd83nc4xxf41.jpg?width=640&crop=smart&auto=webp&s=e82767fdf47158e80604f407ce4938e44afc6c25')"    } }>
       {messages.map((message)=>(
         <p className={`chatmessage ${message.received && "chatreceiver"}`}>
         <span className="chatname">{message.name}</span>
{message.message}
         <span className="chattimestamp">{message.timestamp}</span>
       </p>
       )
      )}
       
    </div>
      
      <div className="chatfooter">
        <InsertEmoticonIcon/>
        <AttachFileIcon className="rotate" />
        <form>
          <input  value={input} 
          onChange={(e)=>setInput(e.target.value)}placeholder="Type a message" type="text"/>
          <button type="submit" onClick={sendMessage}>Send a message</button>
        </form>
        <MicIcon/>
 
       
     </div>
    </div>
  );
}
export default Chat;