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

  //Clear users from state
  const clearUsers = () => {
    dispatch({ type: "CLEAR_USERS" });
  };

  //Set isLoading to true
  const setIsLoading = () => {
    dispatch({ type: "SET_ISLOADING" });
  };

  return (
    <GitHubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        isLoading: state.isLoading,
        repositories: state.repositories,
        dispatch,
        clearUsers,
        setIsLoading,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export default GitHubContext;
