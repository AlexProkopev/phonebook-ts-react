import { ReactNode } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { LOGIN_ROUTE } from "src/constants/routes"
import { selectAuthIsLoggedIn } from "src/redux/auth/auth.selectors"
type Props = {
    children: ReactNode,
    redirectTo?: string
}
const PrivateRoute = ({children, redirectTo = LOGIN_ROUTE}: Props ) => {
    const isLoggedIn = useSelector(selectAuthIsLoggedIn) 
  return isLoggedIn ? children : <Navigate to={redirectTo} replace/> 
}

export default PrivateRoute