import React, { Component } from 'react';
import Logo from "../../assets/img/Recycle001.png";
import "../../styles/title.css"

class Title extends Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="row justify-content-center">
                        <div id="logo">
                            <img className="logo" src={Logo} alt="" />
                        </div>
                        <div className="heading">
                            <h1>Recycle4U</h1>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Title;