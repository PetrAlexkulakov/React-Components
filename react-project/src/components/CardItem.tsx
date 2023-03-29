import React from 'react';

interface CardObject {
  title?: string;
  body?: string;
  image?: string;
  city?: string;
  switch?: string;
}

const CardItem = (props: CardObject) => {
  return (
    <div className="card-item">
      <h3>{props.title}</h3>
      <img className="card__image" src={props.image}></img>
      <p>{props.body}</p>
      <p>{props.city}</p>
      <p>{props.switch}</p>
    </div>
  );
};

export default CardItem;
