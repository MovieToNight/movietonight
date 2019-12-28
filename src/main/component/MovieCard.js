import React, {Component} from 'react';

import {Card, Divider, Image, Rating} from 'semantic-ui-react'
import VideoPopup from "./VideoPopup";
import Carousel from "react-multi-carousel";
import Container from "react-bootstrap/Container";
import "react-multi-carousel/lib/styles.css";
import FavRated from "./FavRated";

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

class MovieCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            releaseDate: props.releaseDate,
            info: props.info,
            rating: props.rating,
            imageUrl: props.imageUrl
        }
    }

    render() {
        return (
            <Container fluid={true} className="scrolling-wrapper"><br/>
                <Divider horizontal><h2>Action</h2></Divider>
                <Carousel responsive={responsive}>
                    <div>

                        <Card>
                            <Image src={require('./movie.jpeg')} width="300" height="150"/>
                            <Card.Content>
                                <Card.Header>{this.state.name}</Card.Header>
                                <Card.Meta>
                                    <span className='date'>{this.state.releaseDate}</span>
                                </Card.Meta>
                                <VideoPopup/>
                            </Card.Content>
                            <Card.Content extra>
                                <Rating defaultRating={this.state.rating} maxRating={10} disabled/>
                            <FavRated fav = {1}/>
                            </Card.Content>
                        </Card>

                    </div>


                    <div>

                        <Card>
                            <Image src={require('./movie.jpeg')} width="300" height="150"/>
                            <Card.Content>
                                <Card.Header>{this.state.name}</Card.Header>
                                <Card.Meta>
                                    <span className='date'>{this.state.releaseDate}</span>
                                </Card.Meta>
                                <Card.Description>
                                    {this.state.info}
                                </Card.Description><Card.Description>
                                <VideoPopup/>
                            </Card.Description>

                            </Card.Content>
                            <Card.Content extra>
                                <Rating defaultRating={this.state.rating} maxRating={10} disabled/>
                            </Card.Content>
                        </Card>

                    </div>
                    <div>

                        <Card>
                            <Image src={require('./movie.jpeg')} width="300" height="150"/>
                            <Card.Content>
                                <Card.Header>{this.state.name}</Card.Header>
                                <Card.Meta>
                                    <span className='date'>{this.state.releaseDate}</span>
                                </Card.Meta>
                                <Card.Description>
                                    {this.state.info}
                                </Card.Description><Card.Description>
                                <VideoPopup/>
                            </Card.Description>

                            </Card.Content>
                            <Card.Content extra>
                                <Rating defaultRating={this.state.rating} maxRating={10} disabled/>
                            </Card.Content>
                        </Card>

                    </div>
                    <div>

                        <Card>
                            <Image src={require('./movie.jpeg')} width="300" height="150"/>
                            <Card.Content>
                                <Card.Header>{this.state.name}</Card.Header>
                                <Card.Meta>
                                    <span className='date'>{this.state.releaseDate}</span>
                                </Card.Meta>
                                <Card.Description>
                                    {this.state.info}
                                </Card.Description><Card.Description>
                                <VideoPopup/>
                            </Card.Description>

                            </Card.Content>
                            <Card.Content extra>
                                <Rating defaultRating={this.state.rating} maxRating={10} disabled/>
                            </Card.Content>
                        </Card>

                    </div>
                    <div>

                        <Card>
                            <Image src={require('./movie.jpeg')} width="300" height="150"/>
                            <Card.Content>
                                <Card.Header>{this.state.name}</Card.Header>
                                <Card.Meta>
                                    <span className='date'>{this.state.releaseDate}</span>
                                </Card.Meta>
                                <Card.Description>
                                    {this.state.info}
                                </Card.Description><Card.Description>
                                <VideoPopup/>
                            </Card.Description>

                            </Card.Content>
                            <Card.Content extra>
                                <Rating defaultRating={this.state.rating} maxRating={10} disabled/>
                            </Card.Content>
                        </Card>

                    </div>
                    <div>

                        <Card>
                            <Image src={require('./movie.jpeg')} width="300" height="150"/>
                            <Card.Content>
                                <Card.Header>{this.state.name}</Card.Header>
                                <Card.Meta>
                                    <span className='date'>{this.state.releaseDate}</span>
                                </Card.Meta>
                                <Card.Description>
                                    {this.state.info}
                                </Card.Description><Card.Description>
                                <VideoPopup/>
                            </Card.Description>

                            </Card.Content>
                            <Card.Content extra>
                                <Rating defaultRating={this.state.rating} maxRating={10} disabled/>
                            </Card.Content>
                        </Card>

                    </div>
                    <div>

                        <Card>
                            <Image src={require('./movie.jpeg')} width="300" height="250"/>
                            <Card.Content>
                                <Card.Header>{this.state.name}</Card.Header>
                                <Card.Meta>
                                    <span className='date'>{this.state.releaseDate}</span>
                                </Card.Meta>
                                <Card.Description>
                                    {this.state.info}
                                </Card.Description><Card.Description>
                                <VideoPopup/>
                            </Card.Description>

                            </Card.Content>
                            <Card.Content extra>
                                <Rating defaultRating={this.state.rating} maxRating={10} disabled/>
                            </Card.Content>
                        </Card>

                    </div>
                    <div>

                        <Card>
                            <Image src={require('./movie.jpeg')} width="300" height="250"/>
                            <Card.Content>
                                <Card.Header>{this.state.name}</Card.Header>
                                <Card.Meta>
                                    <span className='date'>{this.state.releaseDate}</span>
                                </Card.Meta>
                                <Card.Description>
                                    {this.state.info}
                                </Card.Description><Card.Description>
                                <VideoPopup/>
                            </Card.Description>

                            </Card.Content>
                            <Card.Content extra>
                                <Rating defaultRating={this.state.rating} maxRating={10} disabled/>
                            </Card.Content>
                        </Card>

                    </div>
                    <div>

                        <Card>
                            <Image src={require('./movie.jpeg')} width="300" height="250"/>
                            <Card.Content>
                                <Card.Header>{this.state.name}</Card.Header>
                                <Card.Meta>
                                    <span className='date'>{this.state.releaseDate}</span>
                                </Card.Meta>
                                <Card.Description>
                                    {this.state.info}
                                </Card.Description><Card.Description>
                                <VideoPopup/>
                            </Card.Description>

                            </Card.Content>
                            <Card.Content extra>
                                <Rating defaultRating={this.state.rating} maxRating={10} disabled/>
                            </Card.Content>
                        </Card>

                    </div>


                    <hr/>
                </Carousel>
            </Container>


        );
    }
}

export default MovieCard;
