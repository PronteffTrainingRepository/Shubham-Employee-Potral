import React, { Component, lazy, Suspense } from "react";
import plogo from "../../assets/img/brand/plogo.png";
import pic from "../../assets/img/brand/pic.jpg";
import { BsPencilSquare } from "react-icons/bs";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Row,
  Table,
  CardText,
  CardSubtitle,
  CardImg,
  ButtonGroup,
} from "reactstrap";
import "./Profile.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.onImageChange = this.onImageChange.bind(this);
    this.state = {
      img: plogo,
    };
  }
  handleClick(event) {
    document.getElementById("myimg").click();
  }
  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let im = event.target.files[0];
      this.setState({
        img: URL.createObjectURL(im),
      });
    }
  };

  render() {
    return (
      <div>
        <div className="c1"></div>
        <Card className="p1" style={{ position: "absolute" }}>
          <Row
            style={{
              justifyContent: "space-around",
              alignItems: "center",
              display: "flex",
              marginTop: "15px",
            }}
          >
            <Col style={{ textAlign: "center" }}>
              <p>
                <b>10</b>
              </p>
              <p style={{ fontSize: "13px" }}>Total Projects</p>
            </Col>
            <Col style={{ textAlign: "center" }}>
              <p>
                <b>10</b>
              </p>
              <p style={{ fontSize: "13px" }}>Completed Projects</p>
            </Col>

            <Col style={{ textAlign: "center" }}>
              <p>
                <b>10</b>
              </p>
              <p style={{ fontSize: "13px" }}>Current Projects</p>
            </Col>

            <Col>
              <div>
                <img
                  className="i1"
                  name="img"
                  value={this.state.img}
                  src={this.state.img}
                  style={{
                    borderRadius: "50%",
                    width: "120px",
                    height: "120px",
                    position: "fixed",
                    marginTop: "-90px",
                    backgroundColor: "#BED6D6",
                    position: "absolute",
                  }}
                  onClick={this.handleClick}
                />
                <input
                  type="file"
                  name="myImage"
                  id="myimg"
                  onChange={this.onImageChange}
                  hidden
                />
              </div>
            </Col>
            <Col xs="5">
              <Button
                color="secondary"
                style={{
                  float: "right",
                  marginRight: "20px",
                  color: "white",
                  backgroundColor: "black",
                  borderStyle: "none",
                }}
              >
                <BsPencilSquare /> edit Profile
              </Button>
            </Col>
          </Row>
          <CardBody>
            <CardText style={{ textAlign: "center" }}>
              <h1>
                {" "}
                <i>Shubham Sharma</i>,24
              </h1>
            </CardText>
            <CardSubtitle
              style={{
                textAlign: "center",
                marginTop: "20px",
                marginBottom: "10px",
                fontSize: "13px",
              }}
            >
              Software Trainee
            </CardSubtitle>
            <CardSubtitle
              style={{
                textAlign: "center",
                marginTop: "10px",
                marginBottom: "20px",
              }}
            >
              Pronteff IT Solutions.
            </CardSubtitle>
            <CardText
              style={{
                textAlign: "center",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <i>
                <b>Madhapur , Hyderabad</b>
              </i>
            </CardText>
          </CardBody>
        </Card>
        <div
          style={{
            paddingTop: "120px",
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Card style={{ width: "30%", marginRight: "15px" }}>
            <CardBody>
              <h2>Tech Stack</h2>
              <h4>Experience in</h4>
            </CardBody>
            <CardBody
              
            >
              <Row>
                <Col xs="2">
                  <Button style={{ width: "50px", fontSize: "10px" }}>
                    Linux
                  </Button>
                </Col>
                <Col xs="4">
                  <Button
                    style={{
                      width: "70px",
                      fontSize: "10px",
                     
                    }}
                  >
                    Windows
                  </Button>
                </Col>
                <Col xs="2">
                  <Button style={{ width: "50px", fontSize: "10px" }}>
                    IOS
                  </Button>
                </Col>
                <Col xs="4">
                  <Button style={{ width: "70px", fontSize: "10px" }}>
                    Andriod
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
          <Card
            style={{
              width: "70%",
              paddingLeft: "15px",
              backgroundColor: "#EFEEF3    ",
            }}
          >
            <CardBody style={{ paddingTop: "20px" }}>
              <h4 style={{ color: "#6E4EE4" }}>General Informations</h4>
              <ul>
                <li>
                  <h2>Work Experience</h2>
                </li>
              </ul>
            </CardBody>
            <CardBody>
              <Row>
                <Col xs="4">
                  <Button
                    style={{
                      height: "70px",
                      width: "100%",
                      color: "white",
                      backgroundColor: "#6E4EE4",
                    }}
                  >
                    4 Jobs Occupied
                  </Button>
                </Col>
                <Col xs="4">
                  <Button
                    style={{
                      height: "70px",
                      width: "100%",
                      color: "white",
                      backgroundColor: "#6E4EE4",
                    }}
                  >
                    3 years<br></br>Experience
                  </Button>
                </Col>
                <Col xs="4">
                  <Button
                    style={{
                      height: "70px",
                      width: "100%",
                      color: "white",
                      backgroundColor: "#6E4EE4",
                    }}
                  >
                    32 Worked Months
                  </Button>
                </Col>
              </Row>
            </CardBody>
            <Card style={{ marginRight: "15px" }}>
              <CardBody>
                <CardTitle>
                  <h2>VMWare Infrastructure Manager</h2>
                </CardTitle>
                <h3 style={{ color: "#6E4EE4" }}>KNET</h3>
                <CardSubtitle>April 2017-Present-1yrs 2mo</CardSubtitle>
                <CardText>
                  Led efforts to architect deploy and manage the underlying
                  VMWare infrastructure
                  <br></br>{" "}
                  <a href="#" style={{ textDecoration: "underline" }}>
                    More
                  </a>
                </CardText>
                <br></br>
                <hr></hr>
              </CardBody>
              <CardBody>
                <CardTitle>
                  <h2>Software Engineer Java/JEE</h2>
                </CardTitle>
                <h3 style={{ color: "#6E4EE4" }}>PAYCOST</h3>
                <CardSubtitle>April 2017-Present-1yrs 2mo</CardSubtitle>
                <CardText>
                  Led efforts to architect deploy and manage the underlying
                  VMWare infrastructure
                  <br></br>{" "}
                  <a href="#" style={{ textDecoration: "underline" }}>
                    More
                  </a>
                </CardText>
                <br></br>
                <hr></hr>
              </CardBody>
              <CardBody>
                <CardTitle>
                  <h2>VMWare Infrastructure Manager</h2>
                </CardTitle>
                <h3 style={{ color: "#6E4EE4" }}>KNET</h3>
                <CardSubtitle>April 2017-Present-1yrs 2mo</CardSubtitle>
                <CardText>
                  Led efforts to architect deploy and manage the underlying
                  VMWare infrastructure
                  <br></br>{" "}
                  <a href="#" style={{ textDecoration: "underline" }}>
                    More
                  </a>
                </CardText>
              </CardBody>
            </Card>
          </Card>
        </div>
      </div>
    );
  }
}

export default Dashboard;
