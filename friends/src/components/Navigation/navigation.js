import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
const NavItems = ()=>{
    const Nav = styled.nav`
        border: 1px solid black;
        background-color: black;
        height: 30px;
        padding: 1rem;
        a{
            padding:0 5rem;
            color: white;
            text-decoration: none;
            text-align: center;
            font-size: 20px;
             &:hover {
                 border-bottom: 1px solid gray;
             }
        }
    `
    return (
        <Nav>
            <NavLink exact to='/' activeStyle={{color:'gray'}}>Friends</NavLink>
            <NavLink exact to='/addfriend' activeStyle={{color:'gray'}}> Add Friend</NavLink>
        </Nav>
    )
}

export default NavItems