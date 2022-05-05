import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import "./Header.css";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const showSidebar = () => setSidebarOpen(!isSidebarOpen);
  return (
    <>
      <div className="header-container">
        <div className="navmenu-full">
          <nav className={isSidebarOpen ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items">
              <li className="navbar-toggle">
                {isSidebarOpen || (
                  <h1 className="navbar-text">Perfume Warehouse</h1>
                )}
                <Link to="#" className="">
                  <HiOutlineMenuAlt1
                    style={{ color: "black" }}
                    onClick={showSidebar}
                  />
                </Link>
              </li>
              <li className="nav-text">
                <Link to="/" className="nav-menu-flex">
                  <AiIcons.AiFillHome
                    style={{ color: "black", marginRight: "" }}
                  />
                  {isSidebarOpen || <p>Home</p>}
                </Link>
              </li>
              <li className="nav-text">
                <Link to="/" className="nav-menu-flex">
                  <IoIcons.IoIosPaper
                    style={{ color: "black", marginRight: "" }}
                  />
                  {isSidebarOpen || <p>Reports</p>}
                </Link>
              </li>
              <li className="nav-text">
                <Link to="/" className="nav-menu-flex">
                  <FaIcons.FaCartPlus
                    style={{ color: "black", marginRight: "" }}
                  />
                  {isSidebarOpen || <p>Products</p>}
                </Link>
              </li>
              <li className="nav-text">
                <Link to="/" className="nav-menu-flex">
                  <IoIcons.IoIosPaper
                    style={{ color: "black", marginRight: "" }}
                  />
                  {isSidebarOpen || <p>Message</p>}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
