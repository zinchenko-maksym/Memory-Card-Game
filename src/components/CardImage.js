import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SettingsWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 0;
  width: 220px;
  align-content: flex-start;
`;

function CardImage({ myStore }) {
  return (
    <SettingsWrap />
  );
}
CardImage.propTypes = {
  myStore: PropTypes.shape({
    settingsReducer: PropTypes.shape({
      themeIndex: PropTypes.number,
    }),
  }).isRequired,
};

export default connect(
  (state) => ({
    myStore: state,
  }),
  {},
)(CardImage);
