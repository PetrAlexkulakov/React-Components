import React from 'react';
import { MouseEventHandler } from 'react';

interface CardObject {
  key?: number;
  title?: string;
  body?: string;
  image?: string;
  city?: string;
  switch?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const CardItem = (props: CardObject) => {
  return (
    <div className="card-item" onClick={props.onClick}>
      <h3>{props.title}</h3>
      <img className="card__image" src={props.image}></img>
      <p>{props.body}</p>
      <p>{props.city}</p>
      <p>{props.switch}</p>
    </div>
  );
};

export default CardItem;
