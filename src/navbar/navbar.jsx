import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Service from '../pages/Service'
import Help from '../pages/Help'

const navbar = () => {
  return (
    
    <Router>

      <div className=' container'>
           <nav className='navbar navbar-expand-lg bg-light'>
               <div className='container-fluid'>
                    <Link to="/"><a className='navbar-brand text-secondary'>Home</a></Link>
                    <Link to="/service"><a className='navbar-brand text-secondary'>Service</a></Link>
                    <Link to="/help"><a className='navbar-brand text-secondary'>Help</a></Link>
               </div>
           </nav>

       </div>
        <Routes>
          <Route to="/" >
          </Route>
          <Route path='/service' element={<Service />} >
          </Route>
          <Route path='/help' element={<Help />}>
          </Route>
        </Routes>
      </Router>
  )
}

export default navbar