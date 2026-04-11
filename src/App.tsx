import { Routes, Route, Navigate } from 'react-router-dom'
import { AppLayout } from './AppLayout'
import Login from './components/Login'
import About from './components/About'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/*" element={<AppLayout />}>
        <Route path="about" element={<About />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
