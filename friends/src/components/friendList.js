import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
const friendList = (props)=>{
    const Friend = styled.div`
    display: flex;
   flex-direction: column;
   margin: 1rem;
   @media (min-width:550px) {
    flex-direction: row;
        flex-wrap: wrap;
        }
    div{
        background-color: gray;
        border-radius: 1rem;
        margin: 1rem;
        width: 320px;
        @media (min-width:550px) {
            width: 300px
        }

        a{
            color: black;
            text-decoration: none;
        }
    }
    `
    return (
        <Friend>
            {props.friends.map(friend=>(
                <div key={friend.id}>
                    <h2> {friend.name}</h2>
                    <p>{friend.age} </p>
                    <p>{friend.email}</p>
                    <button><Link to={`/friend/${friend.id}`}>Update</Link></button>
                    <button onClick={(e)=>props.onDelete(e)(friend.id)} >Delete</button>
                </div>
            ))}
        </Friend>
    )
}

friendList.propTypes = {
        id: PropTypes.number,
        name: PropTypes.string,
        age: PropTypes.number,
        email: PropTypes.string
}

export default friendList;