import { Outlet, Link } from "react-router-dom";

import React from "react";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className="title">
            <h3>Photo List</h3>
          </li>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
