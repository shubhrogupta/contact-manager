import React from 'react'

function Header({branding}) {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-10 px-100">
                <div className="container">
                    <a href="/" className="navbar-brand">
                        {branding}    
                    </a>    
                </div>
                <div>
                    <ul className="navbar-nav mr-auto" >
                        <li className="nav-item"><a href="/" className="nav-link">home</a></li>  
                        <li className="nav-item"><a href="/" className="nav-link">new contact</a></li>      
                    </ul>   
                </div>                            
            </nav>
        </div>
    );
}

export default Header;