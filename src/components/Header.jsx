import React from 'react'
import { Helmet } from "react-helmet";
import { Link, NavLink, useNavigate} from 'react-router-dom';
function Header() {

  const redirect = useNavigate();

  const logout=()=> {

    localStorage.removeItem('name');
    localStorage.removeItem('id');
    
    redirect('/');

  }



    return (
     <div className="header_section">
  <div className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="index.html"><img src="images/logo.png" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/coffees">Coffees</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/blog">Blog</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/user_profile">User profile</NavLink>
          </li>

          
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <div className="login_bt">
            <ul>
            {(() => {
                                    if (localStorage.getItem('name')) {
                                        return (
                                            <a href="javascript:void(0)"  className="btn btn-danger" onClick={logout}>Logout<i className="fa fa-arrow-right ms-3" /></a>
                                        )
                                    }
                                    else {
                                        return (
                                            <Link to="/" className="btn btn-primary">Login</Link>
                                        )
                                    }
                                })()}
              
            </ul>
          </div>
        </form>
      </div>
    </nav>
  </div>
  
  
</div>

    )
}

export default Header


