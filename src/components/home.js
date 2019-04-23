import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import image1 from "../assets/img/recycling-labels.jpg";
import image2 from "../assets/img/recycling_progress_img.png";
import image3 from "../assets/img/Learn-What-Happens-To-The-Recyclables-After-Collection.png"

import Header from "../containers/header";

import "../styles/home.css"

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div class="container home">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src={image1} alt="First slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src={image2} alt="Second slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src={image3} alt="Third slide" />
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                    <div class="container info">
                        <div class="row">
                            <div class="col-md">
                                <h3>How to recycle a particular item</h3>
                                <Link class="link" to="/items">Find out more ></Link>
                            </div>
                            <div class="col-md">
                                <h3>What are locations of recycling centers</h3>
                                <Link class="link" to="/locations">Find out more ></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;