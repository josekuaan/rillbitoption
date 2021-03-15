import React, { useEffect, useContext } from "react";

import { Link, Redirect } from "react-router-dom";
import axios from "axios";

import { WalletContext } from "../../../pageContext";
import happy from "../../../assets/icons/happiness.svg";
import Frame from "./Frame";
import "../../style.css";
import BASE_URL from "src/base_url";

const Dashboard = () => {
  const {
    currentuser,
    setCurrentUser,
    creditAccount,
    setCreditAccount,
  } = useContext(WalletContext);
  const userId = window.localStorage.getItem("userId");
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  const token = localStorage.getItem("token");

  useEffect(async () => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`${BASE_URL}/api/user/auth/getMe/${userId}`, config)
      .then(function (response) {
        console.log(response);
        if (response.data.success) {
          // console.log(response)
          setCurrentUser([response.data.msg]);
        }
        axios
          .get(
            `${BASE_URL}/api/investment/single-users-investment/${response.data.msg._id}`
          )
          .then(function (response) {
            console.log(response);
            if (response.data.success) {
              setCreditAccount(response.data.invest);
            }
          });
      });
  };
  // if (isLoggedIn === null) {
  //   return <Redirect to="/" />;
  // }
  return (
    <>
      <div className="content">
        <Frame />
        <div className="row">
          <div className="col-md-6" style={{ marginTop: "20px" }}>
            <div className="card">
              <div className="card-header">
                <div className="greet-user col-12 col-xl-10">
                  <div style={{ margin: "auto", width: "75%" }}>
                    <img
                      src={happy}
                      alt="happiness"
                      className="img-fluid  mb-2"
                    />
                  </div>
                  {currentuser.map((user, index) => (
                    <h2 className="fs-23 font-weight-600 mb-2" key={index}>
                      Dear {user.fullName},
                    </h2>
                  ))}
                  <p className="text-muted">
                    Welcome to Rilibit Option, We hope you enjoy using Rilibit
                    Option. Please ensure you refer members to Rilibit Option as
                    this can earn you more bonus
                  </p>
                  {currentuser.length == 0 ? (
                    <Link
                      to="#"
                      className="btn-danger"
                      style={{ color: "#fff" }}
                    >
                      Account Not Verified By Admin
                    </Link>
                  ) : (
                    currentuser.map((user, index) => (
                      <div className="button" key={index}>
                        {user.status ? (
                          <Link
                            to="#"
                            key={index}
                            className="btn-success"
                            style={{ color: "#fff", padding: "10px 20px" }}
                          >
                            Account Verified By Admin
                          </Link>
                        ) : (
                          <Link
                            to="#"
                            key={index}
                            className="btn-danger"
                            style={{ color: "#fff" }}
                          >
                            Account Not Verified By Admin
                          </Link>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6" style={{ marginTop: "12px" }}>
                <div className="card">
                  <h5 style={{ padding: "20px 10px 0px" }}>
                    <small>PROFIT</small>
                  </h5>
                  <div className="card-header roi">
                    <div className="">
                      <Link
                        to="..."
                        className="interest"
                        style={{ color: "#fff" }}
                      >
                        $
                        {creditAccount.length == 0 ? (
                          <span>0.00</span>
                        ) : (
                          `${creditAccount.map((credit, index) => (
                            <span key={index}>{credit.interest}</span>
                          ))}`
                        )}
                      </Link>
                      <div style={{ marginTop: "14px" }}>
                        <small>
                          <i className="fas fa-long-arrow-alt-down"></i>VS
                          average
                        </small>
                      </div>

                      <br />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6" style={{ marginTop: "12px" }}>
                <div className="card">
                  <h5 style={{ padding: "20px 10px 0px" }}>
                    <small>SESSIONS BY DEVICE</small>
                  </h5>
                  <div className="card-header gadgets">
                    <div className="gadget">
                      <i
                        className="fa fa-mobile"
                        style={{ fontSize: "30px" }}
                      ></i>
                      <div>
                        <small>40%</small>
                      </div>
                    </div>
                    <br />
                    <div className="gadget">
                      <i
                        className="fa fa-tablet"
                        style={{ fontSize: "30px" }}
                      ></i>
                      <div>
                        <small>20%</small>
                      </div>
                    </div>
                    <br />
                    <div className="gadget">
                      <i
                        className="fa fa-desktop"
                        style={{ fontSize: "30px" }}
                      ></i>
                      <div>
                        <small>40%</small>
                      </div>
                    </div>
                    <br />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <h5 style={{ padding: "20px 10px 0px" }}>
                    <small>DEPOSIT BALANCE</small>
                  </h5>
                  <div className="card-header roi">
                    <div className="">
                      <div className="balance">
                        <small>
                          <i className="fas fa-long-arrow-alt-down"></i>
                        </small>
                        ${" "}
                        {creditAccount.length == 0 ? (
                          <span>0.00</span>
                        ) : (
                          `${creditAccount.map((credit, index) => (
                            <span key={index}>{credit.wallet}</span>
                          ))}`
                        )}
                      </div>

                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <h5 style={{ padding: "20px 10px 0px" }}>
                    <small>BALANCE</small>
                  </h5>
                  <div className="card-header roi">
                    <div className="">
                      <div className="withdraw">
                        <small>
                          <i className="fas fa-long-arrow-alt-down"></i>
                        </small>
                        ${" "}
                        {creditAccount.length == 0 ? (
                          <span>0.00</span>
                        ) : (
                          `${creditAccount.map((credit, index) => (
                            <span key={index}>{credit.withdrawable}</span>
                          ))}`
                        )}
                      </div>

                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
