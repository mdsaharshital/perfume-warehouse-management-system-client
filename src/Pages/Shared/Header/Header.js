import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { MdInventory2 } from "react-icons/md";
import "./Header.css";
import CustomLink from "../CustomLink/CustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
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
                <CustomLink to="/manage" className="nav-menu-flex">
                  <MdInventory2 style={{ color: "black", fontSize: "26px" }} />
                  {isSidebarOpen || <p>Manage</p>}
                </CustomLink>
              </li>
              <li className="nav-text">
                <CustomLink to="/addnewitems" className="nav-menu-flex">
                  <FaIcons.FaCartPlus
                    style={{ color: "black", fontSize: "26px" }}
                  />
                  {isSidebarOpen || <p>Add Items</p>}
                </CustomLink>
              </li>
              {user ? (
                <li onClick={logout} className="nav-text">
                  <CustomLink to="/" className="nav-menu-flex">
                    <BiLogOut style={{ color: "black", fontSize: "26px" }} />
                    {isSidebarOpen || <p>Log Out</p>}
                  </CustomLink>
                </li>
              ) : (
                <li className="nav-text">
                  <CustomLink to="/signin" className="nav-menu-flex">
                    <FaIcons.FaUserMinus
                      style={{ color: "black", fontSize: "26px" }}
                    />
                    {isSidebarOpen || <p>Log In</p>}
                  </CustomLink>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
