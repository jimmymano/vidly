import React, { Component } from "react";
import Like from "./common/like";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";

class Movies extends Component {
  state = { movies: getMovies(), pageSize: 4 };
  handlePageChange = (page) => {
    console.log(page);
  };
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return <p>There are no movies in this database</p>;
    return (
      <div>
        <p>Showing {this.state.movies.length} movies in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th> </th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td> {movie.title} </td>
                <td> {movie.genre.name} </td>
                <td> {movie.numberInStock} </td>
                <td> {movie.dailyRentalRate} </td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn bg-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Movies;
