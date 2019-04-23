import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import "../../styles/nav.css"
class Nav extends Component {
    render() {
        return (
            <div class="nav">
                <div class="container">
                    <nav class="navbar navbar-expand-lg">
                        <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <NavLink class="navbar-brand" to="/"><i class="fas fa-home"></i></NavLink>
                            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li class="nav-item">
                                    <NavLink class="nav-link" id="title" to="/items" exact activeStyle={{ backgroundColor:'green' }}>What to do with...?</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink class="nav-link" id="title" to="/locations" exact activeStyle={{ backgroundColor:'green' }}>Recycling Centers</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink class="nav-link" id="title" to="/ex" exact activeStyle={{ backgroundColor:'green' }}>Recycling Knowledge</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Nav;