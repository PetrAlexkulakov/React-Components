const defaultState = {
  searchResult: {},
};

const CHANGE_SEARCH_RESULT = 'CHANGE_SEARCH_RESULT';

export const searchResultReducer = (
  state = defaultState,
  action: { type: string; payload: object }
) => {
  switch (action.type) {
    case CHANGE_SEARCH_RESULT:
      return { ...state, searchResult: action.payload };
    default:
      return state;
  }
};

export const changeSearchResultAction = (payload: object) => ({
  type: CHANGE_SEARCH_RESULT,
  payload,
});
