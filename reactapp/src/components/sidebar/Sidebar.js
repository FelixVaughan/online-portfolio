import { Link } from "react-router-dom";

import {
  Sidebar as _Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";

import {
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaStackOverflow,
} from "react-icons/fa";

export default function Sidebar() {
  const sidebarRootStyles = {
    [`.${sidebarClasses.container}`]: {
      backgroundColor: "transparent",
      color: "var(--tertiary-color)",
      position: "fixed",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      top: 0,
      left: 0,
      bottom: 0,
      zIndex: 1000,
    },
  };

  const menuItemStyles = {
    button: {
      marginBottom: "1em",
      size: "1em",
      "&:hover": {
        color: "black",
        fontWeight: "bold",
      },
      "&.active": {
        color: "#00ff00",
        fontWeight: "bold",
      },
    },
  };

  const iconSize = "2em";

  return (
    <_Sidebar rootStyles={sidebarRootStyles}>
      <Menu menuItemStyles={menuItemStyles}>
        <div className="nav-menu-container">
          <MenuItem
            icon={<FaGithub size={iconSize} />}
            component={<Link to="/Github" />}
          />
          <MenuItem
            icon={<FaLinkedin size={iconSize} />}
            component={<Link to="/Linkedin" />}
          />
          <MenuItem
            icon={<FaDiscord size={iconSize} />}
            component={<Link to="/Discord" />}
          />
          <MenuItem
            icon={<FaStackOverflow size={iconSize} />}
            component={<Link to="/StackOverflow" />}
          />
        </div>
      </Menu>
    </_Sidebar>
  );
}

//global css properties
//
