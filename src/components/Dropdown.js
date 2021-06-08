import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useClickOutside from '../hooks/useClickOutside';

const DropdownWrap = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  cursor: pointer;
  user-select: none;
  margin: 10px 0;
`;
const CurrentOptionWrap = styled.span`
  display: flex;
  padding: 5px 10px;
  background-color: ${(props) => props.theme.forest};
  border-radius: 10px 4px 0 0;

`;
const OptionsListWrap = styled.div`
  height: ${(props) => (props.listToggle ? props.optionsHeight : '0')};
  background-color: ${(props) => props.theme.marine};
  overflow: hidden;
  transition: height 0.4s;
  flex-flow: column;
`;
const OptionsElementWrap = styled.div`
  margin: 2px;
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
    onClickOutside();
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
      <OptionsListWrap optionsHeight={`${menuElements.length * 1.3}em`} listToggle={listToggle}>
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
