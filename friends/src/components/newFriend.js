import React from 'react'
import styled from 'styled-components'
const newFriend = ()=>{
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
            <Form>
                <input type='text' placeholder='Name'/>
                <input type='text' placeholder='Age'/>
                <input type='email' placeholder='email'/>
                <button>Add Friend</button>
            </Form>
        </div>
    )
}

export default newFriend