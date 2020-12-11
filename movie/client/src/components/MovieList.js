import React, { Component } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from "semantic-ui-react";

class MovieList extends Component {
  state = {
    movie: [
      { img: "", Name: "" },
      { img: "", Name: "" },
      { img: "", Name: "" },
      { img: "", Name: "" },
      { img: "", Name: "" },
      { img: "", Name: "" },
    ],
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
        <h5 className="listHeader">You are watching</h5>
        <Slider {...settings}>
          <div>
            <img src={this.state.movie[0].img} className="poster" />
            <p className="posterName">{this.state.movie[0].Name}</p>
          </div>
          <div>
            <img src={this.state.movie[1].img} className="poster" />
            <p className="posterName">{this.state.movie[1].Name}</p>
          </div>
          <div>
            <img src={this.state.movie[2].img} className="poster" />
            <p className="posterName">{this.state.movie[2].Name}</p>
          </div>
          <div>
            <img src={this.state.movie[3].img} className="poster" />
            <p className="posterName">{this.state.movie[3].Name}</p>
          </div>
          <div>
            <img src={this.state.movie[4].img} className="poster" />
            <p className="posterName">{this.state.movie[4].Name}</p>
          </div>
          <div>
            <img src={this.state.movie[5].img} className="poster" />
            <p className="posterName">{this.state.movie[5].Name}</p>
          </div>
        </Slider>
      </Container>
    );
  }
}

export default MovieList;
