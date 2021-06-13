import axios from 'axios';


export const REGISTER_CAR = 'register_car';
export const REGISTER_CAR_ERROR = 'register_car_error';
export const UPDATE_CAR = 'update_car';
export const UPDATE_CAR_ERROR = 'update_car_error';
export const DELETE_CAR = 'delete_car';
export const DELETE_CAR_ERROR = 'delete_car_error';
export const LIST_USER_CAR = 'list_user_car';
export const LIST_USER_CAR_ERROR = 'list_user_car_error';
export const ACCEPT_CARWASH_REQUEST = 'accept_carwash_request';
export const ACCEPT_CARWASH_REQUEST_ERROR = 'accept_carwash_request_error';
export const DENY_CARWASH_REQUEST = 'deny_carwash_request';
export const DENY_CARWASH_REQUEST_ERROR = 'deny_carwash_request_error';
export const LIST_WASHER_REQUEST = 'list_washer_request';
export const LIST_WASHER_REQUEST_ERROR = 'list_washer_request_error';
export const FINISH_CAR = 'finish_car';
export const FINISH_CAR_ERROR = 'finish_car_error';
export const UNFINISH_CAR = 'unfinish_car';
export const UNFINISH_CAR_ERROR = 'unfinish_car_error';

const baseUrl = 'http://207.148.64.53/api'

/**
 * @description Request to the API to register a car
 *
 * @param  {object} carDetails the user deatils to be saved
 *
 * @return {object} dispatch object
 *
 */
export const registerCar = (userId, carDetails) => (dispatch) =>
  axios.post(`${baseUrl}/users/${userId}/cars`, carDetails)
    .then(({ data }) => {
      dispatch({
        type: REGISTER_CAR,
        payload: data.data
      });
      return 'success'
    })
    .catch(({ response }) => {
      Promise.reject(dispatch({
        type: REGISTER_CAR_ERROR,
        payload: Object.keys(response.data.errors).length !== 0 ? response.data.errors : response.data.message
      }))
    });

/**
 * @description Request to the API to update a car
 *
 * @param  {object} carId the car id to be updated
 * 
 * @param  {object} carDetails the car deatils to be updated
 *
 * @return {object} dispatch object
 *
 */
export const updateCarAction = (carId, carDetails) => (dispatch) =>
  axios.put(`${baseUrl}/cars/${carId}`, carDetails)
    .then(({ data }) => {
      dispatch({
        type: UPDATE_CAR,
        payload: data
      });
      return 'success'
    })
    .catch(({ response }) => {
      Promise.reject(dispatch({
        type: UPDATE_CAR_ERROR,
        payload: Object.keys(response.data.errors).length !== 0 ? response.data.errors : response.data.message
      }))
    });

/**
* @description Request to the API to delete a car
*
* @param  {object} carId the car id to be deleted
*
* @return {object} dispatch object
*
*/
export const deleteCarAction = (carId) => (dispatch) =>
  axios.delete(`${baseUrl}/cars/${carId}`)
    .then(({ data }) => {
      dispatch({
        type: DELETE_CAR,
        payload: data.data
      });
      return 'success'
    })
    .catch(({ response }) => {
      Promise.reject(dispatch({
        type: DELETE_CAR_ERROR,
        payload: Object.keys(response.data.errors).length !== 0 ? response.data.errors : response.data.message
      }))
    });

/**
* @description Request to the API to register a user
*
* @param  {object} userDetails the user deatils to be saved
*
* @return {object} dispatch object
*
*/
export const listUserCarAction = (userId) => (dispatch) =>
  axios.get(`${baseUrl}/users/${userId}/cars`)
    .then(({ data }) => {
      dispatch({
        type: LIST_USER_CAR,
        payload: data
      });
      return 'success'
    })
    .catch(({ response }) => {
      Promise.reject(dispatch({
        type: LIST_USER_CAR_ERROR,
        payload: Object.keys(response.data.errors).length !== 0 ? response.data.errors : response.data.message
      }))
    });

/**
 * @description Request to the API to accept car wash request
 *
 * @param  {object} carDetails the user deatils to be saved
 *
 * @return {object} dispatch object
 *
 */
export const acceptCarWashAction = (washId, requestId) => (dispatch) =>
  axios.post(`${baseUrl}/washes/${washId}/requests/${requestId}`, dispatch)
    .then(({ data }) => {
      dispatch({
        type: ACCEPT_CARWASH_REQUEST,
        payload: data.data
      });
      return 'success'
    })
    .catch(({ response }) => {
      Promise.reject(dispatch({
        type: ACCEPT_CARWASH_REQUEST_ERROR,
        payload: response.data.message
      }))
    });


/**
* @description Request to the API to deny car wash request
*
* @param  {object} carDetails the user deatils to be saved
*
* @return {object} dispatch object
*
*/
export const denyWashAction = (washId, requestId, message) => (dispatch) =>
  axios.delete(`${baseUrl}/washes/${washId}/requests/${requestId}?message=${message}`, dispatch)
    .then(({ data }) => {
      dispatch({
        type: DENY_CARWASH_REQUEST,
        payload: data.data
      });
      return 'success'
    })
    .catch(({ response }) => {
      Promise.reject(dispatch({
        type: DENY_CARWASH_REQUEST_ERROR,
        payload: response.data.message
      }))
    });


/**
* @description Request to the API to register a user
*
* @param  {object} userDetails the user deatils to be saved
*
* @return {object} dispatch object
*
*/
export const washerRequestAction = (pageNumber, userId, status) => (dispatch) =>
  axios.get(`${baseUrl}/users/${userId}/requests?page=${pageNumber}&${status ? `filter[status]=${status}` : ''}`)
    .then(({ data }) => {
      dispatch({
        type: LIST_WASHER_REQUEST,
        payload: data
      });
      return 'success'
    })
    .catch(({ response }) => {
      Promise.reject(dispatch({
        type: LIST_WASHER_REQUEST_ERROR,
        payload: response.data.message
      }))
    });

/**
 * @description Request to the API to finish car wash
 *
 * @param  {object} washId the wash id
 *
 * @return {object} dispatch object
 *
 */
export const finishCarAction = (washId) => (dispatch) =>
  axios.post(`${baseUrl}/washes/${washId}/finish`)
    .then(({ data }) => {
      dispatch({
        type: FINISH_CAR,
        payload: data.data
      });
      return 'success'
    })
    .catch(({ response }) => {
      Promise.reject(dispatch({
        type: FINISH_CAR_ERROR,
        payload: response.data.message
      }))
    });

/**
 * @description Request to the API to finish car wash
 *
 * @param  {object} washId the wash id
 *
 * @return {object} dispatch object
 *
 */
export const unFinishCarAction = (washId) => (dispatch) =>
  axios.delete(`${baseUrl}/washes/${washId}/finish`)
    .then(({ data }) => {
      dispatch({
        type: UNFINISH_CAR,
        payload: data.data
      });
      return 'success'
    })
    .catch(({ response }) => {
      Promise.reject(dispatch({
        type: UNFINISH_CAR_ERROR,
        payload: response.data.message
      }))
    });