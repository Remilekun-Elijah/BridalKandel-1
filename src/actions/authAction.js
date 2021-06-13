import axios from 'axios';
import Cookies from 'universal-cookie'
import { setAuthorizationToken } from '../helper';


export const SET_CURRENT_USER = 'set_current_user';
export const SIGNUP_ERROR = 'signup_error';
export const LOGIN_ERROR = 'login_error';
export const AUTHENTICATED_USER = 'authenticated_user';
export const AUTHENTICATED_USER_ERROR = 'authenticated_user_error';
export const LOGOUT = 'logout';
export const LOGOUT_ERROR = 'logout_error';
export const UPDATE_USER = 'update_user';
export const UPDATE_USER_ERROR = 'update_user_error';
export const UPDATE_PASSWORD = 'update_password';
export const UPDATE_PASSWORD_ERROR = 'update_password_error';
export const RESET_PASSWORD = 'reset_password';
export const RESET_PASSWORD_ERROR = 'reset_password_error';
export const PASSWORD_RESET_LINK = 'password_reset_link';
export const PASSWORD_RESET_LINK_ERROR = 'password_reset_link_error';
export const VERIFY_PHONE = 'verify_phone';
export const VERIFY_PHONE_ERROR = 'verify_phone_error';
export const RESEND_VERIFICATION_CODE = 'resend_verification_code';
export const RESEND_VERIFICATION_CODE_ERROR = 'resend_verification_code_error';


const cookies = new Cookies()

const baseUrl = 'http://207.148.64.53/api'
/**
 * @description Request to the API to register a user
 *
 * @param  {object} userDetails the user deatils to be saved
 *
 * @return {object} dispatch object
 *
 */
export const registeUserAction = (userDetails) => (dispatch) =>
  axios.post(`${baseUrl}/register`, userDetails)
    .then(({ data }) => {
      dispatch({
        type: SET_CURRENT_USER,
        payload: data.data
      });
      return 'success'
    })
    .catch(({ response }) => {
      Promise.reject(dispatch({
        type: SIGNUP_ERROR,
        payload: Object.keys(response.data.errors).length !== 0 ? response.data.errors : response.data.message
      }))
    });


export const sanctumCookie = () =>
  axios.get('http://207.148.64.53/sanctum/csrf-cookie', {
    headers: { 'X-Requested-With': 'XMLHttpRequest' }
  })
    .catch(({ response }) => {
      return response
    });


/**
 * @description Request to the API to login a user
 *
 * @param  {object} userDetails the user deatils to be saved
 *
 * @return {object} dispatch object
 *
 */
export const loginAction = (userDetails) => async (dispatch) => {
  axios.defaults.withCredentials = true;
  await sanctumCookie()
  return axios.post(`${baseUrl}/login`, userDetails)
    .then(({ data }) => {
      const token = data.access_token
      cookies.set('token', token);
      setAuthorizationToken(token)
      dispatch({
        type: SET_CURRENT_USER,
        payload: data
      });
      return 'success'
    })
    .catch(({ response }) => {
      if(response.data.message === 'Unauthenticated.') {
        logoutAction()
      }
      Promise.reject(dispatch({
        type: LOGIN_ERROR,
        payload: Object.keys(response.data.errors).length !== 0 ? response.data.errors : response.data.message
      }))
    });
}
 

