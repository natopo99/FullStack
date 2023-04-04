import data from './MovieData.json';
import React, { useState } from 'react';
const MovieData = data.MovieData;

function MovieList(blah: any) {
  const [listMovies, setListMovies] = useState(MovieData);
  const addMovie = () => {
    setListMovies([...MovieData]);
  };
  return (
    // This empty bracket below is specific to react
    <> 
      <div>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          {/* Iterate through the imported json data */}
          <tbody>
            {MovieData.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
