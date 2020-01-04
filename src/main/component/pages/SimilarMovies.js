import React, {Component} from 'react';
import Header from "../../header/Header";
import {Provider} from "react-redux";
import store from "../../redux/store";
import {Card, Divider, Image} from "semantic-ui-react";
import VideoPopup from "../cart/VideoPopup";
import Container from "@material-ui/core/Container";
import Rating from '@material-ui/lab/Rating';
import axios from "axios";

class SimilarMovies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            match: this.props.match,
            movie: []
        }
    }

    componentDidMount() {
        const type = this.state.match;
        let url = "http://localhost:8080/" + type.url
        console.log(url)
        console.log(type)
        axios.get(url)
            .then(res => {
                this.setState({movie: res.data})
            })
            .catch(val => {
                console.log(val)
            })

    }

    render() {
        return (
            <div>
                <Provider store={store}>
                    <Header message='Movie2Night'/>
                    {console.log(this.state.match.params)}
                    <Container fluid={true} className="scrolling-wrapper">
                        <Divider horizontal><h2>Movies Like - {this.state.match.params.movie}</h2></Divider>
                        {

                            this.state.movie.length ?
                                <Card.Group>
                                    {
                                        this.state.movie.map(item =>
                                            <Card>
                                                <Card.Content>
                                                    <Image
                                                        floated='right'
                                                        size='mini'
                                                        src={item.url}
                                                    />
                                                    <Card.Header>{item.name}</Card.Header>
                                                    <Card.Meta>
                                                        <span className='date'>{item.date}</span>
                                                    </Card.Meta>
                                                    <VideoPopup
                                                        url={item.url}
                                                        name={item.name}
                                                        date={item.date}
                                                        imdbRating={item.imdbRating}
                                                        type={item.type}
                                                        genre={item.genre}
                                                        actors={item.actors}
                                                        description={item.description}
                                                        runtime={item.runtime}
                                                    />
                                                </Card.Content>
                                                <Card.Content extra>
                                                    <Rating name="half-rating" value={item.rating} precision={0.5}
                                                            readOnly={true}/>
                                                </Card.Content>
                                            </Card>
                                        )
                                    }
                                </Card.Group> : <h1>No Movies Found Under this category</h1>
                        }
                    </Container>
                </Provider>
            </div>
        );
    }
}

export default SimilarMovies;
