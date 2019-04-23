import React, { Component } from 'react';

import Header from "../containers/header";
//import items from "../assets/items.jsx";
import "../styles/items.css";
import RecycleItems from "./RecycleItems/RecycleItems";
import Alphabets from "./Alphabets/Alphabets";
import Dropdown from "./Dropdown/Dropdown";


class Items extends Component {
    render() {
        return (
            <div>
                <Header />
                <div class="container items">
                    <h1>What to do with this item?</h1>
                    <div class="container">
                        <Dropdown />
                    </div>
                    <div class="container">
                        <Alphabets />
                    </div>
                    <div class="container">
                        <RecycleItems />
                    </div>
                </div>
            </div>
        )
    }
}

export default Items;
