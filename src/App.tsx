import { BrowserRouter, Route, Routes } from 'react-router'
import AppLayout from './components/layout/AppLayout'
import HallPage from './pages/HallPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import SprintPage from './pages/SprintPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<AppLayout />}>
          <Route path="/" element={<SprintPage />} />
          <Route path="/hall" element={<HallPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
