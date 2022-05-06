import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import "./Header.css";
import CustomLink from "../CustomLink/CustomLink";

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
                <div className="cursor-pointer">
                  <HiOutlineMenuAlt1
                    style={{ color: "black" }}
                    onClick={showSidebar}
                  />
                </div>
              </li>
              <li className="nav-text">
                <CustomLink to="/" className="nav-menu-flex">
                  <AiIcons.AiFillHome
                    style={{ color: "black", fontSize: "26px" }}
                  />
                  {isSidebarOpen || <p>Home</p>}
                </CustomLink>
              </li>
              <li className="nav-text">
                <CustomLink to="/reports" className="nav-menu-flex">
                  <IoIcons.IoIosPaper
                    style={{ color: "black", fontSize: "26px" }}
                  />
                  {isSidebarOpen || <p>Reports</p>}
                </CustomLink>
              </li>
              <li className="nav-text">
                <CustomLink to="/products" className="nav-menu-flex">
                  <FaIcons.FaCartPlus
                    style={{ color: "black", fontSize: "26px" }}
                  />
                  {isSidebarOpen || <p>Products</p>}
                </CustomLink>
              </li>
              <li className="nav-text">
                <CustomLink to="/message" className="nav-menu-flex">
                  <IoIcons.IoIosPaper
                    style={{ color: "black", fontSize: "26px" }}
                  />
                  {isSidebarOpen || <p>Message</p>}
                </CustomLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
