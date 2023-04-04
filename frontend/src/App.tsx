import React, { useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './Movies';

function HomePage() {
  return (
    <>
      <div className="text-center">
        <h1 className="display-4">Welcome Friends!</h1>
        <br />
        <br />
        <center>
          <img src="./JoelHiltonHeadshot.jpg" alt="PicOfJoel" />
        </center>
      </div>
    </>
  );
}
function Nav() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
        <div className="container">
          <button className="btn btn-danger col-4 p-4">Movie List</button>
          <button className="btn btn-danger col-6 p-4">Bacon Sale</button>
          <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
            <ul className="navbar-nav flex-grow-1">
              <li className="nav-item">
                {/* <a className="nav-link text-dark" asp-area="" asp-controller="Home" asp-action="BaconSale">My Podcasts</a> */}
              </li>
              <li className="nav-item">
                {/* <a className="nav-link text-dark" asp-area="" asp-controller="Home" asp-action="NewMovies">New Movies</a> */}
              </li>
              <li className="nav-item">
                {/* <a className="nav-link text-dark" asp-area="" asp-controller="Home" asp-action="MovieCollection">Movie Collection</a> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
function App() {
  // const incrementGo = () => setCount(count + 1);
  // const [count, setCount] = useState(0);

  // returning the home page function
  return (
    <div>
      <Nav />
      <HomePage />
      <br></br>
      <MovieList />
    </div>
  );
}

export default App;
