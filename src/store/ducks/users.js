/**
 * Types
 */
export const Types = {
  ADD_REQUEST: 'users/ADD_REQUEST',
  ADD_SUCCESS: 'users/ADD_SUCCESS',
  REMOVE: 'users/REMOVE',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  list: [],
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_SUCCESS:
      return { ...state, list: [...state.list, action.payload.data] };
    case Types.REMOVE:
      return { ...state, list: state.list.filter(user => user.id !== action.payload.id) };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  addUserRequest: (user, location) => ({
    type: Types.ADD_REQUEST,
    payload: { user, location },
  }),

  addUserSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  removeUser: id => ({
    type: Types.REMOVE,
    payload: { id },
  }),
};
