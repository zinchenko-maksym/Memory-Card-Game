const initialState = {
  cardsList: [
    {
      id: 0,
      color: 'blue',
      figure: 'circle',
      pairId: 2,
      status: 'default',
    },
    {
      id: 1,
      color: 'blue',
      figure: 'circle',
      pairId: 1,
      status: 'default',
    },
    {
      id: 2,
      color: 'blue',
      figure: 'circle',
      pairId: 2,
      status: 'default',
    },
    {
      id: 3,
      color: 'blue',
      figure: 'circle',
      pairId: 0,
      status: 'default',
    },
    {
      id: 4,
      color: 'blue',
      figure: 'circle',
      pairId: 1,
      status: 'default',
    },
    {
      id: 5,
      color: 'blue',
      figure: 'circle',
      pairId: 0,
      status: 'default',
    },
  ],
  flippedCards: {
    first: null,
    second: null,
  },
  vanishedCards: [],
  cardsOrder: [2, 5, 1, 0, 3, 4],
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
    case 'FLIP_CARDS_BACK':
      return {
        ...state,
        flippedCards: {
          first: null,
          second: null,
        },
      };
    default:
      return state;
  }
};

export default cardsReducer;
