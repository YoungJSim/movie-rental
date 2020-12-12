import React, { Component } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MovieCard from "./MovieCard";

class Search extends Component {
  state = {
    keyword: "",
    Type: "",
    Movies: [],
  };
  doSearch = (keyword) => {
    console.log(keyword);
    fetch("http://localhost:5000/api/search" + keyword.Type, {
      // fetch를 통해 Ajax통신을 한다.
      method: "post", // 방식은 post
      headers: {
        "Content-Type": "application/json; charset=utf-8", // 헤더에서 본문 타입 설정
      },
      body: JSON.stringify(keyword), // body에 json 데이터를 전송할 때에는 문자열로 변경해서 보내야한다.
    })
      .then(function (res) {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ Movies: data });
      });
  };
  handleSearch = (e) => {
    e.preventDefault();
    this.doSearch({
      Keyword: this.state.keyword,
      Type: this.state.Type,
    });
  };
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
    };
    return (
      <Container>
        <Form.Group>
          <Row>
            <Col xs={2}>
              <Form.Control
                size="sm"
                as="select"
                onChange={(e) => this.setState({ Type: e.target.value })}
              >
                <option value="0">Search by..</option>
                <option value="Type">Genre</option>
                <option value="Name">Movie title</option>
                <option value="Actor">Actor</option>
                <option value="Rating">Sort with rating</option>
                <option value="Hot">Sort with hot movies</option>
              </Form.Control>
            </Col>
            <Col xs={4}>
              <Form.Control
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                onChange={(e) => this.setState({ keyword: e.target.value })}
              />
            </Col>
            <Col xs={1}>
              <Button onClick={this.handleSearch} variant="outline-success">
                Search
              </Button>
            </Col>
          </Row>
        </Form.Group>

        <Slider {...settings}>
          {this.state.Movies.map((c) => {
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

export default Search;
