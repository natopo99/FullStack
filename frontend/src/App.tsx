import React, { useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  return (
    <>
      <div className="text-center">
        <h1 className="display-4">Welcome Friends!</h1>
        <br />
        <br />
        <center>
          <img src="frontend\src\img\JoelHiltonHeadshot.jpg" alt="PicOfJoel" />
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
          <a
            class="navbar-brand"
            asp-area=""
            asp-controller="Home"
            asp-action="Index"
          >
            Home
          </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation
            </button>
            <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
                <ul className="navbar-nav flex-grow-1">
                    <li className="nav-item">
                        <a className="nav-link text-dark" asp-area="" asp-controller="Home" asp-action="BaconSale">My Podcasts</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" asp-area="" asp-controller="Home" asp-action="NewMovies">New Movies</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-dark" asp-area="" asp-controller="Home" asp-action="MovieCollection">Movie Collection</a>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
  </Headers>);
}
function App() {
  // const incrementGo = () => setCount(count + 1);
  // const [count, setCount] = useState(0);

  // returning the home page function
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
