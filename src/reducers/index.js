import { combineReducers } from 'redux';

import postReducer from './postReducer';

// combining all reducers
const rootReducer = combineReducers({
  post: postReducer,
});

export default rootReducer;
