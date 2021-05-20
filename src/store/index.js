import { createStore, combineReducers } from 'redux';
import cardsList from './cardsList';

const rootReducer = combineReducers({
  cardsList,
});

export default createStore(rootReducer);
