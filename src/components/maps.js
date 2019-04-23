import React, { Component } from 'react';
import Header from "../containers/header";

import "../styles/maps.css";

class Maps extends Component {
    render() {
        return (
            <div>
                <Header />
                <div class="container maps">
                    <h1>Recycling Centers</h1>
                    <p>There are several locations where you can either donate second hand goods, or sell your trash. The map details several locations where you can recycle your items.</p>
                </div>
                <div class="container">
                    <p>There are many places where you can recycle your items. The most common is the blue recycle bins that is available under your HDB block or within your condominiums.</p>
                </div>
                <div class="container">
                    <p>The map below shows locations for centres where you can sell or donate your second hand goods, along with locations for e-waste recycling centres.</p>
                </div>
                <div class="container">
                    <iframe title="recycling_map" src="https://www.google.com/maps/d/embed?mid=1Lfq-Rz5iMp6lj8vsUDOuaQFSe0513QC8&z=11" width="640" height="480"></iframe>
                </div>
            </div>
        )
    }
}

export default Maps;