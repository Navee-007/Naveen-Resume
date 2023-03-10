import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElm) => {
      return curElm.category === categoryItem;
    });

    setItems(updatedItems);
  };

  return (
    <section className="work container section" id="work">
      <h2 className="section-title">Recent Works</h2>

      <div className="work-filters">
        <span className="work-item" onClick={() => setItems(Menu)}>
          Everything
        </span>
        <span className="work-item" onClick={() => filterItem("Live")}>
          Live
        </span>
        <span className="work-item" onClick={() => filterItem("E-Commerce")}>
          e-commerce
        </span>
        <span className="work-item" onClick={() => filterItem("Mini Project")}>
          Mini Project
        </span>
        <span className="work-item" onClick={() => filterItem("Design")}>
          Design
        </span>
        <span className="work-item" onClick={() => filterItem("React projects")}>
          React projects
        </span>
      </div>

      <div className="work-container grid">
        {items.map((elem) => {
          const { id, image, title,category, link } = elem;
          return (
            <div className="work-card" key={id}>
              <div className="work-thumbnail">
                <img src={image} alt={title} className="work-img" />
                <div className="work-mask"></div>
              </div>
              <span className="work-category">{category}</span>
              <h3 className="work-title">{title}</h3>
              <a href={link} className="work-button">
                <i className="icon-link work-button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
