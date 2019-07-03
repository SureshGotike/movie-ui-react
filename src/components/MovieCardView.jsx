import React from 'react';
import {Card} from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import MovieService from "../services/MovieService";
import withStyles from "@material-ui/core/styles/withStyles";
import { Mood} from '@material-ui/icons';
import {MoodBad} from "@material-ui/icons";
import {Star} from "@material-ui/icons";


const styles = muiBaseTheme =>({
    card: {
        height: "100%",
        maxWidth: 1000,
        // paddingLeft: '20%',
        paddingTop: '0.5%',
        margin: "auto",
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }

    },
    media: {
        height: 400,
        // maxWidth: '100%',
        paddingTop: '1%',
        // paddingLeft: '0%',
        // paddingRight: '10%',

    },
    content:{
        // height:100,
        // maxWidth: '100%',
        // paddingTop:"1%",
        // paddingLeft:"40%",
        textAlign: "left",
        padding: muiBaseTheme.spacing.unit * 3
    },
    contentTitle:{
        color:"#00bfa5",
        fontWeight:"bold",
    },
    contentBody:{
        color:"#424242",
        fontWeight:"normal",
    },
    contentRating:{
        color:"#304ffe",
        fontWeight:"bold",
    },

    bookTicketButton:{
        color:"#4a148c",
        fontWeight:"bold",
    },
    mood:{
        color:"#4caf50",
    },
    badmood:{
        color:"#ef5350",
    },
    star:{
        color:"#ffd600",
    }

});


class MovieCardView extends React.Component{


    constructor(props){
        super(props);

            this.state = {
                movie:{}
        };
    }

    componentDidMount() {
        console.log("id value is "+ this.props.id);

        this.setState(
            () =>(

                {
                    movie: MovieService.getMovieById(this.props.id)
                }
            )

        );
    }


    render() {

        const {classes} = this.props;
        return(

            <Card className={classes.card}>
                <CardActionArea>

                    <CardMedia
                        className={classes.media}
                        component="img"
                        alt="Nannaku Prematho"
                        image={`data:image/jpeg;base64,${this.state.movie.movieImage}`}
                        title="Nannaku Prematho"
                    />

                    <CardContent className={classes.content}>
                        <Typography gutterBottom variant="h3" component="h2" align={"center"} className={classes.contentTitle}>
                            {this.state.movie.movieName}
                        </Typography>
                        <Typography component="p" className={classes.contentBody}>{this.state.movie.movieDescription}</Typography>
                        <br/>
                        <div style={{display:"flex"}}>
                        <Star className={classes.star}/>  <Typography component="p" className={classes.contentRating} style={{marginLeft:5}}>{this.state.movie.rating}</Typography>
                        </div>
                        <br/>
                        <div style={{display:"flex"}}>
                        <Mood style={{flexDirection: "column"}} className={classes.mood}/>1250
                        <MoodBad color={"secondary"} style={{marginLeft:20}} className={classes.badmood}/>33
                        </div>
                    </CardContent>

                </CardActionArea>

                <CardActions>

                    {/*<Link to={"/"}>*/}
                    <Button className={classes.bookTicketButton} fullWidth={true} variant="contained" color={"secondary"} size={"small"}>
                        Book Ticket
                    </Button>
                    {/*</Link>*/}
                </CardActions>

            </Card>

        );
    }


}

export default withStyles(styles)(MovieCardView);