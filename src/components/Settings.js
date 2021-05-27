import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Dropdown from './Dropdown';
import NewGameButton from './NewGameButton';

const SettingsWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 0;
  width: 220px;
  align-content: flex-start;
`;

function Settings({ myStore }) {
  const difficulties = myStore.settingsReducer.difficulties.map((dif) => `${dif} Cards`);
  const [difficultyIndex, setDifficultyIndex] = useState(0);
  const [themeIndex, setThemeIndex] = useState(0);

  return (
    <SettingsWrap>
      <span>Difficulty(Cards):</span>
      <Dropdown
        selectedIndex={difficultyIndex}
        changeSelectedItem={setDifficultyIndex}
        menuElements={difficulties}
      />
      <span>Theme:</span>
      <Dropdown
        menuElements={myStore.settingsReducer.themes}
        selectedIndex={themeIndex}
        changeSelectedItem={setThemeIndex}
      />
      <NewGameButton difficultyIndex={difficultyIndex} themeIndex={themeIndex} />
    </SettingsWrap>
  );
}
Settings.propTypes = {
  myStore: PropTypes.shape({
    settingsReducer: PropTypes.shape({
      difficulties: PropTypes.arrayOf(PropTypes.number).isRequired,
      themes: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  }).isRequired,
};

export default connect(
  (state) => ({
    myStore: state,
  }),
  {},
)(Settings);
