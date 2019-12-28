import React, {Component} from 'react';

import {Card, Divider, Image, Rating} from 'semantic-ui-react'
import VideoPopup from "./VideoPopup";

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

            <Container fluid={true}><br/>
                <Divider horizontal><h2>Action</h2></Divider>
                <Row noGutters={true}>
                    <Col>
                    <Card>
                        <Image src={require('./movie.jpeg')} wrapped ui={false}/>
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
                    </Col><Col>
                    <Card>
                        <Image src={require('./movie.jpeg')} wrapped ui={false}/>
                        <Card.Content>
                            <Card.Header>{this.state.name}</Card.Header>
                            <Card.Meta>
                                <span className='date'>{this.state.releaseDate}</span>
                            </Card.Meta>
                            <Card.Description>
                                {this.state.info}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Rating defaultRating={this.state.rating} maxRating={10} disabled/>
                        </Card.Content>
                    </Card>
                    </Col><Col>
                    <Card>
                        <Image src={require('./movie.jpeg')} wrapped ui={false}/>
                        <Card.Content>
                            <Card.Header>{this.state.name}</Card.Header>
                            <Card.Meta>
                                <span className='date'>{this.state.releaseDate}</span>
                            </Card.Meta>
                            <Card.Description>
                                {this.state.info}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Rating defaultRating={this.state.rating} maxRating={10} disabled/>
                        </Card.Content>
                    </Card>
                    </Col><Col>
                    <Card>
                        <Image src={require('./movie.jpeg')} wrapped ui={false}/>
                        <Card.Content>
                            <Card.Header>{this.state.name}</Card.Header>
                            <Card.Meta>
                                <span className='date'>{this.state.releaseDate}</span>
                            </Card.Meta>
                            <Card.Description>
                                {this.state.info}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Rating defaultRating={this.state.rating} maxRating={10} disabled/>
                        </Card.Content>
                    </Card>
                    </Col><Col>
                    <Card>
                        <Image src={require('./movie.jpeg')} wrapped ui={false}/>
                        <Card.Content>
                            <Card.Header>{this.state.name}</Card.Header>
                            <Card.Meta>
                                <span className='date'>{this.state.releaseDate}</span>
                            </Card.Meta>
                            <Card.Description>
                                {this.state.info}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Rating defaultRating={this.state.rating} maxRating={10} disabled/>
                        </Card.Content>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Image src={require('./movie.jpeg')} wrapped ui={false}/>
                        <Card.Content>
                            <Card.Header>{this.state.name}</Card.Header>
                            <Card.Meta>
                                <span className='date'>{this.state.releaseDate}</span>
                            </Card.Meta>
                            <Card.Description>
                                {this.state.info}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Rating defaultRating={this.state.rating} maxRating={10} disabled/>
                        </Card.Content>
                    </Card>
                    </Col>
                </Row>
                <hr/>
            </Container>
        );
    }
}

export default MovieCard;
