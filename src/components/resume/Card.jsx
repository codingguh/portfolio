import React from "react";
import parse from 'html-react-parser';

const Card = (props) => {
  return (
    <div className="timeline__item">
      <i className={props.icon}></i>
      <span className="timeline__date">{props.year}</span>
      <h3 className="timeline__title">{props.title}</h3>
      <p className="timeline__text">{parse(props.desc)}</p>
    </div>
  );
};

export default Card;
