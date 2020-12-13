import React, { Component } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

class MovieCard extends Component {
  render() {
    return (
      <MovieInfo
        rating={this.props.rating}
        url={this.props.url}
        name={this.props.Name}
        id={this.props.id}
        btn={this.props.btn}
        btn1={this.props.btn1}
      />
    ); // return
  } //render
} //Componet

class MovieInfo extends Component {
  state = {
    rate: "",
  };
  handleQueue = (info) => {
    console.log(info);
    fetch("http://localhost:5000/api/enque", {
      // fetch를 통해 Ajax통신을 한다.
      method: "post", // 방식은 post
      headers: {
        "Content-Type": "application/json; charset=utf-8", // 헤더에서 본문 타입 설정
      },
      body: JSON.stringify(info), // body에 json 데이터를 전송할 때에는 문자열로 변경해서 보내야한다.
    });
  };
  doRate = (keyword) => {
    console.log(keyword);
    fetch("http://localhost:5000/api/rating", {
      // fetch를 통해 Ajax통신을 한다.
      method: "post", // 방식은 post
      headers: {
        "Content-Type": "application/json; charset=utf-8", // 헤더에서 본문 타입 설정
      },
      body: JSON.stringify(keyword), // body에 json 데이터를 전송할 때에는 문자열로 변경해서 보내야한다.
    });
  };
  addQ = () => {
    this.handleQueue({
      MovieID: this.props.id,
      AccountID: window.localStorage.getItem("AccountID"),
    });
  };
  rate = () => {
    console.log(this.props.id);
    this.doRate({
      MovieID: this.props.id,
      rating: this.state.rate,
    });
  };
  render() {
    return (
      <div>
        <img src={this.props.url} className="poster" />
        <p className="posterName">
          {this.props.name}({this.props.rating})
        </p>
        <Form.Group>
          <Row>
            <Col xs={6}>
              {this.props.btn1 == true ? (
                <Form.Control
                  type="text"
                  placeholder="0~5"
                  onChange={(e) => this.setState({ rate: e.target.value })}
                />
              ) : (
                ""
              )}
            </Col>
            <Col xs={2}>
              {this.props.btn1 == true ? (
                <Button onClick={this.rate} variant="warning">
                  Rate
                </Button>
              ) : (
                ""
              )}
              {this.props.btn == true ? (
                <Button onClick={this.addQ} variant="danger">
                  ♥
                </Button>
              ) : (
                ""
              )}
            </Col>
          </Row>
        </Form.Group>
      </div>
    );
  } //render
} //Componet

export default MovieCard;
