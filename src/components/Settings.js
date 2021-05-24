import React from 'react';
import styled from 'styled-components';
import Dropdown from './Dropdown';

const SettingsWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 220px;
`;

function Settings() {
  const difficulties = ['8 Cards', '12 Cards', '16 Cards', '32 Cards'];
  const themes = ['Figures', 'Numbers', 'Anime', 'Animals'];
  return (
    <SettingsWrap className="settings">
      Difficulty(Cards):
      <Dropdown menuElements={difficulties} />
      Theme:
      <Dropdown menuElements={themes} />
    </SettingsWrap>
  );
}

export default Settings;
