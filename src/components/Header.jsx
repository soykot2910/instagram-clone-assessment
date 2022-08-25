import React from "react";
import MainLogo from "../assets/img/navbar/Instagram-Logo.png";
import UserImg from "../assets/img/pp.jpeg";
import {
  ActivityIcon,
  DirectIcon,
  FindPeopleIcon,
  HomeIcon,
  NewPostIcon,
} from "./Icons";

const Header = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-light bg-white">
        <div className="container">
          <div className="main-nav">
            <a className="navbar-brand" href="#?">
              <img src={MainLogo} alt="" className="img-fluid" />
            </a>
            <div className="right-section">
              <div className="search">
                <input type="text" className="" placeholder="Search" />
              </div>
              <div className="icons">
                <HomeIcon />
                <DirectIcon />
                <NewPostIcon />
                <FindPeopleIcon />
                <ActivityIcon />
                <img src={UserImg} alt="" className="user-img" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
