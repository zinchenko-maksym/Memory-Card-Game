import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from './Card';
import Settings from './Settings';
import GlobalStyle from '../config/globalStyle';

const SetWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  @media only screen and (min-width: 1200px) {
    height: 100%;
    flex-flow: row nowrap;
  }
`;
const CardsList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: 8px;
  @media only screen and (min-width: 1200px) {
    width: 100%;
  }
`;

function Field({ myStore }) {
  const mapCards = myStore.cardsReducer.cardsList.map(
    (item) => <Card key={item.key} id={item.id} pairId={item.pairId} />,
  );

  return (
    <>
      <GlobalStyle />
      <SetWrap>
        <CardsList>{mapCards}</CardsList>
        <Settings />
      </SetWrap>
    </>
  );
}
Field.propTypes = {
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
  }).isRequired,
};

export default connect(
  (state) => ({
    myStore: state,
  }),
  {},
)(Field);
