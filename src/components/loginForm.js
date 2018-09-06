import React, {Component} from 'react';

export class LoginForm extends Component {
  constructor(props){
    super(props);
    this.State = {
      nickname: "",
      error:""
    };
  }
  render(){
    const { nickname,error } = this.state
    return(
      <div className= "login">
         <form onSubmit={this.handleSubmit} className="login-form">
            <label htmlForm="nickname">
                <h2>Got a nickname?</h2>
            </label>
            <input
                 ref={(input)=>{this.textInput = input }}
                 type="text"
                 id="nickname"
                 value={nickname}
                 onChange={this.handleChange}
                 placeHolder={'MyCoolUserName'}
                 />
                 <div className="error">{error ? error:null}</div>
         </form>
      </div>
    );
  }
}
