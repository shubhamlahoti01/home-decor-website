import React, { useEffect, useState } from "react";
import { GiCrossMark, GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import "./styles/navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="nav-bar">
      <NavLink onClick={() => setOpen(false)} className={"nav-logo"} to={"/"}>
        HoMe DeCoR
      </NavLink>
      <ul className={`${open ? "open" : "close"}`}>
        <li>
          <NavLink onClick={() => setOpen(false)} to={"/"}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink onClick={() => setOpen(false)} to={"/about"}>
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink onClick={() => setOpen(false)} to={"/portfolio"}>
            PORTFOLIO
          </NavLink>
        </li>
        <li>
          <NavLink onClick={() => setOpen(false)} to={"/testimonial"}>
            TESTIMONIALS
          </NavLink>
        </li>
        <li>
          <NavLink onClick={() => setOpen(false)} to={"/blog"}>
            BLOG
          </NavLink>
        </li>
        <li>
          <NavLink onClick={() => setOpen(false)} to={"/contact"}>
            CONTACT
          </NavLink>
        </li>
      </ul>
      <div className="nav-btns">
        <GiHamburgerMenu
          className="btns"
          style={{ display: open ? "none" : "block" }}
          size={30}
          onClick={() => setOpen(true)}
          color="black"
        />
        <GiCrossMark
          className="btns"
          style={{ display: open ? "block" : "none" }}
          onClick={() => setOpen(false)}
          size={30}
          color="black"
        />
      </div>
    </div>
  );
};

export default Navbar;
