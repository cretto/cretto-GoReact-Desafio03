import { combineReducers } from 'redux';

import users from './users';
import viewport from './viewport';

export default combineReducers({
  users,
  viewport,
});
