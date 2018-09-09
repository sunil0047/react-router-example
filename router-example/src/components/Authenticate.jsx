import React, { Component } from 'react';
import Loader from './Loader';
import { Redirect } from 'react-router';

class Authenticate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      code: ''
    };
  }
  componentDidMount() {
    this.setState({
      code: this.props.location.search.split('?')[1].split('=')[1],
      loading: false
    });
  }
  handlePost = () => {
    console.log('calling post');
     fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers:{
          "Content_type":"Application/json",
      },
      body: JSON.stringify({
        "client_id": "51f1d67cc56d0c43f8d8",
        "client_secret": "d152b94f28c1f5ee3eb22457ffc852661114c2da",
        "code": this.state.code
      })
    })
      .then((res)=> {
        return res.json();
      })
      .then((data)=> {
        alert(JSON.stringify(data));
      });
  };
  render() {
    if (this.state.loading) {
      return <Loader />;
    } else if (!this.state.code) {
      return <Redirect push to={{ pathname: 'login' }} />;
    } else {
      this.handlePost();
      return <div>dwdwdw</div>;
    }
  }
}
export default Authenticate;
