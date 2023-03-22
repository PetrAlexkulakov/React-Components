import React from 'react';

class CardItem extends React.Component<{ title?: string; body?: string; image?: string }> {
  constructor(props: { title: string; body: string; image: string }) {
    super(props);
  }
  render() {
    return (
      <div className="card-item">
        <h3>{this.props.title}</h3>
        <img className="card__image" src={this.props.image}></img>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

export default CardItem;
