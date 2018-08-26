import React, {Component} from 'react';
import {Redirect} from 'react-router'
class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            searchValue:'',
            redirect:false,
            error:false
        }
    }
    handleSearch =()=> {
        if(this.state.searchValue){
           this.setState({redirect:true});
        }
        else{
            this.setState({error:true});
        }
    }
    handleChange =(e)=> {
        this.setState({searchValue:e.target.value});
    }
    render(){
        if(this.state.redirect){
            return(
            <Redirect push to={{pathname:`user/${this.state.searchValue}`}}/>
            );
        } else{
        return(
            <div>
                <p>This is home page</p>
                <input onChange={this.handleChange} type='text' />
                <button onClick={this.handleSearch}>SUBMIT</button>
                {this.state.error && <div>Please enter username</div>}
            </div>
        )
    }
    }
}
export default Home;
