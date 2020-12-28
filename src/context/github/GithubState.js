//initial state and actions
import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from '../types';

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  //we call an action,get some data,then dispatch that action
  //to our Reducer, so we need useReducer hook

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Search Users

  //Get User

  //Get Repos

  //Clear Users

  //Set Loading

  //we are returning Provider so we can wrap all the app in  it
  //value contains all attributes that we wanna make accessible globally
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
