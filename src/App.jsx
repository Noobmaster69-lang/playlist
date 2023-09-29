import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePages from './pages/HomePages'
import LoginPages from './pages/LoginPages'
import RegisterPages from './pages/RegisterPages'
import { useEffect } from 'react'
import { setCredentialsSlice } from './store/slices/credentials.slice'
import { useDispatch } from 'react-redux'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    const token = localStorage.removeItem("token")
    const username = localStorage.removeItem("username")
    const email = localStorage.removeItem("email")
    const obj = { token, username, email }
    dispatch(setCredentialsSlice(obj))
  }, [])

  return (
    <div>
      <h1>Gift Music</h1>
      <Routes>
        <Route path='/auth/login' element={<LoginPages />} />
        <Route path='/auth/register' element={<RegisterPages />} />
        <Route element={<ProtectedRoutes />} >
        <Route path='/' element={<HomePages />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
