import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/auth/ProtectedRoute'
import './index.css'
import { AppLayoutLoader } from './components/layout/Loaders'

// for code splitting
const Home = lazy(() => import("./pages/Home")) //on specific route that page will load
const Login = lazy(() => import("./pages/Login"))
const Chat = lazy(() => import("./pages/Chat"))
const Groups = lazy(() => import("./pages/Groups"))
const NotFound = lazy(() => import("./pages/NotFound"))

let user = true

const App = () => {

  return (
    <BrowserRouter>
      <Suspense fallback={<AppLayoutLoader/>}>
        <Routes>
          <Route element={<ProtectedRoute user={user} />}>
            <Route path='/' element={<Home />} />
            <Route path='/chat/:chatId' element={<Chat />} />
            <Route path='/groups' element={<Groups />} />
          </Route>
          <Route path='/login' element={
            <ProtectedRoute user={!user} redirect='/'>
              <Login />
            </ProtectedRoute>
          } />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
