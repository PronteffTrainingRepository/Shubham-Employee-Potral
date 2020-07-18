import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
  CardImg,
} from "reactstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empid: "",
      empidError: "",
      password: "",
      passwordError: "",
    };
    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    if (event.target.name === "empid") {
      this.setState({ empidError: "" });
    }
    if (event.target.name === "password") {
      this.setState({ passwordError: "" });
    }
  }

  validate = () => {
    let empidError = "";
    let passwordError = "";

    if (!this.state.empid) {
      empidError = "Empid  is required!";
    }

    if (!this.state.password) {
      passwordError = "Password is required!";
    }

    if (empidError || passwordError) {
      this.setState({ empidError, passwordError });
      let err = empidError;
      let err1 = passwordError;

      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    const isValid = this.validate();
    if (isValid) {
      this.props.history.push("/dashboard");
    }
    event.preventDefault();
  };

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card
                  className="text-white bg-primary py-5 d-md-down-none"
                  style={{ width: "44%" }}
                >
                  <CardBody className="text-center">
                    <div>
                      <h2>My Employee Portal</h2>
                      <img
                        width="50%"
                        src={require("./plogo.png")}
                        alt="Card image cap"
                      />

                      {/*Employee Login Form  */}
                    </div>
                  </CardBody>
                </Card>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.handleSubmit}>
                      <h1>Employee Login</h1>

                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          placeholder="Employee ID"
                          autoComplete="username"
                          name="empid"
                          id="InputID"
                          value={this.state.empid}
                          onChange={this.handleChange}
                        />
                      </InputGroup>
                      <span style={{ fontSize: 12, color: "red" }}>
                        <b>{this.state.empidError}</b>
                      </span>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          name="password"
                          id="PasswordId"
                          value={this.state.password}
                          onChange={this.handleChange}
                        />
                      </InputGroup>
                      <span style={{ fontSize: 12, color: "red" }}>
                        <b>{this.state.passwordError}</b>
                      </span>

                      <Row>
                        <Col xs="6">
                          <Button
                            color="primary"
                            className="px-4"
                            type="submit"
                          >
                            Login
                          </Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">
                            Forgot password?
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
