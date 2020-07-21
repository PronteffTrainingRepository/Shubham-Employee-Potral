import React, { Component, lazy, Suspense } from "react";
import plogo from "../../assets/img/brand/plogo.png";
import pic from "../../assets/img/brand/pic.jpg";
import { BsPencilSquare } from "react-icons/bs";
import { TiLocationArrow } from "react-icons/ti";
import { GrAnnounce } from "react-icons/gr";
import Chart from "react-google-charts";
import DoChart from "./DoChart";
import { FaRupeeSign } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
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
  Nav,
  NavItem,
  NavLink,
  Table,
  CardText,
  CardSubtitle,
  CardImg,
  ButtonGroup,
} from "reactstrap";
import "./PaySlips.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.onImageChange = this.onImageChange.bind(this);
    this.state = {
      img: plogo,
      show: false,
    };
    this.Content = this.Content.bind(this);
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
  Content = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };
  render() {
    return (
      // main div starts

      <>
        <div style={{ marginLeft: "90px" }}>
          {/* heading div starts */}
          <div className="div1"></div>
          <div className="div2">
            <h1 style={{ padding: "3px" }}>Welcome Shubham Sharma</h1>
            <h6 style={{ opacity: "0.8" }}>
              Software Trainee at Pronteff IT Solutions
            </h6>
          </div>
          {/* heading div ends */}
        </div>

        {/* highlighted Div starts */}
        <div className="div3" style={{ marginBottom: "40px" }}>
          <div
            style={{ float: "left", paddingTop: "20px", marginRight: "15px" }}
          >
            <GrAnnounce style={{ fontSize: "40px" }} />
          </div>
          {/* text Starts */}
          <div style={{ float: "left" }}>
            <h4 style={{ paddingTop: "15px" }}>
              Declare Your IT Saving Investments for this financial year.
            </h4>
            <span style={{ fontSize: "15px" }}>
              IT declarations helps you reduce your taxable income,thereby
              decreasing your income tax.
              <span style={{ color: "blue" }}>
                View and Submit IT declarations
              </span>
              <br></br>
              <span style={{ color: "blue" }}>View More.</span>
            </span>
          </div>
          {/* text ends */}
        </div>
        {/* Highlighted Div Ends */}
        <div style={{ float: "left" }}>
          <div className="lowdiv">
            <Card>
              <CardBody>
                <FaRupeeSign
                  style={{
                    float: "left",
                    fontSize: "25px",
                    color: "blue",
                    borderStyle: "solid",
                    borderWidth: "2px",
                    borderColor: "black",
                    borderRadius: "2px",
                    width: "35px",
                  }}
                />
                <h4>Payslips</h4>
              </CardBody>
              <ul >
                <li >
                  <a href="#">january 2019</a>
                </li>
                <li>
                  <a href="#">December 2018</a>
                </li>
                <li>
                  <a href="#">November 2018</a>
                </li>
                <li>
                  <a href="#">December 2018</a>
                </li>
              </ul>
              <div style={{ display: "flex" }}>
                <DoChart />
                <div>
                  <div
                    className="chart"
                    style={{ borderColor: "white white white #47D9A0" }}
                  >
                    <p>Take Homes</p>
                    <h3>87,656.00</h3>
                  </div>
                  <div
                    className="chart"
                    style={{ borderColor: "white white white #FF6979" }}
                  >
                    <p>Tax Deductions</p>
                    <h3>
                      <FaRupeeSign />
                      8085.00
                    </h3>
                  </div>
                  <div
                    className="chart"
                    style={{ borderColor: "white white white #4d4e54" }}
                  >
                    <p>Gross Pay</p>
                    <h3>
                      <FaRupeeSign />
                      95,765.00
                    </h3>
                  </div>
                </div>
              </div>
              <CardFooter>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "14px",
                    color: "blue",
                  }}
                >
                  View PaySlips
                  <AiOutlineArrowRight />
                </p>
              </CardFooter>
            </Card>
            <Card></Card>
          </div>
        </div>
      </>
      // main div ends
    );
  }
}
export default Dashboard;
