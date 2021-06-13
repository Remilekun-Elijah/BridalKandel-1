import {
    LIST_WASH_REQUEST,
    LIST_WASH_REQUEST_ERROR,
  } from '../actions/washAction';
  
  const INITIAL_STATE = {
    washRequested: []
  }
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case LIST_WASH_REQUEST:
        return {
            ...state,
            washRequested: action.payload
        }
      case LIST_WASH_REQUEST_ERROR:
        return {
            ...state,
            washRequestedError: action.payload
        }

      default:
        return state;
    }
  };
