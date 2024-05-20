import React from "react";
import "./portfolio.css";
import mywork_data from "../../assets/mywork_data.js";
import Project from "./Project.jsx";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio-title">
        <h2>Portfolio</h2>
      </div>
      <div className="portfolio-container">
        {mywork_data.map((work, index) => {
          return (
            <Project work={work} index={index}/>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
