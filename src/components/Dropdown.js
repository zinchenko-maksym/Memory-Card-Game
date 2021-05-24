/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useClickOutside from '../hooks/useClickOutside';

const DropdownWrap = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  width: 200px;
  font-size: 1em;
  position: relative;
  cursor: pointer;
  user-select: none;
`;
const CurrentOptionWrap = styled.span`
  display: flex;
  padding-left: 10px;
  background-color: gray;
`;
const OptionsListWrap = styled.div`
  display: ${(props) => (props.listToggle ? 'flex' : 'none')};
  flex-flow: column;
  position: absolute;
  margin: 20px 8px;
`;
const OptionsElementWrap = styled.div`
text-align: left;
`;
const OptionArrowDownWrap = styled.div`
  display: ${(props) => (props.listToggle ? 'none' : 'flex')};
`;
const OptionArrowUpWrap = styled.div`
  display: ${(props) => (props.listToggle ? 'flex' : 'none')};
`;

function Dropdown({ menuElements, selectedIndex, changeSelectedItem }) {
  const [currentOption, setCurrentOption] = useState(menuElements[selectedIndex]);
  const [listToggle, setListToggle] = useState(false);
  const clickRef = React.useRef();

  function onClickOutside() {
    if (listToggle) {
      setListToggle(false);
    }
  }

  useClickOutside(clickRef, onClickOutside);
  function switchListToggle() {
    setListToggle(!listToggle);
  }
  function onChangeSelectedItem(item, intemIndex) {
    changeSelectedItem(intemIndex);
    setCurrentOption(item);
  }

  const mapMenuElements = menuElements.map(
    (item, index) => (
      <OptionsElementWrap onClick={() => onChangeSelectedItem(item, index)} key={item}>
        {item}
      </OptionsElementWrap>
    ),
  );
  return (
    <DropdownWrap ref={clickRef} className="dropdown">
      <CurrentOptionWrap onClick={switchListToggle}>
        {currentOption}
        <OptionArrowDownWrap listToggle={listToggle}> &#x25BC; </OptionArrowDownWrap>
        <OptionArrowUpWrap listToggle={listToggle}> &#x25B2; </OptionArrowUpWrap>
      </CurrentOptionWrap>
      <OptionsListWrap listToggle={listToggle}>
        {mapMenuElements}
      </OptionsListWrap>
    </DropdownWrap>
  );
}
Dropdown.propTypes = {
  menuElements: PropTypes.arrayOf(PropTypes.string),
  selectedIndex: PropTypes.number,
  changeSelectedItem: PropTypes.func,
};

Dropdown.defaultProps = {
  menuElements: [],
  selectedIndex: 0,
  changeSelectedItem: () => {},
};

export default Dropdown;
