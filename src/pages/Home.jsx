import React from "react";
import { useEffect } from "react";

import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

const Home = () => {
  useEffect(() => {
    document.title = "Welcome to GitHub Finder";
  }, []);

  return (
    <>
      <UserSearch />
      <UserResults />
    </>
  );
};

export default Home;
