import { TrendingUp,Timeline,LineStyle, WorkOutline,AttachMoney,Report, Storefront, PermIdentity, MailOutline, DynamicFeed, ChatBubbleOutline } from '@material-ui/icons';
import React from 'react'
import {Link} from 'react-router-dom'
import './sidebar.css'

export default function () {
    return (
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <Link to="/">
                <li className="sidebaeListItem">
                  <LineStyle className="sidebarIcon" />
                  Home
                </li>
              </Link>
              <li className="sidebaeListItem">
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
              <li className="sidebaeListItem">
                <TrendingUp className="sidebarIcon" />
                Sales
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <li className="sidebaeListItem">
                <Link to="/users">
                  <PermIdentity className="sidebarIcon" />
                  Users
                </Link>
              </li>
              <li className="sidebaeListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
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
