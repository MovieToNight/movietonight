import React, {Component} from 'react';
import axios from 'axios';
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import MaterialUIForm from 'react-material-ui-form'
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Navbar from "react-bootstrap/Navbar";
import MySnackbarContentWrapper from "../notification/MySnackbarContentWrapper";


class Movie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            error: [],
            selectedMovieID: '',
            movieType: '',
            moviesFetchedByID: [],
            rating: '',
            message: ''
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
                    <Navbar.Text>
                        <h3>Admin Page</h3>
                    </Navbar.Text>
                </Navbar>

                <br/>

                <MaterialUIForm onSubmit={this.printAll}>
                    <Container>
                        <FormControl aria-live={"assertive"} variant="filled">
                            {/*{movies.length ? movies.map(r=>{t = r.Title}) : error}*/}
                            <Autocomplete
                                id="combo-box-demo"
                                options={movies}
                                getOptionLabel={option => option.Title + "-" + option.imdbID}
                                filterSelectedOptions={true}
                                style={{width: 400}}
                                renderInput={params => (
                                    <TextField
                                        {...params}
                                        label="Find movies" variant="outlined" fullWidth
                                        onChange={this.handleChange}
                                        onBlur={this.printState}
                                    />
                                )}
                            >
                            </Autocomplete>

                            <br/>

                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={this.state.movieType}
                                name="Movie Type"
                                onChange={this.handleMovieType}
                            >

                                <MenuItem disabled={true}><em>Movie Types</em></MenuItem>
                                <MenuItem value={1}>Time Travel</MenuItem>
                                <MenuItem value={2}>Time Loop</MenuItem>
                                <MenuItem value={3}>Marvel</MenuItem>
                                <MenuItem value={4}>DC</MenuItem>
                                <MenuItem value={5}>Mind Bending</MenuItem>
                                <MenuItem value={6}>Christopher Nolan</MenuItem>
                                <MenuItem value={7}>Parallel Universe</MenuItem>
                                <MenuItem value={8}>Mystery</MenuItem>
                                <MenuItem value={9}>Deja Vu</MenuItem>
                                <MenuItem value={10}>Psychological Thrillers</MenuItem>
                            </Select>

                            <br/>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={this.state.rating}
                                name="Movie Type"
                                onChange={this.handleRating}>

                                <MenuItem value="" disabled={true}><em>Movie Rating</em></MenuItem>
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
                            <br/>
                            <MySnackbarContentWrapper message={this.state.message}/>
                            <br/>
                            <Button variant="contained" type="Reset" onClick={this.clear}>Reset</Button>
                        </FormControl>
                    </Container>
                </MaterialUIForm>
            </div>
        );
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

    printState = (e) => {
        this.setState({
            selectedMovieID: e.target.value.split('-')[1]
        })

    }

    handleMovieType = (e) => {
        this.setState(
            {
                movieType: e.target.value
            }
        )

    }

    handleRating = (e) => {
        this.setState({
            rating: e.target.value
        })
    }

    clear = (e) => {
        this.setState(
            {
                movieType: '',
                selectedMovieID: '',
                moviesFetchedByID: []
            }
        )

    }

    printAll = (e) => {
        const url = "http://www.omdbapi.com/?i=" + this.state.selectedMovieID + "&apikey=80bca1c4";
        console.log(url)
        let movie = '';
        axios.get(url)
            .then(res => {
                axios.post('http://localhost:8080/add',
                    {
                        'imdbData': res,
                        'rating': this.state.rating,
                        'type': this.state.movieType
                    },
                    {
                        "Access-Control-Allow-Origin": "*",
                    }
                    ,
                )
                    .then(res => {
                        console.log("Res " + res.data)
                        this.setState({
                            message: 'Successfully Added'
                        })
                    })
                    .catch(val => {
                        console.log(val)
                        this.setState({
                            message: 'Failed to add'
                        })
                    })

            })
            .catch(val => {
                this.setState({
                    message: 'Failed load from imdb'
                })
                console.log(val)
            })
    }

}

export default Movie;
