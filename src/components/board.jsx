import React from 'react';
import Card from './card';
import CardColumn from './card-columns';

const cards1 = [];
cards1.push(<Card key="uuid1">1</Card>);
cards1.push(<Card key="uuid2">1 </Card>);


const cards2 = [];
cards2.push(<Card key="636251312">1</Card>);
cards2.push(<Card key="uuid2123">1 </Card>);


const cards3 = [];
cards3.push(<Card key="63622251312">1</Card>);
cards3.push(<Card key="uui22d2123">1 </Card>);

const cards4 = [];
cards4.push(<Card key="636251211312">1</Card>);
cards4.push(<Card key="uuid22132123">1 </Card>);

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
    const newCards = [...cards, (<Card key={`${Math.random() * 50000}1209353902`}>{content}</Card>)];
    this.setState({
      [currentBoard]: newCards,
    }, () => {
      window.localStorage.setItem(currentBoard, newCards);
    })
  };

  moveCard = (cardId, columnNumber, direction) => {
    const currentBoard = `board${columnNumber}`;
    const newBoard = `board${columnNumber + direction}`;
    const currentCards = this.state[currentBoard];

    const newCards = this.state[newBoard];

    const cardToMove = currentCards.filter((card) => card.key === cardId)[0];

    const filteredCards = currentCards.filter((card) => card.key !== cardId);

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