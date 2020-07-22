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
  CardLink,
  Card,
  CardBody,
  CardFooter,
  ChartDoughnut,
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

const data = [
  ["Task", "Hours per Day"],
  ["Take Home", 87645],
  ["Taxes and deductions", 8085],
  ['Gross Pay',95730]
 
];
const options = {
  title: "",
  pieHole: 0.4,
  is3D: false,
};

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

      <div>
        <div class="container-fluid">
          <div>
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

          <div class="row" style={{ float: "left" }}>
            <div class="col-sm-7">
              <div class="card text-center">
                <div class="card-header">
                  {" "}
                  <FaRupeeSign
                    style={{
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
                </div>
                <div class="navbar">
                  <a class="active" href="#" className="a1">
                    Jan 2020
                  </a>
                  <a href="#" className="a1">
                    Feb 2020
                  </a>
                  <a href="#" className="a1">
                    Mar 2020
                  </a>
                  <a href="#" className="a1">
                    April 2020
                  </a>
                </div>
                <hr />
                <div class="card-body">
                  <Chart
                    chartType="PieChart"
                    width="300px"
                    height="200px"
                    data={data}
                    options={options}
                  />
                </div>
                <div class="card-footer text-muted">
                  {" "}
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "16px",
                      color: "blue",
                    }}
                  >
                    View PaySlips
                    <AiOutlineArrowRight />
                  </p>
                </div>
              </div>
            </div>

            <div class="col-sm-5">
              <div class="card text-center" style={{ Width: "auto" }}>
                <div class="card-header">
                  <h2>Reimbursement Summary</h2>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Unclaimed Amount</h5>
                  <p class="card-text">
                    <h1>
                      <FaRupeeSign />
                      12,500.00
                    </h1>
                  </p>
                </div>
                <p style={{ paddingBottom: "40px", fontSize: "18px" }}>
                  {" "}
                  Claims for january 2019
                </p>
                <div
                  className="chart"
                  style={{
                    borderColor: "white white white #47D9A0",
                    float: "left",
                  }}
                >
                  <p style={{ fontSize: "18px" }}>Submitted</p>
                  <h3>
                    <FaRupeeSign />
                    87,656.00
                  </h3>
                </div>
                <div
                  className="chart"
                  style={{
                    borderColor: "white white white #FF6979",
                    float: "left",
                  }}
                >
                  <p style={{ fontSize: "18px" }}>Approved</p>
                  <h3>
                    <FaRupeeSign />
                    80875.00
                  </h3>
                </div>
                <div class="card-footer text-muted">
                  {" "}
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ width: "100%", float: "left", backgroundColor: "#EAF7FF" }}
        >
          <Row style={{ padding: "10px" }}>
            <Col>
              <Card className="text-center">
                <CardHeader
                  style={{
                    backgroundColor: "#00B6FE",
                    fontSize: "25px",
                    color: "white",
                  }}
                >
                  Pay Slips
                </CardHeader>
                <CardBody>
                  <CardSubtitle>
                    <Row>
                      <Col style={{ fontSize: "20px" }}>Gross Pay</Col>
                      <Col style={{ fontSize: "20px" }}>5,000</Col>
                    </Row>
                    <Row>
                      <Col style={{ fontSize: "20px" }}>Deductions</Col>
                      <Col style={{ fontSize: "20px" }}>3,000</Col>
                    </Row>
                    <Row>
                      <Col style={{ fontSize: "20px" }}>Net Pay</Col>
                      <Col style={{ fontSize: "20px" }}>15,000</Col>
                    </Row>
                  </CardSubtitle>
                </CardBody>
                <Button color="success" size="lg" block>
                  View Pay Slips
                </Button>
              </Card>
            </Col>
            <Col>
              <Card className="text-center">
                <CardHeader
                  style={{
                    backgroundColor: "#00B6FE",
                    fontSize: "25px",
                    color: "white",
                  }}
                >
                  Annual Earning
                </CardHeader>
                <CardBody>
                  <CardSubtitle>
                    <Row>
                      <Col style={{ fontSize: "20px" }}>Gross Pay</Col>
                      <Col style={{ fontSize: "20px" }}>5,000</Col>
                    </Row>
                    <Row>
                      <Col style={{ fontSize: "20px" }}>Deductions</Col>
                      <Col style={{ fontSize: "20px" }}>3,000</Col>
                    </Row>
                    <Row>
                      <Col style={{ fontSize: "20px" }}>Net Pay</Col>
                      <Col style={{ fontSize: "20px" }}>15,000</Col>
                    </Row>
                  </CardSubtitle>
                </CardBody>
                <Button color="success" size="lg" block>
                  View YTD Statement
                </Button>
              </Card>
            </Col>
            <Col>
              <Card className="text-center">
                <CardHeader
                  style={{
                    backgroundColor: "#00B6FE",
                    fontSize: "25px",
                    color: "white",
                  }}
                >
                  Loan Balance
                </CardHeader>
                <CardBody>
                  <CardSubtitle>
                    <Row>
                      <Col style={{ fontSize: "18px" }}>Loan Amount</Col>
                      <Col style={{ fontSize: "18px" }}>5,000</Col>
                    </Row>
                    <Row>
                      <Col style={{ fontSize: "18px" }}>Installments</Col>
                      <Col style={{ fontSize: "18px" }}>3,000</Col>
                    </Row>
                    <Row>
                      <Col style={{ fontSize: "18px" }}>Principal Paid</Col>
                      <Col style={{ fontSize: "18px" }}>15,000</Col>
                    </Row>
                    <Row>
                      <Col style={{ fontSize: "18px" }}>Interest Paid</Col>
                      <Col style={{ fontSize: "18px" }}>15,000</Col>
                    </Row>
                    <Row>
                      <Col style={{ fontSize: "18px" }}>Principal balance</Col>
                      <Col style={{ fontSize: "18px" }}>15,000</Col>
                    </Row>
                  </CardSubtitle>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row style={{ padding: "10px" }}>
            <Col>
              <Card className="text-center">
                <CardHeader
                  style={{
                    backgroundColor: "#00B6FE",
                    fontSize: "25px",
                    color: "white",
                  }}
                >
                  Income Tax
                </CardHeader>
                <CardBody>
                  <CardSubtitle>
                    <Row>
                      <Col style={{ fontSize: "20px" }}>Gross Pay</Col>
                      <Col style={{ fontSize: "20px" }}>5,000</Col>
                    </Row>
                    <Row>
                      <Col style={{ fontSize: "20px" }}>Deductions</Col>
                      <Col style={{ fontSize: "20px" }}>3,000</Col>
                    </Row>
                    <Row>
                      <Col style={{ fontSize: "20px" }}>Net Pay</Col>
                      <Col style={{ fontSize: "20px" }}>15,000</Col>
                    </Row>
                  </CardSubtitle>
                </CardBody>
                <Button color="success" size="lg" block>
                  View IT Details
                </Button>
              </Card>
            </Col>
            <Col>
              <Card className="text-center">
                <CardHeader
                  style={{
                    backgroundColor: "#00B6FE",
                    fontSize: "25px",
                    color: "white",
                  }}
                >
                  Annual PF Saving
                </CardHeader>
                <CardBody>
                  <CardSubtitle>
                    <Row>
                      <Col style={{ fontSize: "20px" }}>Gross Pay</Col>
                      <Col style={{ fontSize: "20px" }}>5,000</Col>
                    </Row>
                    <Row>
                      <Col style={{ fontSize: "20px" }}>Deductions</Col>
                      <Col style={{ fontSize: "20px" }}>3,000</Col>
                    </Row>
                    <Row>
                      <Col style={{ fontSize: "20px" }}>Net Pay</Col>
                      <Col style={{ fontSize: "20px" }}>15,000</Col>
                    </Row>
                  </CardSubtitle>
                </CardBody>
                <Button color="success" size="lg" block>
                  View PF Statement
                </Button>
              </Card>
            </Col>
            <Col></Col>
          </Row>
        </div>
      </div>
      // main div ends
    );
  }
}
export default Dashboard;
