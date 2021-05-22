import { Menu } from "antd";
import React from "react";

function NavBar() {
  return (
    <>
      <nav
        className="menu"
        style={{ position: "fixed", width: "100%", zIndex: "1", top: "0" }}
      >
        <div className="menu__logo">
          <a href="https://search-enginex.netlify.app" style={{ color: "white" }}>
            Home
          </a>
        </div>
        <div className="menu__container">
          <Menu mode="horizontal" style={{ backgroundColor: "transparent" }}>
            <Menu.Item style={{ color: "white", marginTop: "0.9rem" }}>
              <a href="https://search-enginex.netlify.app" style={{ color: "white" }}>
                Demo
              </a>
            </Menu.Item>
            <Menu.Item style={{ color: "white", marginTop: "0.9rem" }}>
              Our Products
            </Menu.Item>
            <Menu.Item style={{ color: "white", marginTop: "0.9rem" }}>
              Documentation
            </Menu.Item>
            <Menu.Item
              style={{ float: "right", color: "white", marginTop: "0.9rem" }}
            >
              Contact us
            </Menu.Item>
            <Menu.Item
              style={{ float: "right", color: "white", marginTop: "0.9rem" }}
            >
              Blog
            </Menu.Item>
          </Menu>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
