import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbar-container'>
      <div>
        <ul className='navbar-list'>
          <li>
            <Link to='/'>Todos los productos</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li><Link to='/nosotros'>Nosotros</Link></li>
        </ul>
      </div>
      <CartWidget/>
    </div>
  )
}

export default NavBar