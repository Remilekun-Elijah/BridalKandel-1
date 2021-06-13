import {
  POST_QUESTION,
  POST_QUESTION_ERROR,
  GET_QUESTION,
  GET_QUESTION_ERROR
} from '../actions/faqAction';

const INITIAL_STATE = {
  washRequested: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_QUESTION:
      return {
        ...state,
        postedQuestion: action.payload
      }
    case POST_QUESTION_ERROR:
      return {
        ...state,
        postedQuestionError: action.payload
      }
    case GET_QUESTION:
      return {
        ...state,
        questions: action.payload
      }
    case GET_QUESTION_ERROR:
      return {
        ...state,
        questionsError: action.payload
      }
    default:
      return state;
  }
};