/**
* @description Request to the API to register a user
*
* @param  {object} userDetails the user deatils to be saved
*
* @return {object} dispatch object
*
*/
export const authenticatedUser = () => (dispatch) =>
  axios.get(`${baseUrl}/users/me`)
    .then(({ data }) => {
      dispatch({
        type: AUTHENTICATED_USER,
        payload: data.data
      });
      return 'success'
    })
    .catch(({ response }) => {
      if(response && response.data.message === 'Unauthenticated.') {
        logoutAction()
      }
      Promise.reject(dispatch({
        type: AUTHENTICATED_USER_ERROR,
        payload: response && response.data.message
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
export const updateUserAction = (userId, userDetails) => (dispatch) =>
  axios.put(`${baseUrl}/users/${userId}`, userDetails)
    .then(({ data }) => {
      dispatch({
        type: UPDATE_USER,
        payload: data.data
      });
      return 'success'
    })
    .catch(({ response }) => {
      if(response.data.message === 'Unauthenticated.') {
        logoutAction()
      }
      Promise.reject(dispatch({
        type: UPDATE_USER_ERROR,
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
export const updatePasswordAction = (userId, userDetails) => (dispatch) =>
  axios.put(`${baseUrl}/users/${userId}/password`, userDetails)
    .then(({ data }) => {
      dispatch({
        type: UPDATE_PASSWORD,
        payload: data.data
      });
      return 'success'
    })
    .catch(({ response }) => {
      if(response.data.message === 'Unauthenticated.') {
        logoutAction()
      }
      Promise.reject(dispatch({
        type: UPDATE_PASSWORD_ERROR,
        payload: Object.keys(response.data.errors).length !== 0 ? response.data.errors : response.data.message
      }))
    });


    
  /**
 * @description Request to the api to resend verification code
 *
 * @param  {number} userId the user id
 * 
 * @return {object} dispatch object
 *
 */
export const sendPasswordResetLink = (email) => (dispatch) =>
axios.post(`${baseUrl}/users/password/forgot`, email)
  .then(({data}) => {
    cookies.set('email', { email })
    dispatch({
      type: PASSWORD_RESET_LINK,
      payload: data.data
    });
    return 'success'
  })
  .catch(({response}) => {
    Promise.reject(dispatch({
          type: PASSWORD_RESET_LINK_ERROR,
          payload: response.data.message
      }))
  });

   /**
 * @description Request to the api to reset password
 *
 * @param  {object} userData the user data
 * 
 * @return {object} dispatch object
 *
 */
export const resetPasswordAction = (userData) => (dispatch) =>
axios.post(`${baseUrl}/users/password/reset`, userData)
  .then(({data}) => {
    dispatch({
      type: RESET_PASSWORD,
      payload: data.data
    });
    return 'success'
  })
  .catch(({response}) => {
    Promise.reject(dispatch({
          type: RESET_PASSWORD_ERROR,
          payload: response.data.message
      }))
  });


   /**
 * @description Request to the API to verify phone
 *
 * @param  {number} userId the user id
 *
 * @param  {object} details the user details to be saved
 * 
 * @return {object} dispatch object
 *
 */
export const phoneVerification = (details) => (dispatch) =>
axios.post(`${baseUrl}/users/phone/verify`, details)
  .then(({data}) => {
      dispatch({
        type: VERIFY_PHONE,
        payload: data.data
      });
      return 'success'
  })
  .catch(({response}) => {
    Promise.reject(dispatch({
        type: VERIFY_PHONE_ERROR,
        payload: Object.keys(response.data.errors).length !== 0 ? response.data.errors : response.data.message
    }))
});

 /**
 * @description Request to the api to resend verification code
 *
 * @param  {number} userId the user id
 * 
 * @return {object} dispatch object
 *
 */
export const resendVerificationAction = () => (dispatch) =>
axios.post(`${baseUrl}/users/phone/send`)
  .then(({data}) => {
    dispatch({
      type: RESEND_VERIFICATION_CODE,
      payload: data.data
    });
    return 'success'
  })
  .catch(({response}) => {
    Promise.reject(dispatch({
          type: RESEND_VERIFICATION_CODE_ERROR,
          payload: response.data.message
      }))
  });



/**
* @description Request to the API to logout a user
*
* @param  {object} userDetails the user deatils to be saved
*
* @return {object} dispatch object
*
*/
export const logoutAction = () =>
  axios.post(`${baseUrl}/logout`)
    .then(() => {
      cookies.remove('token');
      cookies.remove('email');
      setAuthorizationToken(false);
      window.location = '/';
    })
    .catch(() => {
      cookies.remove('token');
      cookies.remove('email');
      setAuthorizationToken(false);
      window.location = '/';
    });


 
