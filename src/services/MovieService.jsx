import movies from './movies.json';

export default class MovieService{


    static getMovies(){

        return movies ? movies : [];
    }

    static getMovieById(id){

        console.log("called getMovieById"+id);
        var moviesArray = [];
        var movie = {};

        moviesArray = movies;

        console.log("moviesArray size is "+moviesArray.length);

        for(var i=0; i<moviesArray.length;i++){

            if(moviesArray[i].movieId == id){
                movie = moviesArray[i];
                break;
            }
            }

        console.log("movie data is "+ movie.movieId);
        return movie;

        // return {movieId:1,
        // movieName:"yevadu",
        //     movieDescription:"sample movie",
        //     rating:4.3
        // };

    }



}
