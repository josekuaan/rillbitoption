import React from "react";

import Admin from "./views/admin/dashboard/Dashboard"
import Dashboard from "./views/dashboard/Dashboard"
import DepositPage from "./views/user/deposit/Deposit"
import WithdrawPage from "./views/user/withdraw/Withdraw"
import SupportPage from "./views/user/support/Support"
import LogPage from "./views/user/open/Content"
import Settledpage from "./views/user/settled/Content"
import PaymentPage from "./views/user/payment/Content"
import Invest from "./views/user/invest/Invest"
import CredentialsPage from "./views/user/profile/Content"

import MePage from "./views/user/me/Content"
import UserLog from "./views/admin/userlog/Log"
import EditUser from "./views/admin/userlog/EditUser"
import UserAction from "./views/admin/useraction/Log"
import Credit from "./views/admin/useraction/Credit"
import AdminProfile from "./views/admin/profile/Content"

const routes = [
  // { path: "/", exact: true, name: "Home" },
  { path: "/dashboard/admin", name: "Admin", component: Admin, exact: true },
  {
    path: "/dashboard/user",
    name: "Dashboard",
    component: Dashboard,
    exact: true,
  },
  {
    path: "/dashboard/user/deposit",
    name: "Deposit",
    component: DepositPage,
    exact: true,
  },
  {
    path: "/dashboard/user/withdraw",
    name: "Withdraw",
    component: WithdrawPage,
    exact: true,
  },
  {
    path: "/dashboard/user/invest",
    name: "Investment",
    component: Invest,
    exact: true,
  },
  {
    path: "/dashboard/user/user-support",
    name: "Support",
    component: SupportPage,
    exact: true,
  },
  {
    path: "/dashboard/user/user-log",
    name: "Log",
    component: LogPage,
    exact: true,
  },
  {
    path: "/dashboard/user/user-settled-log",
    name: "Settled",
    component: Settledpage,
    exact: true,
  },
  {
    path: "/dashboard/user/new-deposit-instant",
    name: "payment",
    component: PaymentPage,
    exact: true,
  },
  // { path: '/new', name: 'payment', component: PaymentPage, exact: true },
  {
    path: "/dashboard/user/user-credentials",
    name: "credentials",
    component: CredentialsPage,
    exact: true,
  },
  {
    path: "/dashboard/user/user-profile",
    name: "me",
    component: MePage,
    exact: true,
  },
  {
    path: "/dashboard/admin/users-log",
    name: "User Log",
    component: UserLog,
    exact: true,
  },
  {
    path: "/dashboard/admin/users-actions",
    name: "User Action",
    component: UserAction,
    exact: true,
  },
  {
    path: "/dashboard/admin/edit-user/:id",
    name: "Edit User",
    component: EditUser,
    exact: true,
  },
  {
    path: "/dashboard/admin/credit-user/:id",
    name: "Credit User",
    component: Credit,
    exact: true,
  },
  {
    path: "/dashboard/admin/admin-profile",
    name: "Admin Profile",
    component: AdminProfile,
    exact: true,
  },
];

export default routes;
