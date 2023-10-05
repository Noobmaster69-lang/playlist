import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePages from './pages/HomePages'
import LoginPages from './pages/LoginPages'
import RegisterPages from './pages/RegisterPages'
import { useEffect } from 'react'
import { setCredentialsSlice } from './store/slices/credentials.slice'
import { useDispatch } from 'react-redux'
import ProtectedRoutes from './pages/ProtectedRoutes'
import TrackPage from './pages/TrackPage'
import ArtistPage from './pages/ArtistPage'
import PlaylistPage from './pages/PlaylistPage'

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    const token = localStorage.getItem("token")
    const username = localStorage.getItem("username")
    const email = localStorage.getItem("email")
    const obj = { token, username, email }
    dispatch(setCredentialsSlice(obj))
  }, [])

  return (
    <div>
      <Routes>
        <Route path='/auth/login' element={<LoginPages />} />
        <Route path='/auth/register' element={<RegisterPages />} />
        <Route element={<ProtectedRoutes />}>
        <Route path='/' element={<HomePages />}/>
        <Route path='/track/:id' element={<TrackPage />} />
        <Route path='/artist/:id' element={<ArtistPage />} /> 
        <Route path='/playlist' element={<PlaylistPage />} /> 
        </Route>
      </Routes>
    </div>
  )
}

export default App
