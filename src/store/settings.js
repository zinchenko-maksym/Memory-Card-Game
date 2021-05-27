const initialState = {
  difficultyIndex: 0,
  themeIndex: 0,
  themes: ['Figures', 'Numbers', 'Anime', 'Animals'],
  difficulties: [10, 12, 14, 16, 20],
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_SETTINGS': {
      return {
        ...state,
        difficultyIndex: action.difficultyIndex,
        themeIndex: action.themeIndex,
      };
    }
    default:
      return state;
  }
};

export default settingsReducer;
