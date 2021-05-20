import { FLIP_FIRST_CARD } from './actionTypes';

export const flipFirstCard = (content) => ({
  type: FLIP_FIRST_CARD,
  payload: {
    id: content.id,
  },
});
export default null;
