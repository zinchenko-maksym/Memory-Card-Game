/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// add card image
const CardPNGImageWrap = styled.img`
  width: 100%;
  height: 100%;
`;
const CardSVGImageWrap = styled.img`
  width: 100%;
  height: 100%;
  background-color: red;
`;
function CardImage({ myStore, id }) {
  function getImageSource() {
    return myStore.cardsReducer.cardsList.find((item) => id === item.id).imageSource;
  }

  return (
    <CardPNGImageWrap alt="img" src={getImageSource()} />
  );
}
CardImage.propTypes = {
  myStore: PropTypes.shape({
    cardsReducer: PropTypes.shape({
      cardsList: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          imageSource: PropTypes.string.isRequired,
        }),
      ),
    }),
  }).isRequired,
  id: PropTypes.number.isRequired,
};

export default connect(
  (state) => ({
    myStore: state,
  }),
  {},
)(CardImage);
