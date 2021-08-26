import {
  TrendingUp,
  Timeline,
  LineStyle,
  WorkOutline,
  AttachMoney,
  Report,
  Storefront,
  PermIdentity,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  Receipt,
} from "@material-ui/icons";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function ({ sidebaropen, setsidebaropen }) {
  const sidebarRef = useRef();

  window.onresize = () => {
    if (window.innerWidth > 400) {
      console.log("sup");
      setsidebaropen(true);
    }
  };
  useEffect(() => {
    if (sidebaropen) {
      sidebarRef.current.style.display = "block";
      return;
    }
    if (window.innerWidth <= 400) {
      sidebarRef.current.style.display = "none";
    }
  }, [sidebaropen]);

  return (
    <div className="sidebar" ref={sidebarRef}>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebaeListItem">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebaeListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <Link to="/sales" className="link">
              <li className="sidebaeListItem">
                <TrendingUp className="sidebarIcon" />
                Sales
              </li>
            </Link>
            <Link to="/orders" className="link">
              <li className="sidebaeListItem">
                <Receipt className="sidebarIcon" />
                Orders
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebaeListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebaeListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>
            <li className="sidebaeListItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebaeListItem">
              <TrendingUp className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebaeListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebaeListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebaeListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebaeListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebaeListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebaeListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
