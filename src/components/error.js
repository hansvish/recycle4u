import React, {Component} from 'react';
import Header from '../containers/header';
import {Link} from 'react-router-dom';

import "../styles/error.css"

class Error extends Component {
    render() {
        return (
            <div>
                <Header />
                <div class="container error">
                    <h1>This page does not exist.</h1>
                    <Link to="/">Return home</Link>
                </div>
            </div>
        )
    }
}

export default Error;