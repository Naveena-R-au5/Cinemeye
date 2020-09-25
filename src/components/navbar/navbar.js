import React from 'react'
import Nav from 'react-bootstrap/Nav'
import style from './navbar.module.css'
import {Link} from 'react-router-dom'

const Navbar=()=>{
    return(
        <div>
            <Nav
            className={style.Nav} fixed='top'>
   <Nav.Item as="li">
    <Nav.Link  className={style.ele}><Link to='/dashboard'  className={style.ele}>Dashboard</Link></Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link  className={style.ele}>Login</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link  className={style.ele}>Register</Nav.Link>
  </Nav.Item>
</Nav>
        </div>
    )
}
export default Navbar;