import React, {Component} from 'react';
import axios from 'axios';

class Movie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []
        }
    }

    componentDidMount() {

        axios.get("http://192.168.0.104:8080/hello",{
                "Access-Control-Allow-Origin": "*",
            }
        ,
            )
            .then(res => {
                // console.log(res.data)
                this.setState({movies: res.data})
            })
            .catch()
    }

    render() {
        const {movies}  = this.state
        return (
            <div>
                <ol>
                List of movies {
                movies.length ?
                movies.map(v=><div id={v.id} >
                <img src={v.thumbnailUrl}/>
                </div>)
                    : "no movies"

            }
                </ol>
            </div>
        );
    }
}

export default Movie;
