import React from 'react';
import MovieCard from './MovieCard';
import MovieService from '../services/MovieService';
import { Grid } from "@material-ui/core";
import API from '../services/api.js';

const baseurl = 'https://movieservice.cfapps.io/movies/';

const url = baseurl+'/getMovieDocs';
class MovieList extends React.Component{

    constructor(){
        super();

        this.state = {
            movies:[]
        }
    }

    componentDidMount() {

        API.get('/getMovieDocs',{
            method: 'GET',
                mode: 'no-cors',
                headers: {
                'Access-Control-Allow-Origin': 'https://movieservice.cfapps.io',
                    'Content-Type': 'application/json',
            },
        }).then((res)=>{
            this.setState(
                {
                    movies: res.data
                }
            );
        });


        // this.setState(
        //     () =>(
        //
        //         {
        //             movies: MovieService.getMovies()
        //         }
        //     )
        //
        // );

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
