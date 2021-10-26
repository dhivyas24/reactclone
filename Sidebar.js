import React from 'react';
import './Sidebar.css';
import { Avatar,IconButton } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import SidebarChat from './SidebarChat';
function Sidebar() {
  return (
    <div className="sidebar">
     <div className="sideheader">
       <Avatar src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fmui.com%2Fstatic%2Fimages%2Favatar%2F2.jpg&imgrefurl=https%3A%2F%2Fmui.com%2Fcomponents%2Favatars%2F&tbnid=bcqYRK_UOz5gZM&vet=12ahUKEwiAhv66ss_zAhUmnEsFHaKVCYgQMygSegUIARDVAQ..i&docid=5c60erlX0Kk5SM&w=128&h=128&q=avatar%20material%20ui&ved=2ahUKEwiAhv66ss_zAhUmnEsFHaKVCYgQMygSegUIARDVAQ"/>
       <div className="sideheadright">
        <IconButton>
         <DonutLargeIcon/>
         </IconButton>
         <IconButton>
         <ChatIcon/>
         </IconButton>
         <IconButton>
         <MoreVertIcon/>
         </IconButton>

       </div>
     </div>
     <div className="sidesearch">
     <div className="sidesearcontainer">
       <SearchOutlined/>
       <input placeholder="Search or start new chat" type="text"/>
     </div>
      
     </div>
    <div className="sidebarchat">
      <SidebarChat/>
      <SidebarChat/>
      <SidebarChat/>
      <SidebarChat/>   <SidebarChat/>
      <SidebarChat/>   <SidebarChat/>
      <SidebarChat/>   <SidebarChat/>
      <SidebarChat/>   <SidebarChat/>
      <SidebarChat/>   <SidebarChat/>
      <SidebarChat/>
     
    </div>
    </div>
  );
}
export default Sidebar;