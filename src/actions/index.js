import {
  FLIP_FIRST_CARD, FLIP_SECOND_CARD, VANISH_CARDS, FLIP_CARDS_BACK,
} from './actionTypes';

export const flipFirstCard = (content) => ({
  type: FLIP_FIRST_CARD,
  payload: {
    ...content,
    id: content.id,
  },
});
export const flipSecondCard = (content) => ({
  type: FLIP_SECOND_CARD,
  payload: {
    ...content,
    id: content.id,
  },
});
export const vanishCards = (content) => ({
  type: VANISH_CARDS,
  payload: {
    ...content,
  },
});
export const flipCardsBack = (content) => ({
  type: FLIP_CARDS_BACK,
  payload: {
    ...content,
  },
});
export default null;
