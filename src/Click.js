import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Click() {
    

    var navLinks = document.getElementById("navLinks");
    const showMenu = () => {
        navLinks.style.right = "0";
    }
    const hideMenu = () => {
        navLinks.style.right = "-200px";
    }
    return (
        <main>
            <div className="a">
                <div className="nav-links" id="navLinks">
                    <i className="fa fa-times" onClick={hideMenu}></i>
                    <ul>
                        <Link to="/login">
                        <li>Login</li>
                        </Link>
                    </ul>
                </div>
                <i className="fa fa-bars" onClick={showMenu}></i>
            </div>


        </main>
    );
}
export default Click;