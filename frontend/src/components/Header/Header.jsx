import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>Order your favourite food here</h2>
        <p>
          From street food to gourmet – order from your favorite restaurants in minutes.
          Hot, fresh, and at your door before you know it.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header

