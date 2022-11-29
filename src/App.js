import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Nav from "./components/nav";
import NavBar from "./components/NavBar";
import Home from "./views/Home";
import Movies from "./views/Movies";
import MovieDetails from "./components/MovieDetails";
import TvProgram from "./views/TvProgram";
import SeriesDetails from "./components/SeriesDetails";
import People from "./views/People";
import PeopleDetails from "./components/PeopleDetails";
import More from "./views/More";
import Search from "./components/Search";
import Favorite from "./components/Favorite";
import NotFound from "./components/NotFound";

// import GlobalProvider from "./context/GlobalState";

function App() {
  debugger
  return (
    // <GlobalProvider>
    <Router>
      
      <NavBar />

      <Routes>
      
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/movies">
        <Movies />
        </Route>
        <Route exact path="/movies/:id">
        <MovieDetails />
        </Route>
        <Route exact path="/series">
          <TvProgram />
        </Route>
        <Route exact path="/series/:id">
        <SeriesDetails />
        </Route>
        <Route exact path="/people">
          <People />
        </Route>
        <Route exact path="/people/:id">
        <PeopleDetails />
        </Route>
        <Route exact path="/more">
          <More />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/favorites">
         <Favorite />
        </Route>
        <Route exact path="*">
          <NotFound />
        </Route>
      </Routes>
    </Router>
    // </GlobalProvider>
  );
}

export default App;



