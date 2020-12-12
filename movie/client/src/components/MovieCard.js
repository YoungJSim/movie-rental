import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class MovieCard extends Component {
  render() {
    return (
      <MovieInfo
        rating={this.props.rating}
        url={this.props.url}
        name={this.props.Name}
        id={this.props.id}
        btn={this.props.btn}
      />
    ); // return
  } //render
} //Componet

class MovieInfo extends Component {
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
  addQ = () => {
    this.handleQueue({
      MovieID: this.props.id,
      AccountID: window.localStorage.getItem("AccountID"),
    });
  };
  render() {
    return (
      <div>
        <img src={this.props.url} className="poster" />
        <p className="posterName">
          {this.props.name}({this.props.rating})
        </p>
        {this.props.btn == true ? (
          <Button onClick={this.addQ} variant="danger">
            ♥
          </Button>
        ) : (
          ""
        )}
      </div>
    );
  } //render
} //Componet

export default MovieCard;
