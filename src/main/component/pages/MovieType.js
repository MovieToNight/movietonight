import React, {Component} from 'react';
import Header from "../../header/Header";
import {Provider} from "react-redux";
import store from "../../redux/store";
import {Card, Divider, Image, Rating} from "semantic-ui-react";
import VideoPopup from "../cart/VideoPopup";
import FavRated from "../FavRated";
import Carousel from "react-multi-carousel";
import Container from "react-bootstrap/Container";

class MovieType extends Component {

    constructor(props) {
        super(props);
        this.state = {
            match: this.props.match,
            movie: []
        }
    }

    componentDidMount() {
        this.setState({
            movie: [
                {id: '1', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '2', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '3', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '4', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '5', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '6', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '7', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '8', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '8', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '8', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '8', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '8', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '8', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '8', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '8', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '8', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '8', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '8', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '8', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '8', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '8', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '8', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '8', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '8', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '8', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '8', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '8', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '8', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '8', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '8', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
            ]
        })
    }

    render() {
        return (
            <div>
                <Provider store={store}>
                    <Header message='Movie2Night'/>
                    <Container fluid={true} className="scrolling-wrapper">
                        <Divider horizontal><h2>{this.state.match.params.genre}</h2></Divider>
                        <Card.Group>
                            {
                                this.state.movie.map(item =>
                                    <Card>
                                        <Card.Content>
                                        <Image
                                            floated='right'
                                            size='mini'
                                            src = {require('./movie.jpeg')}
                                        />
                                            <Card.Header>{item.name}</Card.Header>
                                            <Card.Meta>
                                                <span className='date'>{item.date}</span>
                                            </Card.Meta>
                                            <VideoPopup/>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <Rating defaultRating={item.rating} maxRating={10} disabled/>
                                        </Card.Content>
                                    </Card>
                                )
                            }
                        </Card.Group>
                    </Container>
                </Provider>
            </div>
        );
    }
}

export default MovieType;
