import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { flipFirstCard } from '../actions';

const CardWrap = styled.div`
  width: 100px;
  height:140px;
  position: relative;
  background-color: transparent;
  color: white;
`;
const CardBack = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.pastelGreen};
  width: 100%;
  height: 100%;
  transform: ${(props) => (props.isFlipped ? 'rotateY(90deg)' : 'rotateY(0)')}; 
  transition: transform 0.4s ease-in 0s;
  transform-style: preserve-3d;
`;
const CardFront = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transform: ${(props) => (props.isFlipped ? 'rotateY(0deg)' : 'rotateY(90deg)')};
  background-color: ${(props) => props.theme.catalinaBlue};
  transition: transform 0.4s ease-out 0.4s;
  transform-style: preserve-3d;
`;

function Card({ myStore, id, onFirstCardFlip }) {
  const [isFlipped, setIsFlipped] = useState(false);
  function flipCard() {
    myStore.cardsReducer.cardsList.find((item) => {
      if (item.id === id) {
        setIsFlipped(true);
        console.log(4);
        onFirstCardFlip(id);
      }
      return 0;
    });
  }
  return (
    <CardWrap>
      <CardBack isFlipped={isFlipped} onClick={flipCard}>{id}</CardBack>
      <CardFront isFlipped={isFlipped}>
        {id}
      </CardFront>
    </CardWrap>
  );
}

Card.propTypes = {
  myStore: PropTypes.shape({
    cardsReducer: PropTypes.shape({
      cardsList: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          color: PropTypes.string.isRequired,
          figure: PropTypes.string.isRequired,
          pairId: PropTypes.number.isRequired,
          status: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }),
  }).isRequired,
  id: PropTypes.number.isRequired,
  onFirstCardFlip: PropTypes.func.isRequired,
};

export default connect(
  (state) => ({
    myStore: state,
  }),
  { onFirstCardFlip: flipFirstCard },
)(Card);
