import movies from './movies.json';
import API from '../services/api.js';
import axios from 'axios';
const baseurl = 'https://movieservice.cfapps.io/movies/';

export default class MovieService{


    static async getMovies(){

        // if(process.env.ISAPIENABLED == "Y"){
            console.log("entered getAllmovies");
            const url = baseurl+'/getMovieDocs/';

            var response = await axios.get(url,{
                method: 'GET',
                mode: 'no-cors',
                headers: {
                    'Access-Control-Allow-Origin': 'https://movieservice.cfapps.io',
                    'Content-Type': 'application/json',
                },
                // withCredentials: true,
                // credentials: 'same-origin',
            });

        var movies = response.data;
                // .then(res => {
                //     console.log("data is "+ res.data);
                //         movies = res.data;
                //         return movies;
                //     },err =>{console.log("movielist error "+err)}
                //
                //     );

            return movies;

        // API.get('getMovieDocs')
            //     .then(res => {
            //         console.log("exited getAllmovies");
            //         return res.data ? res.data: [];
            //     })
        // }

        // return movies ? movies : [];
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
