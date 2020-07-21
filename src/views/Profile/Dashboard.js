import React, { Component, lazy, Suspense } from "react";
import plogo from "../../assets/img/brand/plogo.png";
import pic from "../../assets/img/brand/pic.jpg";
import { BsPencilSquare } from "react-icons/bs";
import { TiLocationArrow } from "react-icons/ti";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Collapse,
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
      showone: false,
      showtwo: false,
      showthree: false,
    };
    this.ContentOne = this.ContentOne.bind(this);
    this.ContentTwo = this.ContentTwo.bind(this);
    this.ContentThree = this.ContentThree.bind(this);
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
  ContentOne = () => {
    const { showone } = this.state;
    this.setState({ showone: !showone });
  };
  ContentTwo = () => {
    const { showtwo } = this.state;
    this.setState({ showtwo: !showtwo });
  };
  ContentThree = () => {
    const { showthree } = this.state;
    this.setState({ showthree: !showthree });
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
        {/* Upper Card Ends */}
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
          {/* Lower left Started  */}
          <Card className="l1" style={{ width: "30%", marginRight: "15px" }}>
            <div>
              <h2>Tech Stack</h2>
              <h4>Worked Projects</h4>
            </div>
            <div style={{ display: "inline", justifyContent: "space-between" }}>
              <Button style={{ color: "white" }}>IBM</Button>
              <Button style={{ color: "white" }}>Facebook</Button>
              <Button style={{ color: "white" }}>AI</Button>
              <Button style={{ color: "white" }}>Google</Button>
            </div>
            <div>
              <h6>Known Technologies</h6>
              <Button style={{ color: "white" }}>Reactjs</Button>
              <Button style={{ color: "white" }}>Nodejs</Button>
              <Button style={{ color: "white" }}>Native</Button>
              <Button style={{ color: "white" }}>JAVA</Button>
            </div>
            <div>
              <h6>Known Languages</h6>
              <Button style={{ color: "white" }}>English</Button>
              <Button style={{ color: "white" }}>Hindi</Button>
              <Button style={{ color: "white" }}>Punjabi</Button>
              <Button style={{ color: "white", fontSize: "13.1px" }}>
                Telegu
              </Button>
            </div>
            {/* <CardBody>
              <h2>Languages</h2>

              <h6>Professional Working Proficiency in</h6>
              <h5>English And French</h5>
            </CardBody> */}
          </Card>
          {/* Lower Right Card Starts */}
          <Card
            className="l2"
            style={{
              width: "70%",
              paddingLeft: "15px",
              backgroundColor: "#EFEEF3    ",
            }}
          >
            <CardBody style={{ paddingTop: "40px" }}>
              <h3 style={{ color: "#6E4EE4", opacity: "0.8" }}>
                General Informations
              </h3>
              <ul>
                <li>
                  <h1 style={{ opacity: "0.9" }}>Work Experience</h1>
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
                      fontSize: "21px",
                    }}
                  >
                    4 Projects <br></br>Occupied
                  </Button>
                </Col>
                <Col xs="4">
                  <Button
                    style={{
                      height: "70px",
                      width: "100%",
                      color: "white",
                      backgroundColor: "#6E4EE4",
                      fontSize: "21px",
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
                      fontSize: "21px",
                    }}
                  >
                    2 Projects Completed
                  </Button>
                </Col>
              </Row>
            </CardBody>
            <Card style={{ marginRight: "15px" }}>
              <CardBody>
                <CardTitle>
                  <h2 style={{ opacity: "0.9" }}>Update Safety Check</h2>
                </CardTitle>
                <h3
                  style={{
                    color: "#6E4EE4",
                    opacity: "0.8",
                  }}
                >
                  Facebook
                </h3>
                <CardSubtitle style={{ opacity: "0.6" }}>
                  April 2017-Present-1yrs 2mo{" "}
                  <span style={{ paddingLeft: "300px" }}>
                    <TiLocationArrow />
                    San francisco,USA
                  </span>
                </CardSubtitle>
                <CardText style={{ opacity: "0.6", paddingTop: "20px" }}>
                  Led efforts to architect deploy and manage the underlying
                  VMWare infrastructure
                  <br></br>{" "}
                  <p
                    onClick={this.ContentOne}
                    style={{
                      backgroundColor: "white",
                      textDecoration: "underline",
                      textAlign: "left",
                    }}
                  >
                    More
                  </p>
                  {this.state.showone && <BoxOne />}
                </CardText>
              </CardBody>
              <br></br>
              <hr></hr>
              <CardBody>
                <CardTitle>
                  <h2 style={{ opacity: "0.9" }}>Glass Enterprise Edition</h2>
                </CardTitle>
                <h3 style={{ color: "#6E4EE4", opacity: "0.8" }}>Google</h3>

                <CardSubtitle style={{ opacity: "0.6" }}>
                  April 2017-Present-1yrs 2mo{" "}
                  <span style={{ paddingLeft: "300px" }}>
                    <TiLocationArrow />
                    San francisco,USA
                  </span>
                </CardSubtitle>
                <CardText style={{ opacity: "0.6", paddingTop: "20px" }}>
                  Led efforts to architect deploy and manage the underlying
                  VMWare infrastructure
                  <br></br>{" "}
                  <p
                    onClick={this.Content}
                    style={{
                      backgroundColor: "white",
                      textDecoration: "underline",
                      textAlign: "left",
                    }}
                  >
                    More
                  </p>
                  {this.state.showtwo && <BoxTwo/>}
                </CardText>
              </CardBody>
              <br></br>
              <hr></hr>
              <CardBody>
                <CardTitle>
                  <h2 style={{ opacity: "0.9" }}>eGovernance projects</h2>
                </CardTitle>
                <h3 style={{ color: "#6E4EE4", opacity: "0.8" }}>TCS</h3>
                <CardSubtitle style={{ opacity: "0.6" }}>
                  April 2017-Present-1yrs 2mo{" "}
                  <span style={{ paddingLeft: "320px" }}>
                    <TiLocationArrow />
                    Mumbai,India
                  </span>
                </CardSubtitle>
                <CardText style={{ opacity: "0.6", paddingTop: "30px" }}>
                  Led efforts to architect deploy and manage the underlying
                  VMWare infrastructure
                  <br></br>{" "}
                  <p
                    onClick={this.Content}
                    style={{
                      backgroundColor: "white",
                      textDecoration: "underline",
                      textAlign: "left",
                    }}
                  >
                    More
                  </p>
                  {this.state.showthree && <BoxThree/>}
                </CardText>
              </CardBody>
            </Card>
          </Card>
        </div>
      </div>
    );
  }
}
class BoxOne extends Component {
  render() {
    return <p>Some text 1</p>;
  }
}
class BoxTwo extends Component {
  render() {
    return <p>Some text 2</p>;
  }
}
class BoxThree extends Component {
  render() {
    return <p>Some text 3</p>;
  }
}

export default Dashboard;
