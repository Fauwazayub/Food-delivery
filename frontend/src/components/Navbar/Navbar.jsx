import React, {useState} from 'react'

import './Navbar.css'
// import { assets } from '../../assets/assets';

const Navbar = () => {
   const [menu,setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src= 'src\assets\logo.png' alt='' className='logo'/>
      <ul className='navbar-menu'>
        <li onClick={()=>setMenu("home")} className={menu=="home"?"active":""}>Home</li> 
        <li onClick={()=>setMenu("menu")} className={menu=="menu"?"active":""}>menu</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu=="mobile-app"?"active":""}>mobile-app</li>
        <li onClick={()=>setMenu("contact-us")} className={menu=="contact-us"?"active":""}>contact us</li>
      </ul>
      <div className='navbar-right'>
           <img src='src\assets\search_icon.png'></img>
           <div className='navbar-search-icon'>
               <img src='src\assets\basket_icon.png'></img>
               <div className='dot'></div>
           </div>
           <button>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
