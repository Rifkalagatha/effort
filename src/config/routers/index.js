import React from 'react'
import { BrowserRouter as Router, Routes as Switch , Route } from 'react-router-dom'
import { Home, Login } from '../../pages'
import Navbar from '../../navigation/Navbar'
import Profile from '../../pages/Profile'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Switch>
    </Router>
  )
}

export default Routes
