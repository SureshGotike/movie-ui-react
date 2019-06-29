import React from 'react';
import {Grid} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

class MovieCard extends React.Component{


    render() {
        return(
                    <paper>
                    <Card>
                        <CardActionArea onClick={this.movieclicked}>

                            <CardMedia
                                component="img"
                                alt="Nannaku Prematho"
                                height="350"
                                image={`data:image/jpeg;base64,${this.props.movie.movieImage}`}
                                title="Nannaku Prematho"
                            />

                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {this.props.movie.movieName}
                                </Typography>
                                <Typography component="p">{this.props.movie.movieDescription}</Typography>
                                <Typography component="p">{this.props.movie.rating}</Typography>
                            </CardContent>

                        </CardActionArea>

                        <CardActions>
                            <Button size="small" color="default">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>

                    </Card>
                    </paper>
        );
    }
}

export default MovieCard;