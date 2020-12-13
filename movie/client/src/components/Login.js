import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      Email: "",
    };
  }
  handleAccount = (mem_info) => {
    console.log(mem_info);
    fetch("http://localhost:5000/api/login", {
      // fetch를 통해 Ajax통신을 한다.
      method: "post", // 방식은 post
      headers: {
        "Content-Type": "application/json; charset=utf-8", // 헤더에서 본문 타입 설정
      },
      body: JSON.stringify(mem_info), // body에 json 데이터를 전송할 때에는 문자열로 변경해서 보내야한다.
    })
      .then(function (res) {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (!data[0]) {
          alert("아이디/비밀번호가 다릅니다.");
        } else if (data[0].CustomerID) {
          this.setState({ id: mem_info });
          this.doSignUp();
        }
      });
  };

  doSignUp = () => {
    const { Email } = this.state;
    window.localStorage.setItem("Email", Email);
    this.props.onLogin();
    this.props.history.push("/");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ Email: e.target.email.value });
    this.handleAccount({
      Password: e.target.password.value,
      Email: e.target.email.value,
    });
  };
  render() {
    return (
      <div class="container">
        <div class="d-flex justify-content-center h-100">
          <div class="card">
            <div class="card-header">
              <h3>LOGIN</h3>
            </div>
            <div class="card-body">
              <form onSubmit={this.handleSubmit}>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email-address"
                    name="email"
                  />
                </div>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    class="form-control"
                    name="password"
                    placeholder="password"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="submit"
                    value="Login"
                    class="btn float-right login_btn"
                  />
                </div>
              </form>
            </div>
            <div class="card-footer">
              <div class="d-flex justify-content-center links">
                <Link to="/signup"> Sign up</Link>
              </div>
              <div class="d-flex justify-content-center">
                <Link to="/password"> Forgot password?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
