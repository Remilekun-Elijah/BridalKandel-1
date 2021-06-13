import axios from 'axios';

export const FETCH_POST = 'fetch_post';

export const fetchPost = () => async dispatch => {

  const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1');

  dispatch({
    type: FETCH_POST,
    payload: res.data
  });
};
