const initialState = [
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
];

const cardsList = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOARD':
      return [
        ...state,
        action.payload,
      ];
    case 'ADD_BOARDS_ARRAY':
      return [
        ...state,
        ...action.payload,
      ];
    case 'DELETE_BOARD':
      return [...state];

    default:
      return state;
  }
};

export default cardsList;
