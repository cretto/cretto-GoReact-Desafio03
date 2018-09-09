/**
 * Types
 */
export const Types = {
  SET_LONG_LAT: 'viewport/SET_LONG_LAT',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  latitude: -23.5439948,
  longitude: -46.6065452,
};

export default function viewport(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_LONG_LAT:
      return { ...state, latitude: action.payload.latitude, longitude: action.payload.longitude };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  setLongitudeLatitude: (longitude, latitude) => ({
    type: Types.SET_LONG_LAT,
    payload: { longitude, latitude },
  }),
};
