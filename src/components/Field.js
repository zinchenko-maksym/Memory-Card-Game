import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from './Card';
import Settings from './Settings';

const SetWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 40px 10%;
`;

function Field({ myStore }) {
  const mapCards = myStore.cardsReducer.cardsOrder.map((item) => (
    <Card key={item} id={item} />
  ));

  return (
    <SetWrap className="field">
      {mapCards}
      <Settings />
    </SetWrap>
  );
}
Field.propTypes = {
  myStore: PropTypes.shape({
    cardsReducer: PropTypes.shape({
      cardsOrder: PropTypes.arrayOf(PropTypes.number).isRequired,
    }),
  }).isRequired,
};

export default connect(
  (state) => ({
    myStore: state,
  }),
  {},
)(Field);
