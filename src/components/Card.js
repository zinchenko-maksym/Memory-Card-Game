/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  flipFirstCard, flipSecondCard, vanishCards, flipFirstCardBack, flipSecondCardBack,
} from '../actions';
import CardImage from './CardImage';

const CardWrap = styled.div`
  width: 50px;
  height: 70px;
  position: relative;
  margin: 6px;
  border-radius: 4px;
  overflow: hidden;
  @media only screen and (min-width: 768px) {
    width: 75px;
    height: 105px;
  }
  @media only screen and (min-width: 1200px) {
    width: 100px;
    height: 140px;
  }
`;
const CardBack = styled.div`
  background-color: ${(props) => props.theme.feather};
  width: 100%;
  height: 100%;
  transform: ${(props) => (props.isFlipped ? 'rotateY(90deg)' : 'rotateY(0)')}; 
  transition: ${(props) => (props.isFlipped ? 'transform 0.4s linear 0s' : 'transform 0.4s linear 0.4s')}; 
  transform-style: preserve-3d;
`;
const CardFront = styled.div`
  position: absolute;
  display: ${(props) => (props.isVanished ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 68px;
  border-radius: 4px;
  overflow: hidden;
  transform: ${(props) => (props.isFlipped ? 'rotateY(0deg)' : 'rotateY(90deg)')};
  background-color: white;
  transition: ${(props) => (props.isFlipped ? 'transform 0.4s linear 0.4s' : 'transform 0.4s linear 0s')}; 
  transform-style: preserve-3d;
  @media only screen and (min-width: 768px) {
    width: 73px;
    height: 103px;
  }
  @media only screen and (min-width: 1200px) {
    width: 98px;
    height: 138px;
  }
`;

function Card({
  myStore,
  id,
  onFirstCardFlip,
  onSecondCardFlip,
  onVanishCards,
  onFlipFirstCardBack,
  onFlipSecondCardBack,
  pairId,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isVanished, setIsVanished] = useState(false);
  function flipCard() {
    myStore.cardsReducer.cardsList.find((item) => {
      if (item.id === id && id !== myStore.cardsReducer.flippedCards.first) {
        if (myStore.cardsReducer.flippedCards.first === null) {
          setIsFlipped(true);
          onFirstCardFlip({ id });
        } else if (myStore.cardsReducer.flippedCards.second === null) {
          setIsFlipped(true);
          onSecondCardFlip({ id });
        }
      }
      return 0;
    });
  }

  useEffect(() => {
    const firstCardId = myStore.cardsReducer.flippedCards.first;
    const secondCardId = myStore.cardsReducer.flippedCards.second;
    if (secondCardId !== null && secondCardId !== null) {
      const firstCardPairId = myStore.cardsReducer.cardsList.filter(
        (card) => card.id === firstCardId,
      )[0].pairId;
      const secondCardPairId = myStore.cardsReducer.cardsList.filter(
        (card) => card.id === secondCardId,
      )[0].pairId;
      if (firstCardPairId === secondCardPairId) {
        onVanishCards();
      }
      if (firstCardPairId !== secondCardPairId
        && !myStore.cardsReducer.vanishedCards.includes(id)) {
        if (firstCardId === id) {
          onFlipFirstCardBack();
          setTimeout(() => {
            setIsFlipped(false);
          }, 1000);
        }
        if (secondCardId === id) {
          onFlipSecondCardBack();
          setTimeout(() => {
            setIsFlipped(false);
          }, 1000);
        }
      }
    }
  }, [myStore.cardsReducer.flippedCards]);

  useEffect(() => {
    if (myStore.cardsReducer.vanishedCards.includes(id)) {
      setTimeout(() => {
        setIsVanished(true);
      }, 1000);
    }
  }, [myStore.cardsReducer.vanishedCards]);
  return (
    <CardWrap>
      <CardFront isFlipped={isFlipped} isVanished={isVanished}>
        <CardImage id={id} />
      </CardFront>
      <CardBack isFlipped={isFlipped} isVanished={isVanished} onClick={flipCard} />
    </CardWrap>
  );
}

Card.propTypes = {
  myStore: PropTypes.shape({
    cardsReducer: PropTypes.shape({
      cardsList: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          pairId: PropTypes.number.isRequired,
        }),
      ).isRequired,
      flippedCards: PropTypes.shape({
        first: PropTypes.number,
        second: PropTypes.number,
      }),
      vanishedCards: PropTypes.arrayOf(PropTypes.number),
    }),
  }).isRequired,
  id: PropTypes.number.isRequired,
  pairId: PropTypes.number.isRequired,
  onFirstCardFlip: PropTypes.func.isRequired,
  onSecondCardFlip: PropTypes.func.isRequired,
  onVanishCards: PropTypes.func.isRequired,
  onFlipFirstCardBack: PropTypes.func.isRequired,
  onFlipSecondCardBack: PropTypes.func.isRequired,
};

export default connect(
  (state) => ({
    myStore: state,
  }),
  {
    onFirstCardFlip: flipFirstCard,
    onSecondCardFlip: flipSecondCard,
    onVanishCards: vanishCards,
    onFlipFirstCardBack: flipFirstCardBack,
    onFlipSecondCardBack: flipSecondCardBack,
  },
)(Card);
