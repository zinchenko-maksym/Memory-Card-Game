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
  const mapCards = myStore.cardsReducer.cardsList.map(
    (item) => <Card key={item.key} id={item.id} pairId={item.pairId} />,
  );

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
