import  { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { CONTACTS_ROUTE} from 'src/constants/routes'
import { selectAuthIsLoggedIn } from 'src/redux/auth/auth.selectors'

type Props = {
    children: ReactNode,
    redirectTo?: string
}
const RestrictedRoute = ({children, redirectTo = CONTACTS_ROUTE}: Props ) => {
    const isLoggedIn = useSelector(selectAuthIsLoggedIn) 
  return isLoggedIn ? <Navigate to={redirectTo} replace /> : children  
}



export default RestrictedRoute