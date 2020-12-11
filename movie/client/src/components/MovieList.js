import React, { Component } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from "semantic-ui-react";
import MovieCard from "./MovieCard";

class MovieList extends Component {
  state = {
    movie: [],
  };

  componentDidMount() {
    this.callApi()
      .then((res) => this.setState({ movie: res }))
      .catch((err) => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("http://localhost:5000/api/movies/");
    const body = await response.json();
    console.log(body);
    return body;
  };

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
    };
    return (
      <Container>
        <h4 className="listHeader">Movies</h4>
        <Slider {...settings}>
          {this.state.movie.map((c) => {
            return <MovieCard Name={c.Name} url={c.img} rating={c.rating} />;
          })}
        </Slider>
      </Container>
    );
  }
}

export default MovieList;
