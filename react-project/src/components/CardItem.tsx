import React from 'react';

class CardItem extends React.Component<{ title: string; body: string }> {
  constructor(props: { title: string; body: string }) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

export default CardItem;
