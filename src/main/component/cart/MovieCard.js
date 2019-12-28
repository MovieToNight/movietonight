import React, {Component} from 'react';
import "react-multi-carousel/lib/styles.css";
import CardBuilder from "./CardBuilder";

class MovieCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            action: [],
            sifi: []
        }
    }

    componentDidMount() {
        this.setState({
            action: [
                {id: '1', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '2', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '3', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '4', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '5', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '6', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '7', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
                {id: '8', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'action'},
            ],

            sifi: [
                {id: '1', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'sifi'},
                {id: '2', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'sifi'},
                {id: '3', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'sifi'},
                {id: '4', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'sifi'},
                {id: '5', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'sifi'},
                {id: '6', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'sifi'},
                {id: '7', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'sifi'},
                {id: '8', url: '', name: 'Dabang', date: '28 December 2019', rating: '3', type: 'sifi'},
            ]
        })
    }


    render() {
        return (
            <div>
                <CardBuilder movies={this.state.action} type = 'Action'/>
                <CardBuilder movies={this.state.sifi} type = 'Sifi'/>
                <CardBuilder movies={this.state.sifi} type = 'Sifi'/>
                <CardBuilder movies={this.state.sifi} type = 'Sifi'/>
                <CardBuilder movies={this.state.sifi} type = 'Sifi'/>
            </div>
        );
    }

}

export default MovieCard;
