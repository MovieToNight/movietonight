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
import VideoPopup from "./VideoPopup";


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
const printLog = (e) => {
    console.log(e.target)

}

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
                            <Card className={classes.card} raised={true} variant={"elevation"}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={item.url}
                                        title={item.name}
                                    />
                                    <CardContent id={item.id} onClick={printLog}>
                                        <Typography gutterBottom variant={"caption"} className={""}
                                                    component="h2"><b>{item.name}</b></Typography>
                                        <Typography variant="body1" color="textSecondary" component="p">
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
                                            <Rating name="half-rating" value={item.rating} precision={0.5}
                                                    readOnly={true}/>
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
