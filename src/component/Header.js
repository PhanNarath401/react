import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header = () => {
  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-lg-2">
            <div className="header__logo">
              <Link to="/"> {/* Replace a tag with Link and use 'to' for routing */}
                <img src="img/logo.png" alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7">
            <nav className="header__menu">
              <ul>
                <li className="active">
                  <Link to="/">Home</Link> {/* Use Link instead of a */}
                </li>
                <li>
                  <Link to="/shop">Shop</Link> {/* Use Link instead of a */}
                </li>
                <li>
                  <Link to="/contact">Contact</Link> {/* Use Link instead of a */}
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-3">
            <div className="header__right">
              <div className="header__right__auth">
                <Link to="/login">Login</Link> {/* Use Link instead of a */}
                <Link to="/register">Register</Link> {/* Use Link instead of a */}
              </div>
              <ul className="header__right__widget">
                <li>
                  <span className="icon_search search-switch"></span>
                </li>
                <li>
                  <Link to="/wishlist">
                    <span className="icon_heart_alt"></span>
                    <div className="tip">2</div>
                  </Link> {/* Use Link instead of a */}
                </li>
                <li>
                  <Link to="/cart">
                    <span className="icon_bag_alt"></span>
                    <div className="tip">2</div>
                  </Link> {/* Use Link instead of a */}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="canvas__open">
          <i className="fa fa-bars"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
