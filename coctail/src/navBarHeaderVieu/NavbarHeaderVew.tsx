import React from 'react';

const NavbarHeaderVew = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="http://localhost:3000/">Cocktails & lounge</a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        
                    </li>
                    <li className="nav-item active">
                        
                    </li>
                    <li className="nav-item active">
                        
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <a className="btn btn-primary" href="http://localhost:3000/loging" role="button">Se connecter</a>

                    </form>
                </div>
            </nav>
        </>
    );
};

export default NavbarHeaderVew;