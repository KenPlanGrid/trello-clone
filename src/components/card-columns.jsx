import React from 'react';
import Card from './card';

class CardColumn extends React.Component {
  render () {
    const { addCard, cards, columnNumber, moveCard, title } = this.props;


    return (
      <div className="card-column">
        <header>
          {title}
        </header>
        {cards.map((card) => {
          let leftArrow, rightArrow;
          if (columnNumber > 1) {
              leftArrow = <div onClick={() => moveCard(card.key, columnNumber, -1)}>{'<'}</div>
          }

          if (columnNumber < 4) {
            rightArrow = <div onClick={() => moveCard(card.key, columnNumber, 1)}>{'>'}</div>
          }
          return (
            <Card>
              <div className="card">
                {leftArrow}
                {card}
                {rightArrow}
              </div>
            </Card>
          )
        })}

        <button onClick={() => addCard(columnNumber)}>
          Add Card
        </button>
      </div>
    )
  }
}

export default CardColumn
