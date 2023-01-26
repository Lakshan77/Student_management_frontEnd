import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a className="navbar-brand">Student Management App</a></div>
                        <ul className='navbar'> 
                            <li><NavLink to={'/add-student'} className="navBarLink">Add Student</NavLink></li>
                            <li><NavLink to={'/add-class'} className="navBarLink">Add Class</NavLink></li>
                        </ul>
                    
                    </nav>
                </header>
            </div>
        )
    }
}