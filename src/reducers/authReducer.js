import {
  SET_CURRENT_USER,
  SIGNUP_ERROR,
  LOGIN_ERROR,
  AUTHENTICATED_USER,
  AUTHENTICATED_USER_ERROR,
  UPDATE_USER,
  UPDATE_USER_ERROR,
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_ERROR,
  RESET_PASSWORD,
  RESET_PASSWORD_ERROR,
  PASSWORD_RESET_LINK,
  PASSWORD_RESET_LINK_ERROR,
  VERIFY_PHONE,
  VERIFY_PHONE_ERROR,
  RESEND_VERIFICATION_CODE,
  RESEND_VERIFICATION_CODE_ERROR,
} from '../actions/authAction';

const INITIAL_STATE = {
  userData: ""
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        userData: action.payload
      }
    case SIGNUP_ERROR:
      return {
        ...state,
        signupErrorResponse: action.payload
      }
    case LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload
      }
    case AUTHENTICATED_USER:
      return {
        ...state,
        authenticatedUser: action.payload
      }
    case AUTHENTICATED_USER_ERROR:
      return {
        ...state,
        authenticatedUserError: action.payload
      }
    case UPDATE_USER:
      return {
        ...state,
        updatedUser: action.payload
      }
    case UPDATE_USER_ERROR:
      return {
        ...state,
        updatedUserError: action.payload
      }
    case UPDATE_PASSWORD:
      return {
        ...state,
        updatedPassword: action.payload
      }
    case UPDATE_PASSWORD_ERROR:
      return {
        ...state,
        updatedPasswordError: action.payload
      }
    case RESET_PASSWORD:
      return {
        ...state,
        resetPassword: action.payload
      }
    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        resetPasswordError: action.payload
      }
    case PASSWORD_RESET_LINK:
      return {
        ...state,
        resetLink: action.payload
      }
    case PASSWORD_RESET_LINK_ERROR:
      return {
        ...state,
        resetLinkError: action.payload
      }
    case VERIFY_PHONE:
      return {
        ...state,
        verifyPhone: action.payload
      }
    case VERIFY_PHONE_ERROR:
      return {
        ...state,
        verifyPhoneError: action.payload
      }
    case RESEND_VERIFICATION_CODE:
      return {
        ...state,
        resendVerCode: action.payload
      }
    case RESEND_VERIFICATION_CODE_ERROR:
      return {
        ...state,
        resendVerCodeError: action.payload
      }
    default:
      return state;
  }
};
