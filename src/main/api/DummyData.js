import React from 'react';
import {Card, Divider, Image, Rating} from "semantic-ui-react";
import VideoPopup from "../component/cart/VideoPopup";
import FavRated from "../component/FavRated";
import Carousel from "react-multi-carousel";
import Container from "react-bootstrap/Container";

export const DummyData = (props) => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5,
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 5,
            partialVisibilityGutter: 40
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 5,
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 3,
        },
    };

    const {name, releaseDate, info, rating, imageUrl} = {props};

    return (

        <Container fluid={true} className="scrolling-wrapper"><br/>
            <Divider horizontal><h2>Action</h2></Divider>



            <Carousel responsive={responsive}>
            </Carousel>


        </Container>

    )

}


