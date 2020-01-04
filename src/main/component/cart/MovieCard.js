import React, {Component} from 'react';
import "react-multi-carousel/lib/styles.css";
import CardBuilder from "./CardBuilder";
import Container from "@material-ui/core/Container";
import axios from "axios";
import SearchBar from "../SearchBar";

class MovieCard extends Component {


    constructor(props) {
        super(props);
        this.state = {
            data: {'': []},
            data1: []
        }
    }


    componentDidMount() {
        axios.get('http://localhost:8080/movies')
            .then(res => {
                let arr = [];
                Object
                        .keys(res.data.movieTypeToMovies)
                        .forEach(
                        function (key) {
                            arr.push(res.data.movieTypeToMovies[key]);
                        });
                    this.setState({
                        data1: arr
                    })
                }
            )
            .catch(val => {
                console.log(val)
            })

    }


    render() {
        return (
            <div>
                <Container maxWidth='lg' fluid={true} className="scrolling-wrapper"><br/>
                    <SearchBar/>
                    {

                        this.state.data1.map((val, index) =>

                            <CardBuilder movies={val} type = {
                                val[0].type
                            }/>

                        )

                    }
                </Container>
            </div>
        );
    }

}

export default MovieCard;
