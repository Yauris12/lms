import { Navigate } from 'react-router-dom'

const StudentRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to='/' replace />
  }
}
