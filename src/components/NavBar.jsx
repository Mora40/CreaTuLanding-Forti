import React from 'react'
import CartWidget from './CartWidget'

function Navbar() {
  return (
    <div className='navbar-container'>
      <div>
        <ul className='navbar-list'>
          <li>Navegación 1</li>
          <li>Navegación 2</li>
          <li>Navegación 3</li>
        </ul>
      </div>
      <CartWidget/>
    </div>
  )
}

export default Navbar