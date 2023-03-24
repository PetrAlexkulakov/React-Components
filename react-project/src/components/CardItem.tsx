import React from 'react';

interface CardObject {
  title?: string;
  body?: string;
  image?: string;
  date?: string;
  switch?: string;
}

class CardItem extends React.Component<CardObject> {
  constructor(props: CardObject) {
    super(props);
  }
  render() {
    return (
      <div className="card-item">
        <h3>{this.props.title}</h3>
        <img className="card__image" src={this.props.image}></img>
        <p>{this.props.body}</p>
        <p>{this.props.date}</p>
        <p>{this.props.switch}</p>
      </div>
    );
  }
}

export default CardItem;
