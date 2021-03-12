import React, { useContext, useState } from "react";
import * as moment from "moment";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

import { WalletContext } from "../../../pageContext";
import BASE_URL from "src/base_url";

export default function Items() {
  const { users, setUsers } = useContext(WalletContext);
  const token = Cookies.get("token");
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${token}`,
    },
  };
  const handleDelete = (id) => async () => {
    axios({
      method: "delete",
      url: `${BASE_URL}/api/user/auth/delete/${id}`,
      headers: config.headers,
    })
      .then((response) => {
        if (response.data.success) {
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const approveHandler = (id) => async () => {
    console.log(id, users);
    const action = users.filter((i) => i._id === id);

    console.log(action);
    const data = { status: !action[0].status };
    console.log(data);

    axios({
      method: "put",
      url: `${BASE_URL}/api/user/auth/update/${id}`,
      data,
      headers: config.headers,
    })
      .then((response) => {
        if (response.data.success) {
          console.log(response.data);
          axios(`${BASE_URL}/api/user/auth/get-users`, {
            method: "get",
            data,
            headers: config.headers,
          })
            .then((response) => {
              if (response.data.success) {
                setUsers(response.data.msg);
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {users.map((lo, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{lo._id.slice(5, 12)}</td>
          <td>{`${lo.fullName}`}</td>
          <td>{`${lo.email}`}</td>
          <td>{`${lo.userName}`}</td>
          <td>{moment(`${lo.createdAt}`).format("DD/ MM /YYYY")}</td>
          <td style={{ padding: "0rem" }}>
            {/* {lo.status ? <td style={{color:'green'}}>Approve</td> : <td style={{color:'red'}}>Pending</td>} */}
            <tr>
              <td style={{ border: "none" }}>
                <Link
                  to="#"
                  rel="tooltip"
                  title="delete user"
                  onClick={handleDelete(lo._id)}
                >
                  <i class="fas fa-window-close"></i>
                  {/* <i className="fa fa-close fill2"></i> */}
                </Link>
              </td>
              <td style={{ border: "none" }}>
                <Link
                  to={`/dashboard/admin/credit-user/${lo._id}`}
                  rel="tooltip"
                  title="edit user"
                >
                  <i class="fas fa-user-edit"></i>
                  {/* <i className="fill fa fa-pencil"></i> */}
                </Link>
              </td>
              <td style={{ border: "none" }}>
                <Link
                  to="#"
                  rel="tooltip"
                  onClick={approveHandler(lo._id)}
                  title="Approved"
                >
                  <i
                    className={` ${
                      lo.status ? " fill" : " fas fa-check-square"
                    } fas fa-check-square`}
                  ></i>
                </Link>
              </td>
            </tr>
          </td>
        </tr>
      ))}
    </>
  );
}
