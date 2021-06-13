import axios from 'axios';



export const LIST_WASH_REQUEST = 'list_wash_request';
export const LIST_WASH_REQUEST_ERROR = 'list_wash_request_error';





const baseUrl = 'http://207.148.64.53/api'
/**
* @description Request to the API to list car washes a user
*
* @param  {object} userDetails the user deatils to be saved
*
* @return {object} dispatch object
*
*/
export const listWashRequestAction = (pageNumber, userId, isWashed, status) => (dispatch) =>
  axios.get(`${baseUrl}/users/${userId}/washes?page=${pageNumber}&${isWashed ? `filter[is_washed]=${isWashed}` : ''}${status ? `filter[status]=${status}` : ''}`)
    .then(({ data }) => {
      dispatch({
        type: LIST_WASH_REQUEST,
        payload: data
      });
      return 'success'
    })
    .catch(({ response }) => {
      Promise.reject(dispatch({
        type: LIST_WASH_REQUEST_ERROR,
        payload: Object.keys(response.data.errors).length !== 0 ? response.data.errors : response.data.message
      }))
    });


