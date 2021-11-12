import jsonPlaceholder from "../apis/jsonPlaceholder";

// How to create action creators that needs async await
// fetchPosts returns a function which is async

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({
    type: "FETCH_POSTS",
    payload: response.data,
  });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({
    type: "FETCH_USER",
    payload: response.data,
  });
};
