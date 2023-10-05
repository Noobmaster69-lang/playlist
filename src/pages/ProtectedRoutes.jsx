
import { Navigate, Outlet } from 'react-router-dom'
import HeaderMusic from '../shared/HeaderMusic'

const ProtectedRoutes = () => {


    if(localStorage.getItem('token') !== null){
        return (
            <>
            <HeaderMusic />
            <Outlet />
            </>
        )
    }else {
        return <Navigate to='/auth/login' />
    }
}
export default ProtectedRoutes