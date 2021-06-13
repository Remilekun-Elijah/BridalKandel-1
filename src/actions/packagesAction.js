import axios from 'axios';

export const LIST_PACKAGES = 'list_packages';
export const LIST_PACKAGES_ERROR = 'list_packages_error';
export const LIST_SUBSCRIPTIONS = 'list_subscriptions';
export const LIST_SUBSCRIPTIONS_ERROR = 'list_subscriptions_error';
export const CANCEL_SUBSCRIPTIONS = 'cancel_subscriptions';
export const CANCEL_SUBSCRIPTIONS_ERROR = 'cancel_subscriptions_error'

const baseUrl = 'http://207.148.64.53/api'
/**
 * @description Request to the API to register a user
 *
 * @param  {object} userDetails the user deatils to be saved
 *
 * @return {object} dispatch object
 *
 */
export const listPackagesAction = () => (dispatch) =>
  axios.get(`${baseUrl}/packages`)
    .then(({data}) => {
      dispatch({
        type: LIST_PACKAGES,
        payload: data.data
      });
      return 'success'
    })
    .catch(({response}) => {
        Promise.reject(dispatch({
            type: LIST_PACKAGES_ERROR,
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
export const listSubscriptionsAction = (userId) => (dispatch) =>
  axios.get(`${baseUrl}/users/${userId}/subscriptions`)
    .then(({data}) => {
      dispatch({
        type: LIST_SUBSCRIPTIONS,
        payload: data.data
      });
      return 'success'
    })
    .catch(({response}) => {
        Promise.reject(dispatch({
            type: LIST_SUBSCRIPTIONS_ERROR,
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
export const cancelSubscriptionsAction = (subscriptionId) => (dispatch) =>
  axios.delete(`${baseUrl}/subscriptions/${subscriptionId}`)
    .then(({data}) => {
      dispatch({
        type: CANCEL_SUBSCRIPTIONS,
        payload: data.data
      });
      return 'success'
    })
    .catch(({response}) => {
        Promise.reject(dispatch({
            type: CANCEL_SUBSCRIPTIONS_ERROR,
            payload: response.data.message
        }))
    });

