import React, { useEffect } from "react";

import "./style.css";
import Swipers from "./Swipers";

export default function Home() {
  const handleScroll = () => {
    const offset = window.scrollY;
    let navbarId = document.getElementById("mainHeader");
    if (offset > 0) {
      navbarId.classList.add("stiky");
    } else {
      navbarId.classList.remove("stiky");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Main Menu Area Start */}
      <header id="mainHeader" className="header">
        {/* Start Navigation */}
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <div className="container">
            {/*<a class="navbar-brand" href="#welcomeArea">
					 Rillbit Option
				</a> */}
            <a className="logo-container" href="/">
              <img
                src="appassets/newimages/logo1.png"
                alt="Logo"
                className="navbar-brand"
                style={{ width: "176px", height: 50 }}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about-us">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact-us">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/register">
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* End Navigation */}
        <div className="clearfix" />
      </header>
      {/* Main Menu Area End */}
      {/* Welcome Area Start */}
      <section id="welcomeArea">
        <div className="container">
          <div className="row welcomaareaRow">
            <div className="col-md-6 d-flex align-self-center">
              <div className="left">
                <h1 className="info"> Rillbit Option</h1>
                <p style={{ textAlign: "justify" }}>
                  <font color="white">
                    We are Rillbit Option, consistently rated the best and the
                    most secure cryptocurrency platform. We put power in your
                    hand to buy, sell, and trade digital currency.
                  </font>
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            height: 62,
            backgroundColor: "#FFFFFF",
            overflow: "hidden",
            boxSizing: "border-box",
            border: "1px solid #56667F",
            borderRadius: 4,
            textAlign: "right",
            blockSize: 62,
            fontSize: 12,
            fontFeatureSettings: "normal",
            textSizeAdjust: "100%",
            boxShadow: "inset 0 -20px 0 0 #000000",
            padding: 0,
            margin: 0,
            width: "100%",
          }}
        >
          <div style={{ height: 40, padding: 0, margin: 0, width: "100%" }}>
            <iframe
              src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=light&pref_coin_id=1505&invert_hover="
              width="100%"
              height="36px"
              scrolling="auto"
              marginWidth={0}
              marginHeight={0}
              frameBorder={0}
              border={0}
              style={{ border: 0, margin: 0, padding: 0 }}
            />
          </div>
        </div>
      </section>
      {/* Welcome Area End */}
      {/* video Area Start */}
      <section id="video">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-self-center">
              <div className="left">
                <div className="heading-title">
                  <h2 style={{ textAlign: "justify" }}>
                    <span style={{ color: "#02171a" }}>
                      <span style={{}}>
                        <span
                          style={{ fontFamily: "times new roman,times,serif" }}
                        >
                          Introduction ?
                        </span>
                      </span>
                    </span>
                  </h2>
                  {/*<h2>
								We've Built
								 Rillbit Option Platform
							</h2>*/}
                </div>
                <div className="content">
                  <p style={{ textAlign: "justify" }}>
                    <span style={{ fontSize: 16 }}>
                      <span
                        style={{ fontFamily: "times new roman,times,serif" }}
                      >
                        As one of the leading Bitcoin trading company in the
                        world, Rillbit Option&nbsp; is consistently named one of
                        the best places to mine, buy and sell crypto online,
                        thanks to our excellent service, low fees, versatile
                        funding options and rigorous security standards.
                      </span>
                    </span>
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    <span style={{ fontSize: 16 }}>
                      <span
                        style={{ fontFamily: "times new roman,times,serif" }}
                      >
                        Recognizing the importance of Bitcoin from the onset,
                        and understanding that the exchange is the most critical
                        part of the cryptocurrency ecosystem, James dyson
                        founded Rillbit Option to give people the means to
                        quickly and securely invest in the space. Since then,
                        the company has grown by leaps and bounds with hundreds
                        of employees spanning the globe.
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n\t\t\t\t\t\t.containerCEO {\n\t\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\t\tfont-family: Arial;\n\n\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.text-block {\n\t\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\t\twidth: 95%;\n\t\t\t\t\t\t\tbottom: 10px;\n\t\t\t\t\t\t\tright: 0px;\n\t\t\t\t\t\t\tbackground-color: #9eae3a;\n\t\t\t\t\t\t\tcolor: white;\n\t\t\t\t\t\t\tpadding-left: 15px;\n\t\t\t\t\t\t\tpadding-right: 15px;\n\t\t\t\t\t\t\tpadding-top: 5px;\n\t\t\t\t\t\t\tpadding-bottom: 5px;\n\t\t\t\t\t\t\tborder-radius: 15px;\n\t\t\t\t\t\t}\n\t\t\t\t\t",
                }}
              />
              <div className="right">
                <div className="parallax1">
                  <div className="containerCEO">
                    <img
                      className="img-fluid"
                      alt="CEO"
                      style={{ width: "100%" }}
                      src="appassets/newimages/CEO.jpg"
                    />
                    <div className="text-block">
                      <h4>
                        <font color="white">James dyson - CEO</font>
                      </h4>
                      <p>
                        <font color="white">
                          We share the passion to code, create, and connect
                          people to the future of finance.
                        </font>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* video Area End  */}
      {/* How it Works Area Start */}
      <section id="hiw">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="heading-title">
                <p>Join the world’s most popular Trading Platform</p>
                <h2>
                  READY FOR TRADE WITH ULTIMATE PLATFORM AND UNIQUE SERVICE?
                </h2>
              </div>
            </div>
          </div>
          <p style={{ textAlign: "justify", paddingBottom: 5 }}>
            Our platform is designed and architected for all experience level of
            traders and arranged Intuitive, Comfortable, and Super
            User-friendly. Enjoy All Asset Class in one platform, Ultra-low
            Latency &amp; Fair Execution you've never met before!
          </p>
          <center>
            <img
              id="dog"
              src="appassets/newimages/banner1.png"
              alt="banner"
              align="middle"
              style={{ width: "80%", height: "auto" }}
            />
          </center>
        </div>
      </section>
      {/* How it Works Area End */}
      {/* Transaction Area Start */}
      <section id="transaction">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="heading-title2">
                <h2>{/* Rillbit Option Transaction*/} How to Get Started</h2>
                <h4>
                  <font style={{ color: "white" }}>
                    Using Bitcoin to transact is easy and accessible to everyone
                  </font>
                </h4>
              </div>
            </div>
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n\t\t\t\t.column {\n\t\t\t\t\tfloat: left;\n\t\t\t\t\twidth: 300px;\n\t\t\t\t\tpadding: 15px;\n\t\t\t\t\tmargin-right: auto;\n\t\t\t\t\tmargin-left: auto;\n\t\t\t\t\twhite-space: normal;\n\t\t\t\t}\n\n\t\t\t\t/* Clearfix (clear floats) */\n\t\t\t\t.row::after {\n\t\t\t\t\tcontent: "";\n\t\t\t\t\tclear: both;\n\t\t\t\t\tdisplay: table;\n\t\t\t\t}\n\t\t\t',
            }}
          />
          <div className="row">
            <div className="column">
              <div
                style={{
                  background: "white",
                  padding: "20px 0px",
                  borderRadius: "10px 10px 0px 0px",
                }}
              >
                <center>
                  <img
                    id="dog"
                    src="appassets/newimages/s1.png"
                    alt="Snow"
                    align="middle"
                    style={{ width: "50%", height: 150 }}
                  />
                </center>
              </div>
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.10)",
                  borderRadius: "0px 0px 10px 10px",
                  marginTop: 0,
                  paddingTop: 5,
                  paddingRight: 30,
                  paddingLeft: 30,
                  paddingBottom: 20,
                }}
              >
                <center>
                  <h3 style={{ paddingTop: 5 }}>
                    <font color="white">Choose your Wallet</font>
                  </h3>
                </center>
                <p style={{ textAlign: "justify" }}>
                  <font color="white">
                    Free Bitcoin wallets are available for all major operating
                    system and devices to serve a variety of your needs.
                    Choosing a wallet is easy and can be done within a minute.
                  </font>
                </p>
              </div>
            </div>
            <div className="column">
              <div
                style={{
                  background: "white",
                  padding: "20px 0px",
                  borderRadius: "10px 10px 0px 0px",
                }}
              >
                <center>
                  <center>
                    <img
                      id="dog"
                      src="appassets/newimages/s2.png"
                      alt="Snow"
                      style={{ width: "50%", height: 150 }}
                    />
                  </center>
                </center>
              </div>
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.10)",
                  borderRadius: "0px 0px 10px 10px",
                  marginTop: 0,
                  paddingTop: 5,
                  paddingRight: 30,
                  paddingLeft: 30,
                  paddingBottom: 20,
                }}
              >
                <center>
                  <h3 style={{ paddingTop: 5 }}>
                    <font color="white">Make Payment</font>
                  </h3>
                </center>
                <p style={{ textAlign: "justify" }}>
                  <font color="white">
                    Now that you have a wallet, you have to add some Bitcoin to
                    your balance. And have your Bitcoin cash wallet address
                    ready for use.
                  </font>
                </p>
              </div>
            </div>
            <div className="column">
              <div
                style={{
                  background: "white",
                  padding: "20px 0px",
                  borderRadius: "10px 10px 0px 0px",
                }}
              >
                <center>
                  <center>
                    <img
                      id="dog"
                      src="appassets/newimages/s3.png"
                      alt="Snow"
                      style={{ width: "50%", height: 150 }}
                    />
                  </center>
                </center>
              </div>
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.10)",
                  borderRadius: "0px 0px 10px 10px",
                  marginTop: 0,
                  paddingTop: 5,
                  paddingRight: 30,
                  paddingLeft: 30,
                  paddingBottom: 20,
                }}
              >
                <center>
                  <h3 style={{ paddingTop: 5 }}>
                    <font color="white">Trade, Buy and Sell Orders</font>
                  </h3>
                </center>
                <p style={{ textAlign: "justify" }}>
                  <font color="white">
                    Receiving Bitcoin is as easy as giving the sender your
                    public address. Sending Bitcoin requires a few more steps.
                    It is important to pay attention when sending. Overall, the
                    process for sending Bitcoin is actually quite easy
                  </font>
                </p>
              </div>
            </div>
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n\t\t\t\t.buttonGet {\n\t\t\t\t\tbackground-color: #fff;\n\t\t\t\t\tborder: none;\n\t\t\t\t\tcolor: #fbae1c;\n\t\t\t\t\tpadding: 15px 25px;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\tfont-size: 16px;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t\tborder-radius: 20px;\n\t\t\t\t}\n\n\t\t\t\t.buttonGet:hover {\n\t\t\t\t\tbackground-color: #fff;\n\t\t\t\t\tborder-radius: 10px;\n\t\t\t\t}\n\t\t\t",
            }}
          />
          <center>
            <a className="nav-link" href="/register">
              <button className="buttonGet">Register Now</button>
            </a>
          </center>
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8 ">
              <div className="tab1">
                <ul
                  className="nav nav-pills mb-3"
                  id="pills-tab"
                  role="tablist"
                ></ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div className="table-responsive"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Transaction Area End */}
      {/* Investor Area Start */}
      <section id="investorArea">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-self-center">
              <div className="left">
                <div className="heading-title">
                  <p>Backed by the Best</p>
                  <h2>Our Top Investors</h2>
                </div>
                <div className="content">
                  <p>
                    We’ve raised $70M from the leading investors in Silicon
                    Valley, Wall Street, and London.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right">
                <div className="parallax2">
                  <img
                    className="img-fluid"
                    src="appassets/newimages/sponsors1.png"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Investor Area End */}
      {/* Feature Area Start */}
      <section id="feature">
        <div className="container">
          <div className="heading-title2" style={{ paddingBottom: 30 }}>
            <center>
              <h2>
                <font style={{ color: "white" }}>Service we Provide</font>
              </h2>
              <h5>
                <font style={{ color: "white" }}>
                  {" "}
                  Rillbit Option is more than just a Bitcoin trading platform.
                  We provide a wide range of Blockchain focused Marketing, easy
                  way to buy, send, store, mine and learn about cryptocurrency.
                </font>
              </h5>
            </center>
          </div>
          <div className="row">
            <div className="column">
              <div
                style={{
                  background: "white",
                  padding: "20px 0px",
                  borderRadius: "10px 10px 0px 0px",
                }}
              >
                <center>
                  <img
                    id="dog"
                    src="appassets/newimages/a6.png"
                    alt="Snow"
                    align="middle"
                    style={{ width: "30%", height: 80 }}
                  />
                </center>
              </div>
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.10)",
                  borderRadius: "0px 0px 10px 10px",
                  marginTop: 0,
                  paddingTop: 5,
                  paddingRight: 30,
                  paddingLeft: 30,
                  paddingBottom: 20,
                }}
              >
                <center>
                  <h4 style={{ paddingTop: 5 }}>
                    <font color="white">Payment Methods</font>
                  </h4>
                </center>
                <p style={{ textAlign: "justify" }}>
                  <font color="white">
                    There are several ways to buy, sell, and trade bitcoins on
                    Rillbit Option. Each way you can buy bitcoin is called a
                    "payment method".
                  </font>
                </p>
              </div>
            </div>
            <div className="column">
              <div
                style={{
                  background: "white",
                  padding: "20px 0px",
                  borderRadius: "10px 10px 0px 0px",
                }}
              >
                <center>
                  <img
                    id="dog"
                    src="appassets/newimages/a2.png"
                    alt="Snow"
                    align="middle"
                    style={{ width: "30%", height: 80 }}
                  />
                </center>
              </div>
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.10)",
                  borderRadius: "0px 0px 10px 10px",
                  marginTop: 0,
                  paddingTop: 5,
                  paddingRight: 30,
                  paddingLeft: 30,
                  paddingBottom: 20,
                }}
              >
                <center>
                  <h4 style={{ paddingTop: 5 }}>
                    <font color="white">Support 24/7</font>
                  </h4>
                </center>
                <p style={{ textAlign: "justify" }}>
                  <font color="white">
                    Our support service is 24/7 available for you. If you have
                    any query, kindly contact us. We are happy to help you.
                  </font>
                </p>
              </div>
            </div>
            <div className="column">
              <div
                style={{
                  background: "white",
                  padding: "20px 0px",
                  borderRadius: "10px 10px 0px 0px",
                }}
              >
                <center>
                  <img
                    id="dog"
                    src="appassets/newimages/a3.png"
                    alt="Snow"
                    align="middle"
                    style={{ width: "30%", height: 80 }}
                  />
                </center>
              </div>
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.10)",
                  borderRadius: "0px 0px 10px 10px",
                  marginTop: 0,
                  paddingTop: 5,
                  paddingRight: 30,
                  paddingLeft: 30,
                  paddingBottom: 20,
                }}
              >
                <center>
                  <h4 style={{ paddingTop: 5 }}>
                    <font color="white">Live Exchange Rates</font>
                  </h4>
                </center>
                <p style={{ textAlign: "justify" }}>
                  <font color="white">
                    Get the latest Bitcoin price with our real-time price charts
                    including buy and sell volumes.
                  </font>
                </p>
              </div>
            </div>
            <div className="column">
              <div
                style={{
                  background: "white",
                  padding: "20px 0px",
                  borderRadius: "10px 10px 0px 0px",
                }}
              >
                <center>
                  <img
                    id="dog"
                    src="appassets/newimages/a4.png"
                    alt="Snow"
                    align="middle"
                    style={{ width: "30%", height: 80 }}
                  />
                </center>
              </div>
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.10)",
                  borderRadius: "0px 0px 10px 10px",
                  marginTop: 0,
                  paddingTop: 5,
                  paddingRight: 30,
                  paddingLeft: 30,
                  paddingBottom: 20,
                }}
              >
                <center>
                  <h4 style={{ paddingTop: 5 }}>
                    <font color="white">Registered Company</font>
                  </h4>
                </center>
                <p style={{ textAlign: "justify" }}>
                  <font color="white">
                    T Rillbit Option is licensed and regulated by the New York
                    Financial Services Commission under the Financial Services
                    (Electronic Money) Regulations 2011 as an "Electronic Money
                    Institution" with license No. FSC0063BNK.
                  </font>
                </p>
              </div>
            </div>
            <div className="column">
              <div
                style={{
                  background: "white",
                  padding: "20px 0px",
                  borderRadius: "10px 10px 0px 0px",
                }}
              >
                <center>
                  <img
                    id="dog"
                    src="appassets/newimages/a1.png"
                    alt="Snow"
                    align="middle"
                    style={{ width: "30%", height: 80 }}
                  />
                </center>
              </div>
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.10)",
                  borderRadius: "0px 0px 10px 10px",
                  marginTop: 0,
                  paddingTop: 5,
                  paddingRight: 30,
                  paddingLeft: 30,
                  paddingBottom: 20,
                }}
              >
                <center>
                  <h4 style={{ paddingTop: 5 }}>
                    <font color="white">Cryptocurrency Investments</font>
                  </h4>
                </center>
                <p style={{ textAlign: "justify" }}>
                  <font color="white">
                    Voted as the Most Trusted Bitcoin Investment site, Rillbit
                    Option is by far the most popular because you can invest in
                    bitcoin directly with USD and get paid within 24 hours.
                  </font>
                </p>
              </div>
            </div>
            <div className="column">
              <div
                style={{
                  background: "white",
                  padding: "20px 0px",
                  borderRadius: "10px 10px 0px 0px",
                }}
              >
                <center>
                  <img
                    id="dog"
                    src="appassets/newimages/a5.png"
                    alt="Snow"
                    align="middle"
                    style={{ width: "30%", height: 80 }}
                  />
                </center>
              </div>
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.10)",
                  borderRadius: "0px 0px 10px 10px",
                  marginTop: 0,
                  paddingTop: 5,
                  paddingRight: 30,
                  paddingLeft: 30,
                  paddingBottom: 20,
                }}
              >
                <center>
                  <h4 style={{ paddingTop: 5 }}>
                    <font color="white">Security Protected</font>
                  </h4>
                </center>
                <p style={{ textAlign: "justify" }}>
                  <font color="white">
                    Security of user information and funds is our first
                    priority. Our security team is continually improving our
                    end-to-end security measures, improving auditing processes,
                    and reducing the 'attack surface' of our infrastructure.
                  </font>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Counter Area Start */}
      <section id="counter">
        <div className="heading-title2" style={{ paddingBottom: 30 }}>
          <center>
            <h2>
              <font style={{ color: "black" }}>Online Trading Platform</font>
            </h2>
            <h5>
              <font style={{ color: "black" }}>
                FDs on Stocks, ETFs, Commodities, Indices, Cryptocurrencies,
                Forex and Options
              </font>
            </h5>
          </center>
        </div>
        <img
          src="appassets/newimages/video2.webp"
          alt="video"
          style={{ width: "100%" }}
        />
      </section>
      {/* Counter Area End */}
      {/* FAQ Area Start */}
      <section id="faq">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="heading-title2">
                <h2>Frequently Asked Question’s</h2>
                <h5>
                  <font color="white">
                    We answer some of your Frequently Asked Questions regarding
                    bitcoin and bitcoin cloud mining via email and contact us
                    page. If you have a query regarding bitcoin mining do not
                    hesitate to kindly contact us.
                  </font>
                </h5>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="faq-accordian">
                <div className="panel-group accordion" id="accordionId">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="panel panel-default">
                        <div className="panel panel-default">
                          <div className="panel-heading" id="headingTwo">
                            <h4 className="panel-title">
                              <a
                                className="collapsed"
                                data-toggle="collapse"
                                data-target="#collapse2"
                                aria-expanded="false"
                                aria-controls="collapse2"
                              >
                                Why is Bitcoin Trusted?
                              </a>
                            </h4>
                          </div>
                          <div
                            id="collapse2"
                            className="collapse"
                            aria-labelledby="headingTwo"
                            data-parent="#accordionId"
                          >
                            <div className="panel-body">
                              Bitcoin is trusted widely because it’s open-source
                              and decentralized. This means that the global
                              public has access to the entire Bitcoin source
                              code at any time. All payments can be made without
                              reliance on a third-party and the whole system is
                              protected by heavily peer-reviewed cryptographic
                              algorithms and most important thing is no
                              institution or organization can control Bitcoin.
                            </div>
                          </div>
                        </div>
                        <div className="panel-heading" id="headingOne">
                          <h4 className="panel-title">
                            <a
                              className
                              data-toggle="collapse"
                              data-target="#collapse1"
                              aria-expanded="false"
                              aria-controls="collapse1"
                            >
                              What is the minimum amount for withdrawal?
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapse1"
                          className="collapse"
                          aria-labelledby="headingOne"
                          data-parent="#accordionId"
                        >
                          <div className="panel-body">
                            The minimum amount for withdrawal is 0.0001 BTC
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading" id="headingThree">
                          <h4 className="panel-title">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-target="#collapse3"
                              aria-expanded="false"
                              aria-controls="collapse3"
                            >
                              I haven't found an answer to my question. How can
                              I get in touch with you?
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapse3"
                          className="collapse"
                          aria-labelledby="headingThree"
                          data-parent="#accordionId"
                        >
                          <div className="panel-body">
                            Customer service is our highest priority. Therefore
                            you can get in touch with us via our contact page.
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading" id="headingFour">
                          <h4 className="panel-title">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-target="#collapse4"
                              aria-expanded="false"
                              aria-controls="collapse4"
                            >
                              How can I make an investment?
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapse4"
                          className="collapse"
                          aria-labelledby="headingFour"
                          data-parent="#accordionId"
                        >
                          <div className="panel-body">
                            To make an investment with us simply choose the
                            investment plan or click on register and you will be
                            redirected to the registration page. After you have
                            completed registration, navigate to account funding
                            section to deposit money into your account. After
                            you have successfully funded your account, purchase
                            any of our investment plans and wait for your daily
                            or hourly profits.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="panel panel-default">
                        <div className="panel-heading" id="headingFive">
                          <h4 className="panel-title">
                            <a
                              className
                              data-toggle="collapse"
                              data-target="#collapse5"
                              aria-expanded="false"
                              aria-controls="collapse5"
                            >
                              What’s the minimum amount I can invest?
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapse5"
                          className="collapse"
                          aria-labelledby="headingFive"
                          data-parent="#accordionId"
                        >
                          <div className="panel-body">
                            For the Basic plan the minimum amount is 100 USD,
                            for the Premium plan it’s 1000 USD and for the
                            Ultimate plan it’s 10,000 USD.
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading" id="headingSix">
                          <h4 className="panel-title">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-target="#collapse6"
                              aria-expanded="false"
                              aria-controls="collapse6"
                            >
                              Do you have a referral program?
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapse6"
                          className="collapse"
                          aria-labelledby="headingSix"
                          data-parent="#accordionId"
                        >
                          <div className="panel-body">
                            Free Money? Sure, why not! If you’re bringing in
                            friends/family you can get up to 10% more to your
                            return per each plan your referral invest. The
                            payment is made instantly to your account balance
                            after the investment cycle has been completed. For
                            more information, please visit our Referrals
                            Section.
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading" id="headingSeven">
                          <h4 className="panel-title">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-target="#collapse7"
                              aria-expanded="false"
                              aria-controls="collapse7"
                            >
                              What is BItcoin mining?
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapse7"
                          className="collapse"
                          aria-labelledby="headingSeven"
                          data-parent="#accordionId"
                        >
                          <div className="panel-body">
                            Bitcoin mining is analogous to the mining of gold,
                            but its digital form. The process involves
                            specialized computers solving algorithmic equations
                            or hash functions. These problems help miners to
                            confirm blocks of transactions held within the
                            network. Bitcoin mining provides a reward for miners
                            by paying out in Bitcoin in turn the miners confirm
                            transactions on the blockchain. Miners introduce new
                            Bitcoin into the network and also secure the system
                            with transaction confirmation. They are also
                            rewarded network fees for when they harvest new coin
                            and a time when the last bitcoin is found mining
                            will continue.
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading" id="headingEight">
                          <h4 className="panel-title">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-target="#collapse8"
                              aria-expanded="false"
                              aria-controls="collapse8"
                            >
                              How does mining help secure Bitcoin?
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapse8"
                          className="collapse"
                          aria-labelledby="headingEight"
                          data-parent="#accordionId"
                        >
                          <div className="panel-body">
                            Mining creates the equivalent of a competitive
                            lottery that makes it very difficult for anyone to
                            consecutively add new blocks of transactions into
                            the block chain. This protects the neutrality of the
                            network by preventing any individual from gaining
                            the power to block certain transactions. This also
                            prevents any individual from replacing parts of the
                            block chain to roll back their own spends, which
                            could be used to defraud other users. Mining makes
                            it exponentially more difficult to reverse a past
                            transaction by requiring the rewriting of all blocks
                            following this transaction.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Area End */}
      <section id="counter">
        <div className="heading-title2">
          <center>
            <h2 style={{ color: "black" }}>What Our Clients Say About us</h2>
          </center>
        </div>
        <Swipers />
      </section>
      <a
        href="https://wa.me/+447862205606"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="c-icon c-icon-2xl whatsapp-icon"
          role="img"
        >
          <path d="M23.328 19.177c-0.401-0.203-2.354-1.156-2.719-1.292-0.365-0.13-0.63-0.198-0.896 0.203-0.26 0.391-1.026 1.286-1.26 1.547s-0.464 0.281-0.859 0.104c-0.401-0.203-1.682-0.62-3.203-1.984-1.188-1.057-1.979-2.359-2.214-2.76-0.234-0.396-0.026-0.62 0.172-0.818 0.182-0.182 0.401-0.458 0.604-0.698 0.193-0.24 0.255-0.401 0.396-0.661 0.13-0.281 0.063-0.5-0.036-0.698s-0.896-2.161-1.229-2.943c-0.318-0.776-0.651-0.677-0.896-0.677-0.229-0.021-0.495-0.021-0.76-0.021s-0.698 0.099-1.063 0.479c-0.365 0.401-1.396 1.359-1.396 3.297 0 1.943 1.427 3.823 1.625 4.104 0.203 0.26 2.807 4.26 6.802 5.979 0.953 0.401 1.693 0.641 2.271 0.839 0.953 0.302 1.823 0.26 2.51 0.161 0.76-0.125 2.354-0.964 2.688-1.901 0.339-0.943 0.339-1.724 0.24-1.901-0.099-0.182-0.359-0.281-0.76-0.458zM16.083 29h-0.021c-2.365 0-4.703-0.641-6.745-1.839l-0.479-0.286-5 1.302 1.344-4.865-0.323-0.5c-1.318-2.099-2.021-4.521-2.021-7.010 0-7.26 5.943-13.182 13.255-13.182 3.542 0 6.865 1.38 9.365 3.88 2.5 2.479 3.88 5.802 3.88 9.323-0.010 7.255-5.948 13.177-13.25 13.177zM27.359 4.599c-3.042-2.938-7.042-4.599-11.297-4.599-8.776 0-15.922 7.115-15.927 15.859 0 2.792 0.729 5.516 2.125 7.927l-2.26 8.214 8.448-2.203c2.328 1.255 4.948 1.927 7.615 1.932h0.005c8.781 0 15.927-7.115 15.932-15.865 0-4.234-1.651-8.219-4.661-11.214z"></path>
        </svg>
      </a>
      <div
        style={{
          height: 62,
          backgroundColor: "#FFFFFF",
          overflow: "hidden",
          boxSizing: "border-box",
          border: "1px solid #56667F",
          borderRadius: 4,
          textAlign: "right",
          blockSize: 62,
          fontSize: 12,
          fontFeatureSettings: "normal",
          textSizeAdjust: "100%",
          boxShadow: "inset 0 -20px 0 0 #000000",
          padding: 0,
          margin: 0,
          width: "100%",
        }}
      >
        <div style={{ height: 40, padding: 0, margin: 0, width: "100%" }}>
          <iframe
            src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=light&pref_coin_id=1505&invert_hover="
            width="100%"
            height="36px"
            scrolling="auto"
            marginWidth={0}
            marginHeight={0}
            frameBorder={0}
            border={0}
            style={{ border: 0, margin: 0, padding: 0 }}
          />
        </div>
      </div>
      {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Start Site Footer
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
      <footer
        className="site-footer pd-t-120"
        style={{ backgroundColor: "#02171a", color: "white" }}
      >
        {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          Start Footer Widget Area
      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
        <div className="footer-widget-area" style={{ padding: 0 }}>
          <div className="container">
            <div className="row">
              {/*~~~~~ Start Widget About us ~~~~~*/}
              <div className="col-lg-4">
                <center>
                  <aside className="widget widget_link">
                    <div className="widget-content">
                      <div className="about-loga" style={{ paddingBottom: 8 }}>
                        <img src="appassets/newimages/logo1.png" alt="Logo" />
                      </div>
                      <p style={{ textAlign: "justify" }}>
                        <font style={{ color: "white" }}>
                          {" "}
                          Rillbit Option is one of the fastest growing online
                          trading brands in the world. Voted the best mobile
                          trading platform, we have now expanded our offerings
                          to include CFDs on stocks and ETFs, Forex trading, and
                          the exclusive Rillbit Option product called Digital
                          Options.
                        </font>
                      </p>
                    </div>
                  </aside>
                </center>
              </div>
              {/*~./ end about us widget ~*/}
              {/*~~~~~ Start Widget Links ~~~~~*/}
              <div className="col-lg-3">
                <center>
                  <aside className="widget widget_links">
                    <h2 className="widget-title">Get In Touch</h2>
                    <div className="widget-content">
                      <ul>
                        {/*<li><font style="color:white;">1387 Atlantic Avenue, Brooklyn, NYC, USA.</font></li> */}
                        <li>
                          <font style={{ color: "white" }}>
                            support@Rillbitoption.com
                          </font>
                        </li>
                        <li>
                          <font style={{ color: "white" }}>+447862205606</font>
                        </li>
                        <li>
                          <font style={{ color: "white" }}>+447862205606</font>
                        </li>
                      </ul>
                    </div>
                  </aside>
                </center>
              </div>
              {/*~./ end links widget ~*/}
              {/*~~~~~ Start Widget Links ~~~~~*/}
              <div className="col-lg-3">
                <center>
                  <aside className="widget widget_links">
                    <h2 className="widget-title">My Account</h2>
                    <div className="widget-content">
                      <ul>
                        <li>
                          <a href="/login">Login</a>
                        </li>
                        <li>
                          <a href="/register">Register</a>
                        </li>
                        <li>
                          <a href="contact-us.html">Support</a>
                        </li>
                      </ul>
                    </div>
                  </aside>
                </center>
              </div>
              {/*~./ end links widget ~*/}
              {/*~~~~~ Start Widget Links ~~~~~*/}
              <div className="col-lg-3">
                <center>
                  <aside className="widget widget_links">
                    <h2 className="widget-title">Useful Link</h2>
                    <div className="widget-content">
                      <ul>
                        <li>
                          <a href="#">Terms &amp; Conditions</a>
                        </li>
                        <li>
                          <a href="about-us.html">About</a>
                        </li>
                      </ul>
                    </div>
                  </aside>
                </center>
              </div>
              {/*~./ end links widget ~*/}
              {/*~./ end links widget ~*/}
            </div>
          </div>
        </div>
        {/*~./ end footer widgets area ~*/}
        <hr style={{ backgroundColor: "white", height: 2 }} />
        {/*----whatsapp widget--*/}
        {/*----end of whatsapp widget--*/}
        {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          Start Footer Bottom Area
      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
        <div className="footer-bottom-area" style={{ marginTop: 0 }}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="copyright-text text-center">
                  <p>Copyright © 2020 . All rights reserved</p>
                  <div
                    className="search__inner"
                    id="google_translate_element"
                  ></div>
                </div>
                {/*~./ end copyright text ~*/}
              </div>
              {/*~./ col-12 ~*/}
            </div>
          </div>
        </div>
        {/*~./ end footer bottom area ~*/}
      </footer>
    </div>
  );
}
