import React from "react";
import { createContext, useReducer } from "react";
import gitHubReducer from "./GitHubReducer";

const GitHubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const GitHubProvider = ({ children }) => {
  const initialState = {
    users: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(gitHubReducer, initialState);

  const fetchUsers = async () => {
    const res = await fetch(`${GITHUB_URL}/users`);
    const data = res.ok ? await res.json() : null;
    if (data) {
      dispatch({ type: "GET_USERS", payload: data });
    }
  };

  return <GitHubContext.Provider value={{ users: state.users, isLoading: state.isLoading, fetchUsers }}>{children}</GitHubContext.Provider>;
};

export default GitHubContext;
