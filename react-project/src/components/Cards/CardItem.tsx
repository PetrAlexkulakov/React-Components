import React from 'react';
import { MouseEventHandler } from 'react';

interface CardObject {
  key?: number | string;
  title?: string;
  body?: string;
  image?: string;
  city?: string;
  switch?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const CardItem = (props: CardObject) => {
  return (
    <div className="card-item" onClick={props.onClick} data-testid="card-item">
      <h3 className="card__text">{props.title}</h3>
      <img className="card__image" src={props.image}></img>
      <p className="card__text">{props.body}</p>
      <p className="card__text">{props.city}</p>
      <p className="card__text">{props.switch}</p>
    </div>
  );
};

export default CardItem;
