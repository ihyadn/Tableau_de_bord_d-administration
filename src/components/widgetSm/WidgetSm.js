import React from 'react'
import './widgetsm.css'
import {Visibility} from '@material-ui/icons'
import {Link} from 'react-router-dom'
export default function WidgetSm() {
    return (
      <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
          <li className="widgetSmListItem">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Anna Keller</span>
              <span className="widgetSmUserTitle"> Software Engineer</span>
            </div>
            <Link to="/users/20">
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
            </Link>
          </li>
          <li className="widgetSmListItem">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Anna Keller</span>
              <span className="widgetSmUserTitle"> Software Engineer</span>
            </div>
            <Link to="/users/20">
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
            </Link>
          </li>
          <li className="widgetSmListItem">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Anna Keller</span>
              <span className="widgetSmUserTitle"> Software Engineer</span>
            </div>
            <Link to="/users/20">
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
            </Link>
          </li>
          <li className="widgetSmListItem">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Anna Keller</span>
              <span className="widgetSmUserTitle"> Software Engineer</span>
            </div>
            <Link to="/users/20">
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
            </Link>
          </li>
          <li className="widgetSmListItem">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Anna Keller</span>
              <span className="widgetSmUserTitle"> Software Engineer</span>
            </div>
            <Link to="/users/20">
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
            </Link>
          </li>
        </ul>
      </div>
    );
}

