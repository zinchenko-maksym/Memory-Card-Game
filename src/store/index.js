import { createStore, combineReducers } from 'redux';
import cardsReducer from './cardsList';

const rootReducer = combineReducers({
  cardsReducer,
});

export default createStore(rootReducer);
