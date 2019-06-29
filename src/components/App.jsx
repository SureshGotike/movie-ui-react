import React from 'react';
import '../styles/App.css';
import MovieHeader from './MovieHeader';
import MovieList from './MovieList';

function App() {
  return (
    <div className="App">
        <MovieHeader/>
        <MovieList/>
    </div>
  );
}

export default App;
