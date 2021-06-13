import {
  LIST_PACKAGES,
  LIST_PACKAGES_ERROR,
  LIST_SUBSCRIPTIONS,
  LIST_SUBSCRIPTIONS_ERROR,
  CANCEL_SUBSCRIPTIONS,
  CANCEL_SUBSCRIPTIONS_ERROR
} from '../actions/packagesAction';

const INITIAL_STATE = {
  packages: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LIST_PACKAGES:
      return {
        ...state,
        packages: action.payload
      }
    case LIST_PACKAGES_ERROR:
      return {
        ...state,
        listPackagesError: action.payload
      }
    case LIST_SUBSCRIPTIONS:
      return {
        ...state,
        subscriptions: action.payload
      }
    case LIST_SUBSCRIPTIONS_ERROR:
      return {
        ...state,
        subscriptionsError: action.payload
      }

    case CANCEL_SUBSCRIPTIONS:
      return {
        ...state,
        deletedSub: action.payload
      }
    case CANCEL_SUBSCRIPTIONS_ERROR:
      return {
        ...state,
        deletedSubError: action.payload
      }
    default:
      return state;
  }
};
