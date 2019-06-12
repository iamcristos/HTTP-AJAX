import React, {Component} from 'react';
import axois from 'axios';
import FriendList from './friendList';
import NewFriend from './newFriend';
import {Route,withRouter} from 'react-router-dom';
import NavItems from './Navigation/navigation'
class Friends extends Component {

    state = {
        friends: null,
        error: '',
        loading: false,
    }
    async componentDidMount () {
        this.setState({loading:true})
        try{
            const fetchFriend = await axois.get('http://localhost:5000/friends')
            this.setState({friends: fetchFriend.data})
        }catch(err){
            this.setState({error: err.message})
        }finally{
            this.setState({loading:false})
        }
    }

    formData = async (e,url,method)=>{
        const friend = new FormData(e.target)
        const name = friend.get('name')
        const age = friend.get('age')
        const email = friend.get('email')
        try {
            this.setState({loading: true})
            if (!name.trim() && !age.trim() && !email ) {
                throw new Error('all input fields are required')
            } else {
                const friendData = {name,age,email}
                const addFriend = await method(url, friendData) 
                this.setState({friends: addFriend.data})
                this.props.history.push('/')
            }
        } catch (error) {
           this.setState({error: error.message})
        }finally {
            this.setState({loading:false})
        }
    }

    onSubmitHandler = (e)=> {
        e.preventDefault()
        this.formData(e, 'http://localhost:5000/friends', axois.post)
    }

    onUpdateHandler =  (e)=>(id)=>{
        e.preventDefault()
        this.formData(e, `http://localhost:5000/friends/${id}`, axois.put)
    }

    render() {
        return (
            <div>
                <NavItems />
                {this.state.loading ? <span>Loading chill..</span> :
                 this.state.friends && <Route exact path='/' render={(props)=> <FriendList friends={this.state.friends} {...props}/>}/> 
            }
               <Route path='/addfriend' render={(props)=> <NewFriend addFriend={this.onSubmitHandler} {...props} />} />
               <Route path='/friend/:id' render={(props)=> <NewFriend updateFriend={this.onUpdateHandler} {...props} />} />
            </div>
        )
    }
}

export default withRouter(Friends);