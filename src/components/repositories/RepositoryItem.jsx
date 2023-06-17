import React from "react";
import PropTypes from "prop-types";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

const RepositoryItem = ({ repository }) => {
  const { name, description, html_url, forks, open_issues, watchers_count, stargazers_count } = repository;

  return (
    <div className="mb-2 rounded-md card bg-neutral text-neutral-content hover:bg-gray-800">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <a href={html_url}>
            <FaLink className="inline mr-1" />
            {name}
          </a>
        </h3>
        <p className="mb-3">{description}</p>
        <div>
          <div className="mr-2 badge badge-info badge-lg">
            <FaEye className="mr-2 inline" /> {watchers_count}
          </div>
          <div className="mr-2 badge badge-success badge-lg">
            <FaStar className="mr-2 inline" /> {stargazers_count}
          </div>
          <div className="mr-2 badge badge-error badge-lg">
            <FaInfo className="mr-2 inline" /> {open_issues}
          </div>
          <div className="mr-2 badge badge-warning badge-lg">
            <FaUtensils className="mr-2 inline" /> {forks}
          </div>
        </div>
      </div>
    </div>
  );
};

RepositoryItem.propTypes = {
  repository: PropTypes.object.isRequired,
};

export default RepositoryItem;
