import React from 'react'
import './logo.css'
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div>
      <Link to="/"><img className="icon-navbar" src="public/img/mate-blanco-logo.png"></img></Link>
    </div>
  )
}

export default Logo
