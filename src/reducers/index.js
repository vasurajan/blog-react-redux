import { combineReducers } from 'redux';

import usersReducer from './usersReducer';
import postsReducer from './postsReducer';

export default combineReducers({
    posts: postsReducer,
    users: usersReducer
});
