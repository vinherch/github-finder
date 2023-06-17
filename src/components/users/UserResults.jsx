import React, { useContext } from "react";

import LoadingSpinner from "../layout/LoadingSpinner";
import UserItem from "./UserItem";
import GitHubContext from "../../context/github/GitHubContext";

const UserResults = () => {
  const { users, isLoading } = useContext(GitHubContext);

  return !isLoading ? (
    <div className="user-results grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 overflow-auto pr-5 py-5">
      {users.map((u) => (
        <UserItem key={u.id} user={u} />
      ))}
    </div>
  ) : (
    <LoadingSpinner />
  );
};

export default UserResults;
