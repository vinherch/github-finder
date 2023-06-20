//Search for a user -  Search Component Text Input
export const searchUsers = async (searchText) => {
  /* Create search params */
  const params = new URLSearchParams({
    q: searchText,
  });
  const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`);
  return res.ok ? await res.json() : null;
};

//Fetch a single user
const getUser = async (username) => {
  return await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${username}`);
};

//Get repositories from a user
const getUserRepositories = async (user) => {
  const params = new URLSearchParams({
    sort: "created",
  });
  return await fetch(`${process.env.REACT_APP_GITHUB_URL}/users/${user}/repos?${params}`);
};

export const getUserAndRepositories = async (user) => {
  const [userdata, repositories] = await Promise.all([getUser(user), getUserRepositories(user)]);
  return userdata.ok && repositories.ok && { user: await userdata.json(), repositories: await repositories.json() };
};
