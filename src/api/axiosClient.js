import axios from 'axios'

const axiosClient = axios.create({
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'content-type': 'application/x-www-form-urlencoded',
  },
})

axiosClient.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data
  }
  return (
    response,
    (error) => {
      if (error.response.status === 401) {
        // logoutUser()
      }

      throw error
    }
  )
})
export default axiosClient
