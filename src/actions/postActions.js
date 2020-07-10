import axios from 'axios';

// make async request using redux-thunk
// halts the dispatch until the async requests done, then continue
export const getPosts = () => (dispatch, getState) => {
  dispatch(setPostsLoading());

  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      dispatch({
        type: 'GET_POSTS',
        payload: res.data,
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

export const deletePost = (id) => (dispatch, getState) => {
  axios
    .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(() => {
      dispatch({
        type: 'DELETE_POST',
        payload: id,
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

export const setPostsLoading = () => ({
  type: 'POSTS_LOADING',
});
