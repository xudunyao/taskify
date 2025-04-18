
import { combineReducers } from '@reduxjs/toolkit';
import authentication from './authentication/authentication.slice';
import authors from './authors/authors.slice';

const rootReducer = combineReducers({
  authentication,
  authors,
});

export default rootReducer;