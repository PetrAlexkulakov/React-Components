import { Post } from '../interfaces/FormValues';

const defaultState = {
  allForms: [],
};

const CHANGE_FORMS = 'CHANGE_FORMS';

export const allFormsReducer = (
  state: { allForms: Post[] } = defaultState,
  action: { type: string; payload: Post }
) => {
  switch (action.type) {
    case CHANGE_FORMS:
      return { ...state, allForms: [...state.allForms, action.payload] };
    default:
      return state;
  }
};

export const changeFormsAction = (payload: Post) => ({
  type: CHANGE_FORMS,
  payload,
});
