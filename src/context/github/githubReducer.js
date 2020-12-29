import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        //setting the users from the data we got from GithubState
        users: action.payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
    case SET_LOADING:
      return {
        //state is immutable so we need to return it with ... ,and set loading to true
        ...state,
        loading: true,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
