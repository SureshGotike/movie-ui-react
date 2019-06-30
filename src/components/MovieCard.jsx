import React from 'react';
import {Grid} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import MovieCardView from './MovieCardView';

import {Route, Link } from 'react-router-dom';


class MovieCard extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            learnmore_clicked: false,
        };
        this.learnmore_onclick = this.learnmore_onclick.bind(this);
    }


    learnmore_onclick(){
        this.setState(

            {
                learnmore_clicked: true,
            }

        );
    }


    render() {
        return(
            <paper>
                <Card>
                    <CardActionArea>

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

                        <Link to={"/movie/"+this.props.movie.movieId}>

                        <Button size="small" color="default">
                            Share
                        </Button>
                        </Link>

                        <Link to={"/movie/"+this.props.movie.movieId}>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                        </Link>
                    </CardActions>
                    {/*{*/}
                    {/*    this.state.learnmore_clicked?<MovieCardView movie={this.props.movie}/>:null*/}
                    {/*}*/}

                </Card>
            </paper>
        );
    }
}

export default MovieCard;