import React from "react";
import { Link } from "gatsby";
import Navbar from "../components/navbar";
import triangles from '../images/triangles.svg'
import laptop from "../images/laptop.svg";
import "./header.css";
import "../components/navbar.css";

const Header = ({ subTitle, showTitle = false }) => {
  if (showTitle) {
    return (
      <div className="header">
        <div className="title-line">
          <img id="triangles" src={triangles} />
          <h1 className="title">Polyglot Devs</h1>
        </div>

        <div class="subtitle-line">
          <div className="box-container">
            <h2 className="box-text">{subTitle.split('\n').map((item, i) => <div key={i}>{item}</div>)}</h2>
          </div>
          <img id="laptop" src={laptop} />
        </div>
      </div>
    );
  }
  return (
    <div className="header">
      <div className="box-container">
          <h2 className="box-text">{subTitle.split('\n').map((item, i) => <div key={i}>{item}</div>)}</h2>
      </div>
    </div>
  );
};

export default Header;
