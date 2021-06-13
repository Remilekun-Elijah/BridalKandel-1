import {
  REGISTER_CAR,
  REGISTER_CAR_ERROR,
  UPDATE_CAR,
  UPDATE_CAR_ERROR,
  DELETE_CAR,
  DELETE_CAR_ERROR,
  LIST_USER_CAR,
  LIST_USER_CAR_ERROR,
  ACCEPT_CARWASH_REQUEST,
  ACCEPT_CARWASH_REQUEST_ERROR,
  DENY_CARWASH_REQUEST,
  DENY_CARWASH_REQUEST_ERROR,
  LIST_WASHER_REQUEST,
  LIST_WASHER_REQUEST_ERROR,
  FINISH_CAR,
  FINISH_CAR_ERROR,
  UNFINISH_CAR,
  UNFINISH_CAR_ERROR
} from '../actions/carAction';

const INITIAL_STATE = {
  userCars: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_CAR:
      return {
        ...state,
        registeredCar: action.payload
      }
    case REGISTER_CAR_ERROR:
      return {
        ...state,
        registeredCarError: action.payload
      }
    case UPDATE_CAR:
      return {
        ...state,
        updatedCar: action.payload
      }
    case UPDATE_CAR_ERROR:
      return {
        ...state,
        updatedCarError: action.payload
      }
    case DELETE_CAR:
      return {
        ...state,
        deletedCar: action.payload
      }
    case DELETE_CAR_ERROR:
      return {
        ...state,
        deletedCarError: action.payload
      }
    case LIST_USER_CAR:
      return {
        ...state,
        userCars: action.payload
      }
    case LIST_USER_CAR_ERROR:
      return {
        ...state,
        userCarsError: action.payload
      }
    case ACCEPT_CARWASH_REQUEST:
      return {
        ...state,
        acceptRequest: action.payload
      }
    case ACCEPT_CARWASH_REQUEST_ERROR:
      return {
        ...state,
        acceptRequestError: action.payload
      }
    case DENY_CARWASH_REQUEST:
      return {
        ...state,
        denyRequest: action.payload
      }
    case DENY_CARWASH_REQUEST_ERROR:
      return {
        ...state,
        denyRequestError: action.payload
      }
    case LIST_WASHER_REQUEST:
      return {
        ...state,
        washerRequest: action.payload
      }
    case LIST_WASHER_REQUEST_ERROR:
      return {
        ...state,
        washerRequestError: action.payload
      }
    case FINISH_CAR:
      return {
        ...state,
        finishWash: action.payload
      }
    case FINISH_CAR_ERROR:
      return {
        ...state,
        finishWashError: action.payload
      }
    case UNFINISH_CAR:
      return {
        ...state,
        unFinishWash: action.payload
      }
    case UNFINISH_CAR_ERROR:
      return {
        ...state,
        unFinishWashError: action.payload
      }
    default:
      return state;
  }
};
