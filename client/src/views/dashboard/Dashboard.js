import React, { useEffect, useContext } from "react";

import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import happy from "../../assets/icons/happiness.svg";
import { WalletContext } from "../../pageContext";
import "../style.css";

const Dashboard = () => {
  const {
    currentuser,
    setCurrentUser,
    EditAccount,
    setEditAccount,
  } = useContext(WalletContext);
  const userId = window.localStorage.getItem("userId");
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  const token = Cookies.get("token");
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(async () => {
    let isMounted = true
    fetchData();
    return () => { isMounted = false }
  }, []);
  const fetchData = async () => {
    axios
      .get(
        `https://rilibitoption.herokuapp.com/api/user/auth/getMe/${userId}`,
        config
      )
      .then(function (response) {
        console.log(response);
        if (response.data.success) {
          // console.log(response)
          setCurrentUser([response.data.msg]);
        }
        axios
          .get(
            `https://rilibitoption.herokuapp.com/api/investment/single-users-investment/${userId}`,
            config
          )
          .then(function (response) {
            console.log(response);
            if (response.data.success) {
              setEditAccount(response.data.invest);
            }
          });
      });
  };
  if (isLoggedIn === null) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <div className="content">
        <div
          style={{
            height: 560,
            backgroundColor: "#FFFFFF",
            overflow: "hidden",
            boxSizing: "border-box",
            border: "1px solid #56667F",
            borderRadius: 4,
            textAlign: "right",
            lineHeight: 14,
            fontSize: 12,
            fontFeatureSettings: "normal",
            textSizeAdjust: "100%",
            boxShadow: "inset 0 -20px 0 0 #56667F",
            padding: 0,
            margin: 0,
            width: "100%",
          }}
        >
          <div style={{ height: 540, padding: 0, margin: 0, width: "100%" }}>
            <iframe
              src="https://widget.coinlib.io/widget?type=chart&theme=light&coin_id=859&pref_coin_id=1505"
              width="100%"
              height="536px"
              scrolling="auto"
              marginWidth={0}
              marginHeight={0}
              frameBorder={0}
              border={0}
              style={{ border: 0, margin: 0, padding: 0, lineHeight: 14 }}
              alt="widget"
            />
          </div>
          <div
            style={{
              color: "#FFFFFF",
              lineHeight: 14,
              fontWeight: 400,
              fontSize: 11,
              boxSizing: "border-box",
              padding: "2px 6px",
              width: "100%",
              fontFamily: "Verdana, Tahoma, Arial, sans-serif",
            }}
          >
            <Link
              to="https://coinlib.io"
              target="_blank"
              style={{
                fontWeight: 500,
                color: "#FFFFFF",
                textDecoration: "none",
                fontSize: 11,
              }}
            >
              ©
            </Link>
            &nbsp;Rilibit Option
          </div>
        </div>

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
                            className="btn-success"
                            key={index}
                            style={{ color: "#fff" }}
                          >
                            Account Verified By Admin
                          </Link>
                        ) : (
                          <Link
                            to="#"
                            className="btn-danger"
                            key={index}
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

          <div className="col-md-6" >
            <div className="row" style={{ marginTop: "23px" }}>
              <div className="col-md-6" >
                <div className="card">
                  <h5 style={{ padding: "20px 10px 5px" }}>
                    <small>PROFIT</small>
                  </h5>
                  <div className="card-header roi">
                    <div >
                      <Link
                        to="..."
                        className="interest"
                        style={{ color: "#fff" }}
                      >
                        {EditAccount.length == 0 ||
                        EditAccount === undefined ? (
                          <span>$0.00</span>
                        ) : (
                          <span>${EditAccount[0].interest}</span>
                        )}
                      </Link>
                      <div className="balance">
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

              <div className="col-md-6">
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
                        {EditAccount === undefined ||
                        EditAccount.length === 0 ? (
                          <span>$0.00</span>
                        ) : (
                          <span>${EditAccount[0].amount}</span>
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
                          <i className="fa fa-long-arrow-alt-down"></i>
                        </small>{" "}
                        {EditAccount === undefined ||
                        EditAccount.length === 0 ? (
                          <span>$0.00</span>
                        ) : (
                          <span>${EditAccount[0].withdrawable}</span>
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
        <a
          href="https://wa.me/+447862205606"
          class="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="c-icon c-icon-2xl whatsapp-icon" role="img"><path d="M23.328 19.177c-0.401-0.203-2.354-1.156-2.719-1.292-0.365-0.13-0.63-0.198-0.896 0.203-0.26 0.391-1.026 1.286-1.26 1.547s-0.464 0.281-0.859 0.104c-0.401-0.203-1.682-0.62-3.203-1.984-1.188-1.057-1.979-2.359-2.214-2.76-0.234-0.396-0.026-0.62 0.172-0.818 0.182-0.182 0.401-0.458 0.604-0.698 0.193-0.24 0.255-0.401 0.396-0.661 0.13-0.281 0.063-0.5-0.036-0.698s-0.896-2.161-1.229-2.943c-0.318-0.776-0.651-0.677-0.896-0.677-0.229-0.021-0.495-0.021-0.76-0.021s-0.698 0.099-1.063 0.479c-0.365 0.401-1.396 1.359-1.396 3.297 0 1.943 1.427 3.823 1.625 4.104 0.203 0.26 2.807 4.26 6.802 5.979 0.953 0.401 1.693 0.641 2.271 0.839 0.953 0.302 1.823 0.26 2.51 0.161 0.76-0.125 2.354-0.964 2.688-1.901 0.339-0.943 0.339-1.724 0.24-1.901-0.099-0.182-0.359-0.281-0.76-0.458zM16.083 29h-0.021c-2.365 0-4.703-0.641-6.745-1.839l-0.479-0.286-5 1.302 1.344-4.865-0.323-0.5c-1.318-2.099-2.021-4.521-2.021-7.010 0-7.26 5.943-13.182 13.255-13.182 3.542 0 6.865 1.38 9.365 3.88 2.5 2.479 3.88 5.802 3.88 9.323-0.010 7.255-5.948 13.177-13.25 13.177zM27.359 4.599c-3.042-2.938-7.042-4.599-11.297-4.599-8.776 0-15.922 7.115-15.927 15.859 0 2.792 0.729 5.516 2.125 7.927l-2.26 8.214 8.448-2.203c2.328 1.255 4.948 1.927 7.615 1.932h0.005c8.781 0 15.927-7.115 15.932-15.865 0-4.234-1.651-8.219-4.661-11.214z"></path></svg>
        </a>
      </div>
    </>
  );
};

export default Dashboard;
