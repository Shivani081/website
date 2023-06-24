import React from 'react'
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


function Header() {






    const redirect = useNavigate();
    const [form, setform] = useState({
        id: "",
        name: "",
        password: ""
    })






    const logout = () => {

        localStorage.removeItem('name');
        alert('Logout Successfull !');
        redirect('/');
    }
    return (
        <div className='skin-blue'><header className="main-header">
            {/* Logo */}
            <a href="index2.html" className="logo"><b>ADMIN PANEL</b></a>
            {/* Header Navbar: style can be found in header.less */}
            <nav className="navbar navbar-static-top" role="navigation">
                {/* Sidebar toggle button*/}
              
                <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                        {/* Messages: style can be found in dropdown.less*/}


                        {/* User Account: style can be found in dropdown.less */}
                        <li className="dropdown user user-menu">
                            <NavLink to="/" >





                                {(() => {
                                    if (localStorage.getItem('id')) {
                                        return (
                                            <a href="javascript:void(0)" onClick={logout} className="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block">login<i className="fa fa-arrow-right ms-3" /></a>
                                        )
                                    }
                                    else {
                                        return (
                                            <Link to="/" style={{ color: "white" }}>logout</Link>
                                        )
                                    }
                                })()}






                            </NavLink>

                        </li>
                    </ul>
                </div>
            </nav>
        </header>
            {/* Left side column. contains the logo and sidebar */}
            <aside className="main-sidebar">
                {/* sidebar: style can be found in sidebar.less */}
                <section className="sidebar">
                    {/* Sidebar user panel */}
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                        </div>
                        <div className="pull-left info">






                            {(() => {
                                if (localStorage.getItem('name')) {
                                    return (
                                        <p className="mb-0 ms-3">  {localStorage.getItem('name')}</p>
                                    )
                                }
                            })()}








                            <a href="#"><i className="fa fa-circle text-success" /> Online</a>
                        </div>
                    </div>

                    
                        <ul className="treeview-menu">
                                <li><NavLink to="/dashboard"><i className="fa fa-circle-o" />Dashboard</NavLink></li>
                                <li><NavLink to="/manage_user"><i className="fa fa-circle-o" />Manage User</NavLink></li>
                                <li><NavLink to="/manage_conatct"><i className="fa fa-circle-o" />Manage Contact</NavLink></li>
                                <li><NavLink to="/manage_product"><i className="fa fa-circle-o" />Manage Product</NavLink></li>
                                <li><NavLink to="/add_product"><i className="fa fa-circle-o" />Add Product</NavLink></li>
                                <li><NavLink to="/edit_user"><i className="fa fa-circle-o" />Edit user</NavLink></li>
                                <li><NavLink to="/view_product"><i className="fa fa-circle-o" />View Product</NavLink></li>
                            </ul>


                </section>
                {/* /.sidebar */}
            </aside>
          
   
            </div>

    )
}

export default Header