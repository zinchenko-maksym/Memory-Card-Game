const initialState = {
  cardsList: [],
  flippedCards: {
    first: null,
    second: null,
  },
  vanishedCards: [],
  cardImagesList: [],
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FLIP_FIRST_CARD': {
      const { id } = action.payload;
      return {
        ...state,
        flippedCards: {
          first: id,
          second: null,
        },
      };
    }
    case 'FLIP_SECOND_CARD': {
      const { id } = action.payload;
      return {
        ...state,
        flippedCards: {
          first: state.flippedCards.first,
          second: id,
        },
      };
    }
    case 'VANISH_CARDS':
      return {
        ...state,
        vanishedCards: [
          ...state.vanishedCards, state.flippedCards.first, state.flippedCards.second,
        ],
        flippedCards: {
          first: null,
          second: null,
        },
      };
    case 'FLIP_FIRST_CARD_BACK':
      return {
        ...state,
        flippedCards: {
          ...state.flippedCards,
          first: null,
        },
      };
    case 'FLIP_SECOND_CARD_BACK':
      return {
        ...state,
        flippedCards: {
          ...state.flippedCards,
          second: null,
        },
      };
    case 'SET_CARDS_LIST':
      return {
        ...state,
        cardsList: action.payload.cards,
        flippedCards: {
          first: null,
          second: null,
        },
        vanishedCards: [],
        cardImagesList: [],
      };
    case 'ADD_CARD_IMAGE':
      return {
        ...state,
        cardImagesList: [
          ...state.cardImagesList,
          { imageName: action.payload.imageName, pairId: action.payload.pairId },
        ],
      };
    default:
      return state;
  }
};

export default cardsReducer;
