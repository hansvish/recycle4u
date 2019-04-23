import React from "react";

const Dropdown = () => (
    <div class="dropdown" style={{paddingTop: "10px"}}>
        <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Select item
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#Aerosol">Aerosol</a>
            <a class="dropdown-item" href="#AlFo">Aluminium Foil</a>
            <a class="dropdown-item" href="#Batteries">Batteries</a>
            <a class="dropdown-item" href="#Books">Books</a>
            <a class="dropdown-item" href="#Clothes">Clothes</a>
        </div>
    </div>
)

export default Dropdown;
