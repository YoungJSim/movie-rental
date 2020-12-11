import React, { Component } from "react";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleAccount = (mem_info) => {
    console.log(mem_info);
    fetch("http://localhost:5000/api/signup", {
      // fetch를 통해 Ajax통신을 한다.
      method: "post", // 방식은 post
      headers: {
        "Content-Type": "application/json; charset=utf-8", // 헤더에서 본문 타입 설정
      },
      body: JSON.stringify(mem_info), // body에 json 데이터를 전송할 때에는 문자열로 변경해서 보내야한다.
    }).then(this.doSignUp());
  };

  doSignUp = () => {
    const { id } = this.state;
    window.localStorage.setItem("id", id);
    this.props.onLogin();
    this.props.history.push("/");
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.handleAccount({
      Password: e.target.password.value,
      Email: e.target.email.value,
      FirstName: e.target.FirstName.value,
      LastName: e.target.LastName.value,
      LocCity: e.target.LocCity.value,
      LocState: e.target.LastName.value,
      Address: e.target.Address.value,
      Zipcode: e.target.Zipcode.value,
      PhoneNumber: e.target.Telephone.value,
      CreditCard: e.target.CreditCard.value,
    });
  };
  render() {
    return (
      <div class="container">
        <div class="d-flex justify-content-center h-100">
          <div class="card" style={{ height: "530px" }}>
            <div class="card-header">
              <h3>SIGN-UP</h3>
            </div>
            <div class="card-body">
              <form onSubmit={this.handleSubmit}>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-envelope"></i>
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
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-user-alt"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    name="FirstName"
                    placeholder="FirstName"
                  />
                  <input
                    type="text"
                    class="form-control"
                    name="LastName"
                    placeholder="LastName"
                  />
                </div>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-map-marker-alt"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    name="LocCity"
                    placeholder="City"
                  />
                  <input
                    type="text"
                    class="form-control"
                    name="LocState"
                    placeholder="State"
                  />
                </div>
                <div class="input-group form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="Address"
                    placeholder="Address"
                  />
                  <input
                    type="text"
                    class="form-control"
                    name="Zipcode"
                    placeholder="Zipcode"
                  />
                </div>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fas fa-phone-alt"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    name="Telephone"
                    placeholder="phone number"
                  />
                </div>
                <div class="input-group form-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="far fa-credit-card"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    name="CreditCard"
                    placeholder="Credit Card"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="submit"
                    value="SingUp"
                    class="btn float-right login_btn"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
