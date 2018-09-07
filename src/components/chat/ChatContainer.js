import React, { Component } from 'react';
import SideBar from './SideBar'

export default class ChatContainer extends Component {
     constructor(props) {
       super(props);

       this.state = {
         chats: [],
         activeChat:null,
       };
     }

     setActiveChat = () => {
       this.setState({activeChat})
     }
   render() {
     const {user, logout} = this.props
       return (
         <div  className='container'>
             <SideBar
               logout={logout}
               chats={chats}
               user={user}
               activeChat={activeChat}
               setActiveChat={this.setActiveChat}
         </div>
       );
     }
  }
