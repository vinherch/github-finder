import React from "react";
import { useState, useContext } from "react";
import GitHubContext from "../../context/github/GitHubContext";
import AlertContext from "../../context/alert/AlertContext";

const UserSearch = () => {
  /* State text input */
  const [text, setText] = useState("");

  /* GitHub context */
  const { users, searchUsers, clearUsers } = useContext(GitHubContext);

  /* Alert context */
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /* Check input text */
    if (text === "") {
      setAlert("Please enter something", "error");
      return;
    }
    searchUsers(text);
    /* Reset text state */
    setText("");
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8 mb-9 ">
      <div>
        <form className="form-control" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              value={text}
              onChange={handleChange}
              type="text"
              placeholder="Search"
              className="w-full pr-40 bg-gray-200 input input-lg text-black"
            />
            <button type="submit" className="btn absolute top-0 right-0 btn-lg rounded-l-none ">
              Find
            </button>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div className="flex md:justify-start sm:justify-center">
          <button className="btn btn-ghost btn-lg" onClick={clearUsers}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
