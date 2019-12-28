import React from 'react';
import Container from "react-bootstrap/Container";
import {Card, Divider, Image, Rating} from "semantic-ui-react";
import Carousel from "react-multi-carousel";
import VideoPopup from "./VideoPopup";
import FavRated from "../FavRated";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 3000},
        items: 5,
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 5,
        partialVisibilityGutter: 40,
        slidesToSlide:5

    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 5,
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 5,
    },
};

const CardBuilder = (props) => {

    return (
        <Container fluid={true} className="scrolling-wrapper"><br/>
            <Divider horizontal><h2>{props.type}</h2></Divider>
            <Carousel responsive={responsive}>
                {
                    props.movies.map(item =>
                        <div id = {item.id}>
                            <Card>
                                <Card.Content>
                                    <Image
                                        src={require('./movie.jpeg')} width="300" height="150"/>
                                    <Card.Header>{item.name}</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>{item.date}</span>
                                    </Card.Meta>
                                    <VideoPopup/>
                                </Card.Content>
                                <Card.Content extra>
                                    <Rating defaultRating={item.rating} maxRating={10} disabled/>
                                    <FavRated fav={1}/>
                                </Card.Content>
                            </Card>
                        </div>
                    )
                }

            </Carousel>
        </Container>
    );
}

export default CardBuilder;
