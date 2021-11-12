const userReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      return [...state, {users: action.payload}];
    default:
      return state;
  }
};

export default userReducer;