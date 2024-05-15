import React from "react";
import "./portfolio.css";
import mywork_data from "../../assets/mywork_data.js";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio-title">
        <h2>Portfolio</h2>
      </div>
      <div className="portfolio-container">
        {mywork_data.map((work, index) => {
          return (
            <div>
              <div><h3>{work.w_name}</h3><p>{work.description}</p><ul className="tags">{work.languages.map((language, i) => {return <li className="tag" key={i}>{language}</li>})}</ul></div>
              <img key={index} src={work.w_img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
