/* eslint-disable prefer-template */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCardsList, changeSettings } from '../actions';
import { cardImages } from '../assets/images/ImportImages';

const NewGameButtonWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 0;
  width: 220px;
  align-content: flex-start;
`;

function Settings({
  myStore, onSetCardsList, difficultyIndex, themeIndex, onChangeSettings,
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
    for (let i = 0; i < difficulty; i += 2) {
      const pairId = Math.random();
      let imageSource = cardImages.anime['img' + (i / 2 + 1)];
      if (myStore.settingsReducer.themes[themeIndex].toLowerCase() === 'anime') {
        imageSource = cardImages.anime['img' + (i / 2 + 1)];
      }
      if (myStore.settingsReducer.themes[themeIndex].toLowerCase() === 'figures') {
        imageSource = cardImages.figures['img' + (i / 2 + 1)];
      }
      if (myStore.settingsReducer.themes[themeIndex].toLowerCase() === 'animals') {
        imageSource = cardImages.animals['img' + (i / 2 + 1)];
      }
      cardsSet.push({
        id: Math.random(),
        key: Math.random(),
        pairId,
        imageSource,
      });
      cardsSet.push({
        id: Math.random(),
        key: Math.random(),
        pairId,
        imageSource,
      });
    }
    const shuffledCards = shuffleArray(cardsSet);
    onSetCardsList({ cards: shuffledCards });
    onChangeSettings({ difficultyIndex, themeIndex });
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
  onChangeSettings: PropTypes.func.isRequired,
  difficultyIndex: PropTypes.number.isRequired,
  themeIndex: PropTypes.number.isRequired,
};

export default connect(
  (state) => ({
    myStore: state,
  }),
  {
    onSetCardsList: setCardsList,
    onChangeSettings: changeSettings,
  },
)(Settings);
