import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from './Card';
// import { colors, figures } from '../config/constants';

const SetWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 40px 20%;
`;

function Field({ myStore }) {
  console.log(myStore);
  const mapCards = myStore.cardsList.map((item) => (
    <Card key={item.id} id={item.id} />
  ));
  return (
    <SetWrap className="field">
      {mapCards}
    </SetWrap>
  );
}
Field.propTypes = {
  myStore: PropTypes.shape({
    cardsList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
        figure: PropTypes.string.isRequired,
        pairId: PropTypes.number.isRequired,
        status: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default connect(
  (state) => ({
    myStore: state,
  }),
  {},
)(Field);
