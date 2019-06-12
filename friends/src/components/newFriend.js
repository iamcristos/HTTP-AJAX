import React from 'react'
import styled from 'styled-components'
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
    return (
        <div>
            <Form onSubmit={props.addFriend}>
                <input type='text' placeholder='Name' name='name'/>
                <input type='text' placeholder='Age' name='age' />
                <input type='email' placeholder='email' name='email' />
                <button onSubmit={props.addFriend}>Add Friend</button>
            </Form>
        </div>
    )
}

export default newFriend