/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem)=>{
      return curElem.category === categoryItem;
    })

    setItems(updatedItems)
  }

  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>

      <div className="work__filters">
        <span className="work__item" onClick={()=>setItems(Menu)}>Everything</span>
        <span className="work__item" onClick={() => filterItem('Laravel')}>Laravel</span>
        <span className="work__item" onClick={() => filterItem('MERN')}>MERN</span>
        <span className="work__item" onClick={() => filterItem('Flutter')}>Flutter</span>
        <span className="work__item" onClick={() => filterItem('Vue')}>Vue JS</span>
      </div>

      <div className="work__container grid">
        {items.map((item) => {
          const { id, image, title, category,tools } = item;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img width={350} height={350} style={{objectFit:'fitHeight'}} src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href="" className="work__button">
                <i className="icon-link work__button-icon">

                </i>
              </a>
              <span className="work__tools">
                {tools}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
