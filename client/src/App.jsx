import React, { lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'

// for code splitting
const Home = lazy(() => import("./pages/Home")) //on specific route that page will load
const Login = lazy(() => import("./pages/Login"))
const Chat = lazy(() => import("./pages/Chat"))
const Groups = lazy(() => import("./pages/Groups"))

let user = true

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <ProtectedRoute user={user}><Home/></ProtectedRoute>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/groups' element={<Groups />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
