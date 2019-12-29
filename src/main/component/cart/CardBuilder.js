import React from 'react';
import {Divider} from "semantic-ui-react";
import Carousel from "react-multi-carousel";
import Rating from '@material-ui/lab/Rating';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";
import VideoPopup from "./VideoPopup";
import SearchBar from "../SearchBar";
import {Provider} from "react-redux";


const useStyles = makeStyles({
    card: {
        maxWidth: 170,
    },
    media: {
        height: 200,
    },
});

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 3000},
        items: 7,
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 7,
        partialVisibilityGutter: 40,
        slidesToSlide: 6

    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 5,
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 2,
        slidesToSlide: 2
    },
};


const CardBuilder = (props) => {
    const classes = useStyles();


    return (
        <div>
            <br/>
            <Divider horizontal><h2>{props.type}</h2></Divider>
            <Carousel responsive={responsive}>
                {
                    props.movies.map(item =>
                        <div id={item.id}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={require('./movie.jpeg')}
                                        title={item.name}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">{item.name}</Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            <VideoPopup/>
                                            <Rating name="half-rating" value={2.5} precision={0.5} readOnly={true}/>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    )
                }

            </Carousel>
        </div>

    );
}

export default CardBuilder;