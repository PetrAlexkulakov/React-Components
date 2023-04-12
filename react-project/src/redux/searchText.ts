const defaultState = {
  search: '',
};

const CHANGE_SEARCH = 'CHANGE_SEARCH';

export const searchReducer = (state = defaultState, action: { type: string; payload: string }) => {
  switch (action.type) {
    case CHANGE_SEARCH:
      return { ...state, search: action.payload };
    default:
      return state;
  }
};

export const changeSearchAction = (payload: string) => ({ type: CHANGE_SEARCH, payload });
