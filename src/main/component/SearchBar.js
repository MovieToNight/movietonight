import React from 'react';
import {Dropdown} from 'semantic-ui-react'
import axios from "axios";
import Container from "@material-ui/core/Container";

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            options: [],
            movies: [],
            redirectUrl: ''
        }
    }


    componentDidMount() {
        axios.get("http://localhost:8080/movieWithPoster")
            .then(res => {
                this.setState({
                    movies: res.data
                })
            })
            .catch(val => {
                console.log(val)
            })
    }

    render() {
        return (
            <Container inlist={true} onSelect={this.redirectToSearch}>
                <Dropdown
                    header={'Movies'}
                    placeholder='Search Similar Movies'
                    fluid
                    search
                    selection
                    lazyLoad={true}
                    options={this.state.movies}
                    minCharacters={1}
                    selectOnNavigation={true}
                    value={this.state.redirectUrl}
                    noResultsMessage={'No Movies found in our database, please try selecting some other movie.'}
                    onChange={this.fetchData}
                    button={true}
                    onClose={this.redirectToSearch}
                    onSelect={this.redirectToSearch}
                />
            </Container>


        );
    }

    fetchData = (e, {value}) => {
        this.setState({
            redirectUrl: value.toString()
        })
    }

    redirectToSearch = () => {
        if (this.state.redirectUrl) {
            window.location.href = "similarMovies/" + this.state.redirectUrl
        }

    }

}

export default SearchBar;
