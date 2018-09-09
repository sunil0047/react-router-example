import React, { Component } from 'react';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }
  componentDidMount() {}
  handleLogin = () =>{
    window.location = 'https://github.com/login/oauth/authorize?client_id=8e277edc02110f0b8ffd';
  }
  render() {
      return(
          <button onClick={this.handleLogin}>Login</button>
      )
  }
}
export default Login;
