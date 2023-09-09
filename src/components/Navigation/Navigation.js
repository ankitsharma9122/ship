import React, { useState } from "react";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Navigation.css";
import logo from "../assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const User = null;
  const handleLogout = () => {};

  return (
    <nav className="main-nav">
      <div className="navbar">
        <div className="navbar-1">
          <Link to="/" className="nav-item nav-logo">
            <img src={logo} alt="logo" />
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
            About
          </Link>
          <Link className="nav-item nav-btn res-nav">Product</Link>
          <Link to="/" className="nav-item nav-btn res-nav">
            Teams
          </Link>
        </div>
        <div className="navbar-2">
          <form>
            <TextField
              type="text"
              placeholder="   Search..."
              style={{ width: "100%" }}
            />
          </form>
          {User === null ? (
            <Link to="/Auth" className="nav-item nav-links">
              Log In
            </Link>
          ) : (
            <>
              <Avatar
                backgroundColor="#009dff"
                px="10px"
                py="7px"
                borderRadius="50%"
                color="white"
              >
                <Link
                  to={`/Users/${User.id}`}
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  {User.result.name.charAt(0).toUpperCase()}
                </Link>
              </Avatar>
              <Button className="nav-item nav-links" onClick={handleLogout}>
                Log Out
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
