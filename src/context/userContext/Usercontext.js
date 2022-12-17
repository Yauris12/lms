import React, { useReducer, useContext, useEffect } from 'react'
import reducer from './UserReducer'
import axios from 'axios'
import { login, register } from '../../api/lmsApi'
import {
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  LOGOUT_USER,
  CLEAN_ALERT,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from './actions'

const addUserToLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}

const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user')
}

const user1 = localStorage.getItem('user')

const UserContext = React.createContext()
const initialState = {
  isLoading: false,
  userLoading: true,
  user: user1 ? JSON.parse(user1) : null,
  alertText: '',
  showAlert: false,
}

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const loginUser = async (currentUser) => {
    dispatch({ type: SETUP_USER_BEGIN })

    try {
      const data = await login(currentUser)

      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user: data[0] },
      })
      addUserToLocalStorage(data[0])
    } catch (error) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }
  const registerUser = async (currentUser) => {
    dispatch({ type: SETUP_USER_BEGIN })

    try {
      const data = await register(currentUser)

      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { alertText: data },
      })
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error },
      })
    }
    clearAlert()
  }
  const logoutUser = async () => {
    removeUserFromLocalStorage()

    dispatch({ type: LOGOUT_USER })
  }
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAN_ALERT })
    }, 3000)
  }
  useEffect(() => {}, [user1])

  return (
    <UserContext.Provider
      value={{ ...state, loginUser, registerUser, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  )
}

const useUserContext = () => {
  return useContext(UserContext)
}
export { UserProvider, initialState, useUserContext }
