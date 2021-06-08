import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Dropdown from './Dropdown';
import NewGameButton from './NewGameButton';

const SettingsWrap = styled.div`
  display: flex;
  flex-flow: column wrap;
  padding: 0;
  width: 90%;
  max-width: 300px;
  font-size: 1.2em;
  margin: 20px auto;
  @media only screen and (min-width: 1200px) {
    margin-top: 0;
    padding: 0 20px;
    background-color: ${(props) => props.theme.silver};
    height: 100%;
  }
  @media only screen and (min-width: 1920px) {
    border-color: red;
  }
`;
const SettingTitle = styled.div`
margin-top: 40px;
`;

function Settings({ myStore }) {
  const difficulties = myStore.settingsReducer.difficulties.map((dif) => `${dif} Cards`);
  const [difficultyIndex, setDifficultyIndex] = useState(0);
  const [themeIndex, setThemeIndex] = useState(0);
  return (
    <SettingsWrap>
      <SettingTitle>Difficulty(Cards):</SettingTitle>
      <Dropdown
        selectedIndex={difficultyIndex}
        changeSelectedItem={setDifficultyIndex}
        menuElements={difficulties}
      />
      <SettingTitle>Theme:</SettingTitle>
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
