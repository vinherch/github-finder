import React from "react";
import { useEffect, useState } from "react";

import LoadingSpinner from "../layout/LoadingSpinner";
import UserItem from "./UserItem";

const UserResults = () => {
  useEffect(() => {
    fetchUsers();
  }, []);

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUsers = async () => {
    const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`);
    const data = res.ok ? await res.json() : null;
    if (data) {
      setUsers(data);
      setIsLoading(false);
    }
  };

  return !isLoading ? (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md_grid-cols-2">
      {users.map((u) => (
        <UserItem key={u.id} user={u} />
      ))}
    </div>
  ) : (
    <LoadingSpinner />
  );
};

export default UserResults;
