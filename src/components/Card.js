import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  transform: ${(props) => (props.isFliped ? 'rotateY(90deg)' : 'rotateY(0)')}; 
  transition: transform 0.4s ease-in 0s;
  transform-style: preserve-3d;
`;
const CardFront = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transform: ${(props) => (props.isFliped ? 'rotateY(0deg)' : 'rotateY(90deg)')};
  background-color: ${(props) => props.theme.catalinaBlue};
  transition: transform 0.4s ease-out 0.4s;
  transform-style: preserve-3d;
`;

function Card({ id }) {
  function flipCard() {
    console.log(1);
  }
  return (
    <CardWrap>
      <CardBack onClick={flipCard}>{id}</CardBack>
      <CardFront>
        {id}
      </CardFront>
    </CardWrap>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
};
export default Card;
