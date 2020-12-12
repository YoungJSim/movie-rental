import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Col, Button } from "react-bootstrap";

class Setting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      Email: "",
    };
  }

  render() {
    return (
      <div class="container">
        <div class="d-flex justify-content-center h-100">
          <div class="card">
            <div class="card-header">
              <h3>Account Setting</h3>
            </div>
            <div class="card-body">
              <Form>
                <Form.Row className="align-items-center">
                  <Col xs="auto" className="my-1">
                    <Form.Label
                      className="mr-sm-2"
                      htmlFor="inlineFormCustomSelect"
                      srOnly
                    >
                      Preference
                    </Form.Label>
                    <Form.Control
                      as="select"
                      className="mr-sm-2"
                      id="inlineFormCustomSelect"
                      custom
                    >
                      <option value="1">Limited</option>
                      <option value="2">Unlimited</option>
                    </Form.Control>
                  </Col>
                  <Col xs="auto" className="my-1">
                    <Button type="submit">Apply</Button>
                  </Col>
                </Form.Row>
                <p>
                  1.limited plan allows one to view up to 2 movie at-a-time and
                  at most 2 movies per month. 5,000 KRW/month
                </p>
                <p>
                  2.unlimited plan allow one to view up to 2 movies at-a-time
                  and place no limit on how many movies you can view per month.
                  20,000 KRW/month
                </p>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Setting;
