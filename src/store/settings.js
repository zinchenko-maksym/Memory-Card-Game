const initialState = {
  difficultyIndex: 0,
  themeIndex: 0,
  themes: ['Figures', 'Anime', 'Animals'],
  difficulties: [16, 24, 36, 50, 68],
  difficultiesTrue: {
    easy: 20,
    medium: 30,
    hard: 40,
    expert: 50,
  },
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_SETTINGS': {
      return {
        ...state,
        difficultyIndex: action.payload.difficultyIndex,
        themeIndex: action.payload.themeIndex,
      };
    }
    default:
      return state;
  }
};

export default settingsReducer;
