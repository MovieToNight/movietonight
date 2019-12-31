import React, {Component} from 'react';
import axios from 'axios';
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import MaterialUIForm from 'react-material-ui-form'
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import {Title} from "@material-ui/icons";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Header from "../../header/Header";
import Navbar from "react-bootstrap/Navbar";
import {Sticky} from "semantic-ui-react";


class Movie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            error: [],
            selectedMovieID: '',
            rating: 0,
            moviesFetchedByID: []
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

    }


    render() {

        const {movies} = this.state
        return (
            <div>

                <Navbar bg="dark" expand="lg" variant="dark">
                    <Navbar.Brand href="/">
                        {<img src={require("./M2N-logos_black.png")} alt="logo" width="100" height="50"/>}
                    </Navbar.Brand>
                </Navbar>

                <MaterialUIForm onSubmit={this.printAll}>
                    <FormControl>
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

                            <InputLabel>Rating</InputLabel>
                            <Select value={this.state.rating} name="Rating" onChange={this.getRating}>
                                <MenuItem value=""><em>Please select Rating ...</em></MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                            </Select>
                            <Button variant="" type="submit">Submit</Button>
                        </Container>

                    </FormControl>

                </MaterialUIForm>

            </div>
        );
    }

    printState = (e) => {
        this.setState({
            selectedMovieID: e.target.value.split('-')[1]
        })

    }

    getRating = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )

    }

    printAll = (e) => {

        const url = "http://www.omdbapi.com/?i=" + this.state.selectedMovieID + "&apikey=80bca1c4";

        console.log(url)


        var movie = '';

        axios.get(url)
            .then(res => {
                axios.post('http://localhost:8080/add',
                    {

                        'imdbData': res,
                    },
                    {
                        "Access-Control-Allow-Origin": "*",
                    }
                    ,
                )
                    .then(res => {
                        console.log("Res " + res.data)
                    })
                    .catch(val => {
                        console.log(val)
                    })

            })
            .catch(val => {
                console.log(val)
            })


        console.log('Request body', this.state.moviesFetchedByID)
        console.log('Request body', movie)


    }

}

export default Movie;
