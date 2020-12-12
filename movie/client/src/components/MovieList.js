import React, { Component } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from "semantic-ui-react";
import MovieCard from "./MovieCard";

class MovieList extends Component {
  state = {
    movie: [],
    ordered: [],
    que: [],
    AccountID: "",
  };

  componentDidMount() {
    this.getAccountID()
      .then((res) => {
        window.localStorage.setItem("AccountID", res);
      })
      .catch((err) => console.log(err));
    this.callApi()
      .then((res) => this.setState({ movie: res }))
      .catch((err) => console.log(err));

    this.callOrdered()
      .then((res) => this.setState({ ordered: res }))
      .catch((err) => console.log(err));
    this.callQueue()
      .then((res) => this.setState({ que: res }))
      .catch((err) => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("http://localhost:5000/api/movies/");
    const body = await response.json();
    console.log(body);
    return body;
  };

  callOrdered = async () => {
    var ID = window.localStorage.getItem("AccountID");
    console.log("ac:" + ID);
    const response = await fetch("http://localhost:5000/api/ordered", {
      method: "post", // 방식은 post
      headers: {
        "Content-Type": "application/json; charset=utf-8", // 헤더에서 본문 타입 설정
      },
      body: JSON.stringify({ AccountID: ID }), // body에 json 데이터를 전송할 때에는 문자열로 변경해서 보내야한다.
    });
    const body = await response.json();
    console.log(body);
    return body;
  };

  callQueue = async () => {
    var ID = window.localStorage.getItem("AccountID");
    console.log("ac:" + ID);
    const response = await fetch("http://localhost:5000/api/queue", {
      method: "post", // 방식은 post
      headers: {
        "Content-Type": "application/json; charset=utf-8", // 헤더에서 본문 타입 설정
      },
      body: JSON.stringify({ AccountID: ID }), // body에 json 데이터를 전송할 때에는 문자열로 변경해서 보내야한다.
    });
    const body = await response.json();
    console.log(body);
    return body;
  };

  getAccountID = async () => {
    const email = window.localStorage.getItem("Email");
    console.log(email);
    const response = await fetch("http://localhost:5000/api/AccountID", {
      method: "post", // 방식은 post
      headers: {
        "Content-Type": "application/json; charset=utf-8", // 헤더에서 본문 타입 설정
      },
      body: JSON.stringify({ Email: email }),
      // body에 json 데이터를 전송할 때에는 문자열로 변경해서 보내야한다.
    });
    const body = await response.json();
    console.log(body);
    return body[0].AccountID;
  };

  render() {
    var settings1 = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
    };
    var settings2 = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    };
    return (
      <Container>
        <h4 className="listHeader">You are watching</h4>
        <Slider {...settings2}>
          {this.state.ordered.map((c) => {
            return (
              <MovieCard
                Name={c.Name}
                url={c.img}
                rating={c.rating}
                id={c.MovieID}
                btn={false}
              />
            );
          })}
        </Slider>
        <h4 className="listHeader">You are liked</h4>
        <Slider {...settings2}>
          {this.state.que.map((c) => {
            return (
              <MovieCard
                Name={c.Name}
                url={c.img}
                rating={c.rating}
                id={c.MovieID}
                btn={false}
              />
            );
          })}
        </Slider>
        <h4 className="listHeader">Movies</h4>
        <Slider {...settings1}>
          {this.state.movie.map((c) => {
            return (
              <MovieCard
                Name={c.Name}
                url={c.img}
                rating={c.rating}
                id={c.MovieID}
                btn={true}
              />
            );
          })}
        </Slider>
      </Container>
    );
  }
}

export default MovieList;
