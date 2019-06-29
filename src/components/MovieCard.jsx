import React from 'react';

class MovieCard extends React.Component{


    render() {
        return(

            <div>

                 <div>
                   <h1> {this.props.movie.movieName} </h1>
                 </div>

                  <div>
                      <img src={`data:image/jpeg;base64,${this.props.movie.movieImage}`} />
                  </div>

                  <div>
                      <h2>
                          {this.props.movie.movieDescription}
                      </h2>

                  </div>

                <div>
                    <h2>{this.props.movie.rating}</h2>
                </div>

            </div>

        );
    }
}

export default MovieCard;