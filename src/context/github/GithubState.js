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
  const searchUsers = async (text) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    //payload is the data we need to dispatch
    //and in Reducer we are setting it to users

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };
  //Get User

  const getUser = async (username) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };
  //Get Repos

  const getUserRepos = async (username) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    // setRepos(res.data);
    // setLoading(false);
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  //Clear Users
  const clearUsers = () => {
    dispatch({
      type: CLEAR_USERS,
    });
  };
  //Set Loading

  const setLoading = () => dispatch({ type: SET_LOADING });

  //we are returning Provider so we can wrap all the app in  it
  //value contains all attributes that we wanna make accessible globally
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
