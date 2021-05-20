const initialState = {
  cardsList: [
    {
      id: 0,
      color: 'blue',
      figure: 'circle',
      pairId: 0,
      status: 'default',
    },
    {
      id: 1,
      color: 'blue',
      figure: 'circle',
      pairId: 0,
      status: 'default',
    },
    {
      id: 2,
      color: 'blue',
      figure: 'circle',
      pairId: 0,
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
      pairId: 0,
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
      console.log(21);
      const { id } = action.payload;
      return {
        ...state,
        flippedCards: {
          first: id,
          second: null,
        },
      };
    }
    case 'ADD_BOARDS_ARRAY':
      return [
        ...state,
        ...action.payload,
      ];
    case 'DELETE_BOARD':
      return [...state];

    default:
      console.log(2);
      return state;
  }
};

export default cardsReducer;
