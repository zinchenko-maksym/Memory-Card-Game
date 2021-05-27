import { createStore, combineReducers } from 'redux';
import cardsReducer from './cardsList';
import settingsReducer from './settings';

const rootReducer = combineReducers({
  cardsReducer,
  settingsReducer,
});

export default createStore(rootReducer);
