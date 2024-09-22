import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
//es7 extension emmits use:rfc(react functionlal component)
// and then add import Navbar from './Navbar'; in app.js and write <Navbar/> inside return 

import React from 'react'
//above line is not required(only for old versions)

export default function Navbar(props) {
  return (
    <div>
      {/* if you want only the navbar to be in dark mode then we can use the below line */}
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-black"></nav> */}
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/About' >About </Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            {/* here we should use href="/" instead of "#" why? will be discussed in routers video*/}
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>

      <div className={`form-check form-switch-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color:props.mode==='dark'?'white':'black'}}>{props.textval}</label>
      </div>


      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

// u can specify a prop type(similar to datatype)
Navbar.propTypes={
    title: PropTypes.string.isRequired,
    link: PropTypes.string
}
// we can use default incase title n link r not passed(just like alternate)
//isRequired is like u have to pass the value no matter wat,if there is no title passed in app.js nor there is default title, then its a invalid case(it wont print anything,it will show error in console)

Navbar.defaultProps={
    title:"set title name"
}


