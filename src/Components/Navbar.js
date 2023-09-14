import React from 'react';
import Images from '../images';

export default function Navbar() {

    return(
        <>
        <nav className="navbar navbar-dark bg-transparent fixed-top">
            <div className="container-fluid">
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasDarkNavbar"
                aria-controls="offcanvasDarkNavbar"
                >
                <span className="navbar-toggler-icon" />
                </button>
                <a className="navbar-brand" href="https://masoudnazarii.github.io/Portfolio/">
                <img
                    className="logo"
                    src={Images.NewProjectpng}
                    alt="logo"
                />
                </a>
                <div
                    className="offcanvas offcanvas-start text-bg-dark"
                    tabIndex={-1}
                    id="offcanvasDarkNavbar"
                    aria-labelledby="offcanvasDarkNavbarLabel"
                    >
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                        Menu
                        </h5>
                        <button
                        type="button"
                        className="btn-close btn-close-white"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        />
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://masoudnazarii.github.io/Portfolio/">
                                About
                                </a>
                            </li>
                                {/*-
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Options
                                </a>
                                <ul class="dropdown-menu dropdown-menu-dark">
                                <li><a class="dropdown-item" href="#"></a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            */}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        </>
    );
}
