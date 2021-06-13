 import axios from 'axios';
 
 /**
 * @description Validate input fields
 *
 * @param  {object} fields 
 *
 */
export const validateInputFields = (fields) => {
    const errorResponse = {}
    for (let property in fields) {
      if(fields[property] !== null && fields[property].toString().trim() === '') {
        errorResponse[property] = `${property} must not be empty`
      }
    }
    return errorResponse;
  };


  /**
* @description Validate input fields
*
* @param {object} fields
*
*/
export const returnBackendError = (errors) => {
  let errorResponse = {}
  for (let property in errors) {
    errorResponse[property] = errors[property][0]
  }
  return errorResponse;
};

/**
 * @description Request to the API to get user details
 *
 * @param  {string} token the token set in the header
 *
 * @return {object} dispatch object
 *
 */
export const setAuthorizationToken = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};


export const formatPrice = (price) => (
  price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
)