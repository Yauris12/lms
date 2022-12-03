import {
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  LOGOUT_USER,
  CLEAN_ALERT,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from './actions'

const reducer = (state, action) => {
  if (action.type === SETUP_USER_BEGIN) {
    return { ...state, isLoading: true }
  }
  if (action.type === SETUP_USER_SUCCESS) {
    console.log(action.payload)
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
    }
  }
  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: action.payload.msg,
    }
  }
  if (action.type === REGISTER_USER_SUCCESS) {
    console.log(action.payload)
    return {
      ...state,
      isLoading: false,
      alertText: action.payload.alertText,
      showAlert: true,
    }
  }
  if (action.type === REGISTER_USER_ERROR) {
    console.log(action.payload)
    return {
      ...state,
      isLoading: false,
    }
  }
  if (action.type === CLEAN_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertText: '',
    }
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...state,
      user: null,
    }
  }

  throw new Error(`no such action : ${action.type}`)
}
export default reducer
