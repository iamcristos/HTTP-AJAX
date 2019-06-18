import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
const newFriend = (props)=>{
    const Form = styled.form`
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (min-width:550px) {
            margin-top: 10%;
        };
        input, button{
            width: 250px;
            height: 30px;
            padding: 1rem 2rem;
            margin: .3rem;
            outline: none;
            @media (min-width:550px) {
                width: 600px
            }
        }
        button {
            background-color: gray;
            font-size: 15px;
            padding: .3rem 2rem;
        }
    `
    const {id} = props.match.params;
    const update = (e)=>(id)=> props.updateFriend(e)(id)
    return (
        <div>
            <Form onSubmit={id ? (e)=>update(e)(id) : props.addFriend}>
                <input type='text' placeholder='Name' name='name'/>
                <input type='number' placeholder='Age' name='age' />
                <input type='email' placeholder='email' name='email' />
                <button>Add Friend</button>
            </Form>
        </div>
    )
}

newFriend.propTypes = {
    updateFriend: PropTypes.func,
    addFriend: PropTypes.func
}

export default newFriend