import axiosClient from './axiosClient'

const login = (currentUser) => {
  return axiosClient.post('user/login', currentUser)
}

const register = (currentUser) => {
  return axiosClient.post('user/create', currentUser)
}

const pagarCurso = (currentUser) => {
  return axiosClient.post('curso/comprar', currentUser)
}

export { login, register, pagarCurso }
