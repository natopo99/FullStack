import React, { useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './Movies';
import Podcasts from './Podcasts';
import joel from './JoelHiltonHeadshot.jpg';

function HomePage() {
  return (
    <>
      <div className="text-center">
        <h1 className="display-4">Welcome Friends!</h1>
        <br />
        <br />
        <center>
          <img src={joel} alt="PicOfJoel" />
        </center>
        <br></br>
        <br></br>
        <div className="container mr-2 ml-2 display-4 text-md">
          <h6>
            This site showcases the many interests and talents of Joel Hilton.
            Feel free to check out his podcast or browse his movie collection by
            following the links above. Enjoy!
          </h6>
        </div>
      </div>
    </>
  );
}
function Nav() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
        <div className="container">
          <a className="" href="home">
            Home
          </a>{' '}
          |<a href="movies"> Movies</a> |<a href="podcasts"> Podcasts</a>
        </div>
      </nav>
    </header>
  );
}
function App() {
  const path = window.location.pathname;

  let content;

  // Allow for changing of the Routes

  content = <HomePage />;

  if (path === '/movies') {
    content = <MovieList />;
  } else if (path === '/podcasts') {
    content = <Podcasts />;
  }
  //Render out Selected Content with Common Navbar
  return (
    <div>
      <div className="App">
        <Nav />
        {content}
      </div>
    </div>
  );
}

export default App;
