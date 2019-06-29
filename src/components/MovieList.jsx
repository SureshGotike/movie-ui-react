import React from 'react';
import MovieCard from './MovieCard';
import MovieService from '../services/MovieService';


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
            <div>
                {
                this.state.movies.map(movie => <MovieCard key={movie.movieId} movie={movie}/>)
                }
            </div>
        );
    }


}
export default MovieList;
