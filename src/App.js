import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>

        <Header />
        <div className='container'>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movie/:imdbID">
            <MovieDetails />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        </div>
        <Footer />


      </Router>

    </div>
  );
}

export default App;
