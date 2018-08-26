import React, {Component} from 'react';
import Loader from './Loader';
const githubUserApiUrl = 'https://api.github.com/users/'
class User extends Component {
    constructor(props){
        super(props);
        this.state={
        loading:true,
        userData:{}
        }
    }
    componentDidMount(){
        fetch(`${githubUserApiUrl}${this.props.match.params.username}`).then((response)=>{
           return response.json()
        }).then((result)=>{
            this.setState({userData:(result), loading:false});
        })
    }
    render(){
        console.log('render called')
        const {name, location, company, avatar_url} = this.state.userData;
        if(this.state.loading){
            return(
                <Loader/>
            )
        }else {
            return(
            <div>
                <div><img src={avatar_url}/></div>
                <div>
                    <p>Name:{name}</p>
                    <p>location:{location}</p>
                    <p>company:{company}</p>
                    </div>
            </div>

            );
        }
    }
}
export default User;