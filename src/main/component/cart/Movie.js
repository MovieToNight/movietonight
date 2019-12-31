import React, {Component} from 'react';
import axios from 'axios';
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import MaterialUIForm from 'react-material-ui-form'
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import {Title} from "@material-ui/icons";


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

                            <TextField label="Rating"
                                       type="number"
                                       name="rating"
                                       value={this.state.rating}
                                       data-validators="isRequired,isAlpha"
                                       onChange={this.getRating}
                            />

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
                        console.log("Res "+res.data)
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
