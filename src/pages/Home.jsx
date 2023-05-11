import React from "react";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Welcome to GitHub Finder";
  }, []);

  return (
    <div>
      <h1 className="text-6xl">Welcome</h1>
    </div>
  );
};

export default Home;
