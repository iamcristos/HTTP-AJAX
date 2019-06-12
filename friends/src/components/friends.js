import React, {Component} from 'react';
import axois from 'axios';
import FriendList from './friendList';
import NewFriend from './newFriend';
class Friends extends Component {

    state = {
        friends: null,
        error: ''
    }
    async componentDidMount () {
        try{
            const fetchFriend = await axois.get('http://localhost:5000/friends')
            this.setState({friends: fetchFriend.data})
        }catch(err){
            this.setState({error: err.message})
        }
    }
    render() {
        return (
            <div>
                {this.state.friends && <FriendList friends={this.state.friends}/>}
                <NewFriend/>
            </div>
        )
    }
}

export default Friends;