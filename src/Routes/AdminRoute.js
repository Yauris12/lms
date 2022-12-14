import { Navigate } from 'react-router-dom'

const AdminRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to='/' replace />
  }
}
