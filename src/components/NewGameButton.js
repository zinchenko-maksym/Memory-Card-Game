/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCardsList } from '../actions';

const NewGameButtonWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 0;
  width: 220px;
  align-content: flex-start;
`;

function Settings({
  myStore, onSetCardsList, difficultyIndex, themeIndex,
}) {
  function shuffleArray(array) {
    const arrayClone = [...array];
    for (let i = arrayClone.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrayClone[i], arrayClone[j]] = [arrayClone[j], arrayClone[i]];
    }
    return arrayClone;
  }
  function startNewGame() {
    const difficulty = myStore.settingsReducer.difficulties[difficultyIndex];
    const cardsSet = [];
    for (let i = 0; i < difficulty; i += 1) {
      const pairId = i % (difficulty / 2);
      cardsSet.push({
        id: i, key: i, pairId, figure: 'a', status: 'default',
      }); // Put Image property
    }
    const shuffledCards = shuffleArray(cardsSet);
    onSetCardsList({ cards: shuffledCards });
  }
  useEffect(() => {
    startNewGame();
  }, []);
  return (
    <NewGameButtonWrap onClick={startNewGame}><button type="submit"> Start a New Game! </button></NewGameButtonWrap>
  );
}
Settings.propTypes = {
  myStore: PropTypes.shape({
    cardsReducer: PropTypes.shape({
      cardsList: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          color: PropTypes.string,
          figure: PropTypes.string,
          pairId: PropTypes.number,
          status: PropTypes.string,
        }),
      ).isRequired,
    }),
    settingsReducer: PropTypes.shape({
      difficulties: PropTypes.arrayOf(PropTypes.number).isRequired,
      themes: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  }).isRequired,
  onSetCardsList: PropTypes.func.isRequired,
  difficultyIndex: PropTypes.number.isRequired,
  themeIndex: PropTypes.number.isRequired,
};

export default connect(
  (state) => ({
    myStore: state,
  }),
  {
    onSetCardsList: setCardsList,
  },
)(Settings);
