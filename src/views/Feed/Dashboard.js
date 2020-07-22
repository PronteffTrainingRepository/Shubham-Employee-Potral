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
import "./Feed.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
   
    };
  }


  render() {
    return (
      <div>
        <div className="img">
          <h1  style={{ color: "purple", marginTop: "100px",marginLeft:"20px",fontSize:"90px" }}>Welcome!</h1>
        </div>
        <div class="row" style={{ paddingTop: "40px" }}>
          <div class="col-sm-9" style={{ paddingTop: "20px" }}>
            <h1 style={{ color: "#515a94", marginBottom: "20px",fontSize:"40px" }}>
              Welcome to Pronteff IT Solutions!!!
            </h1>
            <p style={{ font: "16px" }}>
              <b>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32. The standard chunk of Lorem Ipsum used since
                the 1500s is reproduced below for those interested. Sections
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H.
                Rackham. Contrary to popular belief, Lorem Ipsum is not simply
                random text. It has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000 years old. Richard
                McClintock, a Latin professor at Hampden-Sydney College in
                Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through the
                cites of the word in classical literature, discovered the
                undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
                1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
                and Evil) by Cicero, written in 45 BC. This book is a treatise
                on the theory of ethics, very popular during the Renaissance.
                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                comes from a line in section 1.10.32. The standard chunk of
                Lorem Ipsum used since the 1500s is reproduced below for those
                int
              </b>
            </p>
          </div>
          <div class="col-sm-3 rside" style={{height:"370px"}}>
            <h4 style={{ color: "#4c4157", marginBottom: "20px",marginTop:"30px",fontSize:"22px" }}>
              Pronteff IT Solutions!
            </h4>
            <p style={{ font: "16px" }}>
              <b>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
                <span style={{ color: "#2a306e" }}>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s,
                </span>
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
              </b>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
