const gitHubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.data, isLoading: false };
    case "GET_USER":
      return { ...state, user: action.data, isLoading: false };
    case "GET_REPOSITORIES":
      return { ...state, repositories: action.data, isLoading: false };
    case "SET_ISLOADING":
      return { ...state, isLoading: true };
    case "CLEAR_USERS":
      return { ...state, users: [] };
    default:
      return state;
  }
};

export default gitHubReducer;
