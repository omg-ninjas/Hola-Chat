import React, { Component } from 'react';
import io from "socket.io-client";
import {USER_CONNECTED, LOGOUT} from '../Events';
import LoginForm from './LoginForm.js';

const socketUrl = "http://127.0.0.1:3000;"
export default class Layout extends Component{
 constructor(props){
   super(props);

   this.state = {
     socket:null
   };
 }
 componentWillMount(){
   this.initSocket()
 }

initSocket =() =>{
  const socket = io(socketUrl)
  socket.on('connect', ( ) => {
     console.log("connected");
  })
  this.setState({socket})
}
setUser = (user) => {
  const {socket} = this.state
   socket.emit(USER_CONNECTED, user);
   this.setState({user})
}
logout = () =>{
  const [socket] = this.State
  socket.emit(LOGOUT)
  this.setState({user:null})
}

render(){
  const { title } = this.props
  return(
    <div className="container">
       <LoginForm socket={title} setUser={this.setUser}/>
    </div>
  );
 }
}
