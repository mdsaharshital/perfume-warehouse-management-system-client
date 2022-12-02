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
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("accessToken");
    signOut(auth);
  };
  const [isSidebarClosed, setSidebarClosed] = useState(true);

  const showSidebar = () => setSidebarClosed(!isSidebarClosed);
  return (
    <>
      <div className="header-container">
        <div className="navmenu-full">
          <nav className={isSidebarClosed ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items">
              <li className="navbar-toggle">
                <div className="cursor-pointer mr-5 ml-2">
                  <HiOutlineMenuAlt1
                    style={{ color: "black" }}
                    onClick={showSidebar}
                  />
                </div>
                {isSidebarClosed || (
                  <h1 className="text-[18px] font-bold pt-2">PW</h1>
                )}
              </li>
              <li className="nav-text">
                <CustomLink to="/" className="nav-menu-flex">
                  <AiIcons.AiFillHome
                    style={{ color: "black", fontSize: "26px" }}
                  />
                  {isSidebarClosed || <p>Home</p>}
                </CustomLink>
              </li>
              {user && (
                <>
                  <li className="nav-text">
                    <CustomLink to="/manage" className="nav-menu-flex">
                      <MdInventory2
                        style={{ color: "black", fontSize: "26px" }}
                      />
                      {isSidebarClosed || <p>Manage</p>}
                    </CustomLink>
                  </li>
                  <li className="nav-text">
                    <CustomLink to="/myitems" className="nav-menu-flex">
                      <FaIcons.FaLuggageCart
                        style={{ color: "black", fontSize: "26px" }}
                      />
                      {isSidebarClosed || <p>My Items</p>}
                    </CustomLink>
                  </li>
                  <li className="nav-text">
                    <CustomLink to="/addnewitems" className="nav-menu-flex">
                      <FaIcons.FaCartPlus
                        style={{ color: "black", fontSize: "26px" }}
                      />
                      {isSidebarClosed || <p>Add Items</p>}
                    </CustomLink>
                  </li>
                </>
              )}
              <li className="nav-text">
                <CustomLink to="/blogs" className="nav-menu-flex">
                  <AiIcons.AiFillMessage
                    style={{ color: "black", fontSize: "26px" }}
                  />
                  {isSidebarClosed || <p>Blogs</p>}
                </CustomLink>
              </li>
              {user ? (
                <li
                  onClick={() => {
                    logout();
                    navigate("/");
                  }}
                  className="nav-text"
                >
                  <span className="nav-menu-flex special-span">
                    <BiLogOut style={{ color: "black", fontSize: "26px" }} />
                    {isSidebarClosed || <p>Log Out</p>}
                  </span>
                </li>
              ) : (
                <li className="nav-text">
                  <CustomLink to="/signin" className="nav-menu-flex">
                    <FaIcons.FaUserPlus
                      style={{ color: "black", fontSize: "26px" }}
                    />
                    {isSidebarClosed || <p>Log In</p>}
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
