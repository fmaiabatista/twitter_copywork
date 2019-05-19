import React, { Component } from "react";
import "./styles/EngageWhoToFollow.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";

class EngageWhoToFollow extends Component {
  /* eslint-disable class-methods-use-this */
  renderTopNav() {
    const whoToFollowNavItems = [
      {
        label: "Who to follow",
        href: "#",
        active: true
      },
      {
        label: "Refresh",
        href: "#",
        active: false
      },
      {
        label: "See all",
        href: "#",
        active: false
      }
    ];

    return (
      <ul className="top-nav-list">
        {whoToFollowNavItems.map((item, index) => (
          <React.Fragment key={index}>
            <li
              className={`item-${item.label.replace(/\s/g, "-")}${
                item.active ? " active" : ""
              }`}
            >
              <a href={item.href}>{item.label}</a>
            </li>
            {index < whoToFollowNavItems.length - 1 && <small>·</small>}
          </React.Fragment>
        ))}
      </ul>
    );
  }

  renderUsers() {
    const whoToFollowUsers = [
      {
        image: "https://imgplaceholder.com/48x48/2196f3/ffffff/fa-child",
        name: "John Smith",
        username: "johnsmith",
        link: "/johnsmith"
      },
      {
        image: "https://imgplaceholder.com/48x48/ff9800/ffffff/fa-female",
        name: "Jane Doe",
        username: "janedoe",
        link: "/janedoe"
      },
      {
        image:
          "https://imgplaceholder.com/48x48/4caf50/ffffff/fa-wheelchair-alt",
        name: "Hacky Oliver",
        username: "hackyoliver",
        link: "hackyoliver"
      }
    ];

    return (
      <ul className="users-list">
        {whoToFollowUsers.map((user, index) => (
          <li key={index}>
            <Link to={user.link}>
              <img
                src={user.image}
                alt={`user ${user.name}`}
                width="48px"
                height="48px"
              />
            </Link>

            <div className="flex-right">
              <div className="top">
                <div className="left">
                  <span className="user-name">
                    <Link to={user.link}>{user.name}</Link>
                  </span>
                  <span className="user-username">
                    <Link to={user.link}>{`@${user.username}`}</Link>
                  </span>
                </div>
                <div className="right">
                  <span className="dismiss">
                    <Link to={user.link}>
                      <FontAwesomeIcon icon="times" />
                    </Link>
                  </span>
                </div>
              </div>

              <div className="bottom">
                <Button classes={["round", "follow"]} label="Follow" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="engage who-to-follow">
        {this.renderTopNav()}

        {this.renderUsers()}

        <div className="import-external">
          <FontAwesomeIcon icon="mail-bulk" />
          <p className="main">Find people you know</p>
          <p className="sub">Import contacts from your mail</p>
          <p className="other">Connect other contact lists</p>
        </div>
      </div>
    );
  }
}

export default EngageWhoToFollow;
