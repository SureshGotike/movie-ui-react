import React from 'react';
import MovieCard from './MovieCard';
import MovieService from '../services/MovieService';
import { Grid, Paper, Typography } from "@material-ui/core";


class MovieList extends React.Component{

    constructor(){
        super();

        this.state = {
            movies:[]
        }
    }

    componentDidMount() {

        this.setState(
            () =>(

                {
                    movies: MovieService.getMovies()
                }
            )

        );

    }

    render() {
        return (
            <div style={{ marginTop: 20, padding: 30 }}>

                <Grid container direction={"row"} spacing={5}>
                    {
                        this.state.movies.map(movie =>

                            <Grid item sm={3}>
                                <MovieCard key={movie.movieId} movie={movie} />
                            </Grid>
                        )
                    }

                </Grid>


            </div>
        );
    }


}
export default MovieList;
