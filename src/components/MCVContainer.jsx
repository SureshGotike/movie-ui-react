import React from 'react';
import MovieHeader from "./MovieHeader";
import MovieCardView from "./MovieCardView";

export default class MCVContainer extends React.Component{


    render() {

        return(
            <div>
            <MovieHeader/>
            <MovieCardView id={this.props.match.params.id}/>
            </div>
        );
    }
}

