import React, { Component } from 'react'
import './header.scss'
import logo from '../../PTALogo.svg'



export function Header() {
    return <div className='header'>
           <img src={logo}/>
           <h1> Welcome to Uniform PTA & Friends store</h1>
        </div>
}
