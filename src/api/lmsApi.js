import axiosClient from './axiosClient'

const login = (currentUser) => {
  return axiosClient.post('user/login', currentUser)
}

const register = (currentUser) => {
  return axiosClient.post('user/create', currentUser)
}

export { login, register }
