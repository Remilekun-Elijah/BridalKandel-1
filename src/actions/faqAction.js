import axios from 'axios';

export const POST_QUESTION = 'post_question';
export const POST_QUESTION_ERROR = 'post_question_error';
export const GET_QUESTION = 'get_question';
export const GET_QUESTION_ERROR = 'get_question_error';


const baseUrl = 'http://207.148.64.53/api'
/**
* @description Request to the API to ask question
*
* @param  {object} questionData the question data
*
* @return {object} dispatch object
*
*/
export const postQuestionAction = (questionData) => (dispatch) =>
  axios.post(`${baseUrl}/questions`, questionData)
    .then(({ data }) => {
      dispatch({
        type: POST_QUESTION,
        payload: data.message
      });
      return 'success'
    })
    .catch(({ response }) => {
      Promise.reject(dispatch({
        type: POST_QUESTION_ERROR,
        payload: response.data.message
      }))
    });


/**
* @description Request to the API to list car washes a user
*
* @param  {object} userDetails the user deatils to be saved
*
* @return {object} dispatch object
*
*/
export const getQuestionAction = (questionData) => (dispatch) =>
  axios.get(`${baseUrl}/faqs`, questionData)
    .then(({ data }) => {
      dispatch({
        type: GET_QUESTION,
        payload: data.data
      });
      return 'success'
    })
    .catch(({ response }) => {
      Promise.reject(dispatch({
        type: GET_QUESTION_ERROR,
        payload: response.data.message
      }))
    });


