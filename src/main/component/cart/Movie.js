import React, {Component} from 'react';
import axios from 'axios';
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import {Button} from "react-bootstrap";
import Form from "react-bootstrap/Form";

class Movie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            error: [],
            selectedMovieID: ''
        }
    }

    handleChange = (e) => {
        if (e.target.value.length > 1) {
            const url = "http://www.omdbapi.com/?s=" + e.target.value + "&apikey=80bca1c4";
            console.log(url)
            axios.get(url,
                {
                    "Access-Control-Allow-Origin": "*",
                }
                ,
            )
                .then(res => {
                    // console.log(res.data)
                    if (res.data.Response == 'False') {
                        this.setState({error: "Movie Not found"})
                    } else {
                        this.setState({movies: res.data.Search})
                    }
                })
                .catch(val => {
                    console.log(val)
                })
        }
        {
            console.log("On Change")
        }
    }


    render() {

        const {movies} = this.state
        return (
            <div>
                <Container>
                    {/*{movies.length ? movies.map(r=>{t = r.Title}) : error}*/}
                    <Autocomplete
                        id="combo-box-demo"
                        options={movies}
                        getOptionLabel={option => option.Title + "-" + option.imdbID}
                        filterSelectedOptions={true}
                        style={{width: 300}}
                        renderInput={params => (
                            <TextField
                                {...params}
                                label="Combo box" variant="outlined" fullWidth
                                onChange={this.handleChange}
                                onBlur={this.printState}
                            />
                        )}
                    >
                    </Autocomplete>
                </Container>
            </div>
        );
    }

    printState = e => {
        this.setState({
            selectedMovieID: e.target.value.split('-')[1]
        })

    }
}

export default Movie;
