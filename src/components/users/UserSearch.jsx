import React from "react";
import { useState, useContext } from "react";
import GitHubContext from "../../context/github/GitHubContext";
import { searchUsers } from "../../context/github/GitHubActions";
import AlertContext from "../../context/alert/AlertContext";

const UserSearch = () => {
  //State text input
  const [text, setText] = useState("");
  //GitHub context
  const { users, clearUsers, setIsLoading, dispatch } = useContext(GitHubContext);
  //Alert context
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    /* Check text input */
    if (text === "") {
      setAlert("Please enter something", "error");
      return;
    }
    setIsLoading();
    const data = await searchUsers(text);
    if (data) {
      dispatch({ type: "GET_USERS", data: data.items });
    }
    /* Reset text state */
    setText("");
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between md:mb-12">
      <div className="flex-1">
        <form className="form-control" onSubmit={handleSubmit}>
          <div className="relative ">
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
        <div className="flex justify-end md:justify-start sm:justify-center">
          <button className="btn btn-ghost btn-lg" onClick={clearUsers}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
