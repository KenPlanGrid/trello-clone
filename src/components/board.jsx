import React from 'react';
import Card from './card';
import CardColumn from './card-columns';

const cards1 = ['content', 'test'];

const cards2 = ['cards2', 'cards3'];

const cards3 = ['random', 'content'];

const cards4 = [21321, '12321'];

class Board extends React.Component {
  constructor () {
    super();


  }
  state = {
    board1: [...cards1],
    board2: [...cards2],
    board3: [...cards3],
    board4: [...cards4],
    titles: ['col1', 'col2', 'test3', '214']
  };

  addCard = (columnNumber) => {

    const content = window.prompt('Please enter card content');

    const currentBoard = `board${columnNumber}`;
    const cards = this.state[currentBoard];
    const newCards = [...cards, content];
    this.setState({
      [currentBoard]: newCards,
    }, () => {
      window.localStorage.setItem(currentBoard, newCards);
    })
  };

  moveCard = (index, columnNumber, direction) => {
    const currentBoard = `board${columnNumber}`;
    const newBoard = `board${columnNumber + direction}`;
    const currentCards = this.state[currentBoard];

    const newCards = this.state[newBoard];

    const cardToMove = currentCards.filter((card, idx) => idx === index)[0];

    const filteredCards = currentCards.filter((card, idx) => idx !== index);

    const newBoardCards = [...newCards, cardToMove]
    this.setState({
      [currentBoard]: filteredCards,
      [newBoard]: newBoardCards,
    }, () => {
      window.localStorage.setItem(currentBoard, filteredCards)
      window.localStorage.setItem(newBoard, newBoardCards)
    });

    // const Card =
  };

  render() {
    const { board1, board2, board3, board4, titles } = this.state;

    const boards = [board1, board2, board3, board4];
    return (
      <div className="board">
        {boards.map((cards, idx) => {
          return (
            <CardColumn
              cards={cards}
              id={idx}
              title={titles[idx]}
              addCard={this.addCard}
              columnNumber={idx+1}
              moveCard={this.moveCard}
            />
          )
        })}
      </div>
    )
  }

}

export default Board;
