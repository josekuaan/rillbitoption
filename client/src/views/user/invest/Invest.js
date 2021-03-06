import React from "react";
import { Link, Redirect } from "react-router-dom";

import "./style.css";

export default function Invest() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  if (isLoggedIn === null) {
    return <Redirect to="/" />;
  }
  return (
    <div className="body-content">
      <div className="row">
        <div className="col-md-3" style={{ marginTop: "50px" }}>
          <div className="card">
            <div
              className="card-header"
              style={{ padding: "5px 15px 0px", textAlign: "center" }}
            >
              <div className="header-title">
                <h4>Gold</h4>
                <p>Rillbit Option Investment Plan</p>
              </div>
            </div>
            <div className="cont">
              <div
                style={{
                  backgroundColor: "#061627",
                  paddingTop: "1.2rem",
                  color: "#fff",
                  textAlign: "center",
                  paddingBottom: "1.2rem",
                  paddingLeft: "2rem",
                  paddingRight: "2rem",
                }}
              >
                <span className="ball">
                  <i className="ti-bar-chart"></i>
                </span>
                <span>form</span>
                <h3 style={{ margin: "0 0" }}> 100€</h3>
                <p style={{ margin: "0 0" }}>ex VAT</p>
                <p style={{ marginTop: 0 }}>(ROI Capped at 75%)</p>
              </div>
              <div
                className="footer"
                style={{
                  padding: "5px 0px 0px",
                  textAlign: "center",
                  color: "#999",
                }}
              >
                <p>Maximum Investment:100€</p>
                <hr />
                <p>ROI Cycle: Daily</p>
                <hr />
                <p>Tenure: 10 Day(s)</p>
                <hr />
                <a
                  href="https://wa.me/+447862205606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="invest-link"
                >
                  Invest Now
                </a>
              </div>
            </div>
          </div>{" "}
          {/* end card */}
        </div>
        <div className="col-md-3" style={{ marginTop: "50px" }}>
          <div className="card">
            <div
              className="card-header"
              style={{ padding: "5px 15px 0px", textAlign: "center" }}
            >
              <div className="header-title">
                <h4>Daimond</h4>
                <p>Rillbit Option Investment Plan</p>
              </div>
            </div>
            <div className="cont">
              <div
                style={{
                  backgroundColor: "#061627",
                  paddingTop: "1rem",
                  color: "#fff",
                  textAlign: "center",
                  paddingBottom: "1rem",
                  paddingLeft: "2rem",
                  paddingRight: "2rem",
                }}
              >
                <span className="ball">
                  <i className="ti-bar-chart"></i>
                </span>
                <span>form</span>
                <h3 style={{ margin: "0 0" }}>1,000€</h3>
                <p style={{ margin: "0 0" }}>ex VAT</p>
                <p style={{ marginTop: 0 }}>(ROI Capped at 75%)</p>
              </div>
              <div
                className="footer"
                style={{
                  padding: "5px 0px 0px",
                  textAlign: "center",
                  color: "#999",
                }}
              >
                <p>Maximum Investment: 1,000€</p>
                <hr />
                <p>ROI Cycle: Daily</p>
                <hr />
                <p>Tenure: 10 Day(s)</p>
                <hr />
                <a
                  href="https://wa.me/+447862205606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="invest-link"
                >
                  Invest Now
                </a>
              </div>
            </div>
          </div>{" "}
          {/* end card */}
        </div>
        <div className="col-md-3" style={{ marginTop: "50px" }}>
          <div className="card">
            <div
              className="card-header"
              style={{ padding: "5px 15px 0px", textAlign: "center" }}
            >
              <div className="header-title">
                <h4>Platinum</h4>
                <p>Rillbit Option Investment Plan</p>
              </div>
            </div>
            <div className="cont">
              <div
                style={{
                  backgroundColor: "#061627",
                  paddingTop: "1rem",
                  color: "#fff",
                  textAlign: "center",
                  paddingBottom: "1rem",
                  paddingLeft: "2rem",
                  paddingRight: "2rem",
                }}
              >
                <span className="ball">
                  <i className="ti-bar-chart"></i>
                </span>
                <span>form</span>
                <h3 style={{ margin: "0 0" }}>10,000€</h3>
                <p style={{ margin: "0 0" }}>ex VAT</p>
                <p style={{ marginTop: 0 }}>(ROI Capped at 75%)</p>
              </div>
              <div
                className="footer"
                style={{
                  padding: "5px 0px 0px",
                  textAlign: "center",
                  color: "#999",
                }}
              >
                <p>Maximum Investment: 10,000€</p>
                <hr />
                <p>ROI Cycle: Daily</p>
                <hr />
                <p>Tenure: 10 Day(s)</p>
                <hr />
                <a
                  href="https://wa.me/+447862205606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="invest-link"
                >
                  Invest Now
                </a>
              </div>
            </div>
          </div>{" "}
          {/* end card */}
        </div>
        <div className="col-md-3" style={{ marginTop: "50px" }}>
          <div className="card">
            <div
              className="card-header"
              style={{ padding: "5px 15px 0px", textAlign: "center" }}
            >
              <div className="header-title">
                <h4>VIP</h4>
                <p>Rillbit Option Investment Plan</p>
              </div>
            </div>
            <div className="cont">
              <div
                style={{
                  backgroundColor: "#061627",
                  paddingTop: "1rem",
                  color: "#fff",
                  textAlign: "center",
                  paddingBottom: "1rem",
                  paddingLeft: "2rem",
                  paddingRight: "2rem",
                }}
              >
                <span className="ball">
                  <i className="ti-bar-chart"></i>
                </span>
                <span>form</span>
                <h3 style={{ margin: "0 0" }}>100,000€</h3>
                <p style={{ margin: "0 0" }}>ex VAT</p>
                <p style={{ marginTop: 0 }}>(ROI Capped at 75%)</p>
              </div>
              <div
                className="footer"
                style={{
                  padding: "5px 0px 0px",
                  textAlign: "center",
                  color: "#999",
                }}
              >
                <p>Maximum Investment: 100,000€</p>
                <hr />
                <p>ROI Cycle: Daily</p>
                <hr />
                <p>Tenure: 10 Day(s)</p>
                <hr />
                <a
                  href="https://wa.me/+447862205606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="invest-link"
                >
                  Invest Now
                </a>
              </div>
            </div>
          </div>{" "}
          {/* end card */}
        </div>
      </div>
    </div>
  );
}
