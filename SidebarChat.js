import { Avatar } from '@mui/material';
import React from 'react';
import './SidebarChat.css';

function SidebarChat() {
  return (

    <div className="sidebarchats">
    <Avatar className="ava"/>

    <div className="sidebarchata">
     <div className="sidebarchatinfo">
         <h2>CSE-B SMVEC </h2>
         <p>Cat exams tomorrow</p>
      
         </div >
      
     </div>
     <div className="sidebarchata">
     <p style={{ marginLeft:"150px",fontsize:"1em",
  }}> 7:00 PM</p>
  </div>
    </div>
  );
}
export default SidebarChat;