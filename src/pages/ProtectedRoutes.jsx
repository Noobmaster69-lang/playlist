
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {


    if(localStorage.getItem('token') !== undefined){
        return <Outlet />
    }else {
        return <Navigate to='/auth/login' />
    }
}
export default ProtectedRoutes