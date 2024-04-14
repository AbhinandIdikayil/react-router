import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Usage from './components/Usage'
import Contact from './components/Contact'
import Users from './components/Users'
import UserDetails from './components/UserDetails'
import NotFound from './pages/NotFound'
import Remarks from './components/Remarks'
import Marks from './components/Marks'
import Sports from './components/Sports'
import Layout from './Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      
      <Routes  >
        <Route path='/' element={<Layout />} >
          <Route path='' element={<Home /> } />
          <Route path='/home' element={<Home />} />
          <Route path='usage' element={<Usage />} />
          <Route path='contact' element={<Contact />} />
          <Route path='users' element={<Users />} />
          <Route path='users/details/:userid' element={<UserDetails />} >
            <Route path='' element={<Marks />} />
            <Route path='sports' element={<Sports />} />
            <Route path='remarks' element={<Remarks />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
