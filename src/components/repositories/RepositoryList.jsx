import React from "react";
import PropTypes from "prop-types";

import RepositoryItem from "./RepositoryItem";

const RepositoryList = ({ repositories }) => {
  return (
    <div className=" rounded-lg shadow-lg card bg-base-100">
      <div className="card-body px-6">
        <h2 className="text-3xl my-4 font-bold card-title">Repositories</h2>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </div>
    </div>
  );
};

RepositoryList.propTypes = {
  repositories: PropTypes.array.isRequired,
};

export default RepositoryList;
