import React from "react";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <div>
      <h1 className="text-6xl mb-4">GitHub Finder</h1>
      <p className="mb-4 text-2xl font-light">A React app to search for GitHub profiles and see details.</p>
      <p className="text-lg text-gray-400">
        Version <span className="text-gray-500">1.0.0</span>
      </p>
    </div>
  );
};

export default About;
