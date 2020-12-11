import React, { Component } from "react";
import DaumPostCode from "react-daum-postcode";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      zoneCode: "",
      fullAddress: "",
      isDaumPost: false,
      isRegister: false,
      register: [],
    };
  }

  handleOpenPost = () => {
    this.setState({
      isDaumPost: true,
    });
  };

  // postcode
  handleAddress = (data) => {
    let AllAddress = data.address;
    let extraAddress = "";
    let zoneCodes = data.zonecode;

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      AllAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    this.setState({
      fullAddress: AllAddress,
      zoneCode: zoneCodes,
    });
  };

  render() {
    const { address, isDaumPost, fullAddress, zoneCode } = this.state;
    // DaumPostCode style
    const width = 595;
    const height = 450;
    const modalStyle = {
      position: "relative",
      top: 0,
      zIndex: "100",
      border: "1px solid #000000",
      overflow: "hidden",
    };
    return (
      <div className="modalRow">
        <div className="modalCell cellTit">
          <div></div>
        </div>
        <div className="modalCell">
          <div className="cellFirst">
            <button type="button" onClick={this.handleOpenPost}>
              <span>우편번호 찾기</span>
            </button>
          </div>
          {isDaumPost ? (
            <DaumPostCode
              onComplete={this.handleAddress}
              autoClose
              width={width}
              height={height}
              style={modalStyle}
              isDaumPost={isDaumPost}
            />
          ) : null}
          <div className="zipCode">
            <input
              class="sign-up"
              type="text"
              value={zoneCode}
              name="zip"
              onChange={this.handleInput}
            />
          </div>
          <div className="addressBox">
            <input
              class="sign-up"
              type="text"
              value={fullAddress}
              name="address"
              onChange={this.handleInput}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
