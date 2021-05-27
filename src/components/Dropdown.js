import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useClickOutside from '../hooks/useClickOutside';

const DropdownWrap = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 200px;
  cursor: pointer;
  user-select: none;
  margin: 10px 0;
  box-sizing: border-box;
`;
const CurrentOptionWrap = styled.span`
  display: flex;
  padding: 0 10px;
  background-color: gray;
  height: 20px;
`;
const OptionsListWrap = styled.div`
  height: ${(props) => (props.listToggle ? props.optionsHeight : '0')};
  overflow: hidden;
  transition: height 0.4s;
  flex-flow: column;
  margin: 10px 8px;
`;
const OptionsElementWrap = styled.div`
height: 20px;
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
      <OptionsListWrap optionsHeight={`${menuElements.length * 20}px`} listToggle={listToggle}>
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
