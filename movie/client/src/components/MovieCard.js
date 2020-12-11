import React, { Component } from "react";

class MovieCard extends Component {
  render() {
    return (
      <MovieInfo
        rating={this.props.rating}
        url={this.props.url}
        name={this.props.Name}
      />
    ); // return
  } //render
} //Componet

class MovieInfo extends Component {
  render() {
    return (
      <div>
        <img src={this.props.url} className="poster" />
        <p className="posterName">
          {this.props.name}({this.props.rating})
        </p>
      </div>
    );
  } //render
} //Componet

export default MovieCard;
