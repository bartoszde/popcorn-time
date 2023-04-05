import { useState } from 'react';

import moviesFromJson from "./data/movies.json";

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import './App.css';

function App() {

  const [moviesArr, setMoviesArr] = useState(moviesFromJson);


  const [title, setTitle] = useState("");


  const deleteMovie = (movieId) => {
    const newList = moviesArr.filter( movieDetails => movieDetails.id !== movieId );
    setMoviesArr(newList);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <div className="App">
      <Header numberOfMovies={moviesArr.length} />

      <section>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
          <button>Create</button>
        </form>
      </section>

      <Main moviesArr={moviesArr} callbackToDelete={deleteMovie} />
      <Footer />
    </div>
  );
}

export default App;
