import React, { useState, useEffect } from "react";

import axios from "axios";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import BASE_URL from "src/base_url";

const TheHeaderAdminDropdown = () => {
  const [picture, setPicture] = useState(" ");
  const [email, setEmail] = useState(" ");

  useEffect(async () => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const userId = window.localStorage.getItem("userId");
    const token = localStorage.getItem("token");
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
        if (response.data.success) {
          setPicture(response.data.msg.picture);
          setEmail(response.data.msg.email);
        }
      });
  };
  const handleLogout = () => {
    window.localStorage.clear();
    window.location.reload();
  };

  return (
    <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          {picture === "no-photo.jpg" || picture === " " ? (
            <div className="profile-background">
              <i
                className="fa fa-user"
                style={{ padding: "12px", fontSize: "16px" }}
              ></i>
            </div>
          ) : (
            <CImg
              src={picture}
              className="c-avatar-img"
              style={{ height: "100%" }}
              alt={email}
            />
          )}
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem header tag="div" color="light" className="text-center">
          <strong>Settings</strong>
        </CDropdownItem>
        <CDropdownItem to="/dashboard/admin/admin-profile">
          <CIcon name="cil-user" className="mfe-2" />
          Profile
        </CDropdownItem>

        <CDropdownItem divider />
        <CDropdownItem onClick={handleLogout}>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          Log out
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default TheHeaderAdminDropdown;
