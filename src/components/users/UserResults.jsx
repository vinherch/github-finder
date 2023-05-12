import React, { useContext } from "react";
import { useEffect } from "react";

import LoadingSpinner from "../layout/LoadingSpinner";
import UserItem from "./UserItem";
import GitHubContext from "../../context/github/GitHubContext";

const UserResults = () => {
  const { users, isLoading, fetchUsers } = useContext(GitHubContext);

  useEffect(() => {}, []);

  return !isLoading ? (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users.map((u) => (
        <UserItem key={u.id} user={u} />
      ))}
    </div>
  ) : (
    <LoadingSpinner />
  );
};

export default UserResults;
