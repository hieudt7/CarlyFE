import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./navbar.css"
class Navbar extends Component {
    state = {}
    render() {
        return (
            <div className="carlyHeader">
                <div className="headerWidth">
                    <NavLink to={'/'}>
                        <img src="./images/Carlylogo.png" alt="carly logo" />
                    </NavLink>
                    <span className="phoneNum"><img src="./images/phone.svg" alt="carly phone" />1300 000 000</span>
                </div>
            </div>
        );
    }
}

export default Navbar;