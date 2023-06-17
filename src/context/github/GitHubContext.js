import React from "react";
import { createContext, useReducer } from "react";
import gitHubReducer from "./GitHubReducer";

const GitHubContext = createContext();

export const GitHubProvider = ({ children }) => {
  //Initial state - Reducer
  const initialState = {
    users: [],
    user: {},
    repositories: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(gitHubReducer, initialState);

  //Search users from search component
  const searchUsers = async (searchText) => {
    setIsLoading();
    /* Create search params */
    const params = new URLSearchParams({
      q: searchText,
    });
    const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`);
    const data = res.ok ? await res.json() : null;
    if (data) {
      dispatch({ type: "GET_USERS", data: data.items });
    }
  };

  //Fetch single user / user details
  const getUser = async (username) => {
    setIsLoading();
    //Fetch user data
    const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${username}`);
    if (res.status === 404) {
      window.location("/notfound");
      return;
    }
    const data = res.ok ? await res.json() : null;
    if (data) {
      dispatch({ type: "GET_USER", data });
    }
  };

  //Get repositories from user
  const getUserRepositories = async (user) => {
    setIsLoading();
    const params = new URLSearchParams({
      sort: "created",
    });
    const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${user}/repos?${params}`);
    const data = res.ok ? await res.json() : null;
    if (data) {
      dispatch({ type: "GET_REPOSITORIES", data });
    }
  };

  /* Change isLoading state in reducer */
  const setIsLoading = () => {
    dispatch({ type: "SET_ISLOADING" });
  };

  /* Clear users from state */
  const clearUsers = () => {
    dispatch({ type: "CLEAR_USERS" });
  };

  return (
    <GitHubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        isLoading: state.isLoading,
        repositories: state.repositories,
        searchUsers,
        getUser,
        clearUsers,
        getUserRepositories,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export default GitHubContext;
