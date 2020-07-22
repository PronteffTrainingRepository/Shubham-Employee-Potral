<div class="row" style={{ float: "left" }}>
  <div class="col-sm-7">
    <Card>
      <CardTitle style={{ padding: "10px" }}>
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
      </CardTitle>
      <hr />
      <NavItem>
        <CardLink href="#">Jan 2018</CardLink>
        <CardLink href="#">Oct 2019</CardLink>
        <CardLink href="#">Nov 2019</CardLink>
        <CardLink href="#">Dec 2019</CardLink>
      </NavItem>
      <hr />

      <Chart
        chartType="PieChart"
        width="350px"
        height="350px"
        data={data}
        options={options}
      />

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
  </div>

  <div class="col-sm-5" style={{ marginLeft: "20px" }}>
    <Card
      style={{
        width: "400px",

        height: "565px",
      }}
    >
      <CardHeader>Reimbursement Summary</CardHeader>
      <CardBody style={{ backgroundColor: "#F6F7FA" }}>
        <CardSubtitle>Unclaimed Amount</CardSubtitle>
        <h1>
          <FaRupeeSign />
          12,500.00
        </h1>
        <CardSubtitle>You Have an Unpaid Amount of 5,000.00</CardSubtitle>
      </CardBody>
      <CardBody>
        <CardSubtitle style={{ paddingBottom: "40px", fontSize: "18px" }}>
          Claims for january 2019
        </CardSubtitle>
        <CardSubtitle>
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
        </CardSubtitle>
      </CardBody>
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
  </div>
</div>;
