import React from 'react'
import styled from 'styled-components'
const friendList = ({friends})=>{
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
            width: 450px
        }
    }
    `
    return (
        <Friend>
            {friends.map(friend=>(
                <div key={friend.id}>
                    <h2> {friend.name}</h2>
                    <p>{friend.age} </p>
                    <p>{friend.email}</p>
                    <button>Update</button>
                    <button>Delete</button>
                </div>
            ))}
        </Friend>
    )
}

export default friendList;