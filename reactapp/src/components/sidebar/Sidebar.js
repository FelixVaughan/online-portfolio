import {
  Menu,
  MenuItem,
  Sidebar as _Sidebar,
  sidebarClasses,
} from "react-pro-sidebar";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
} from "react-icons/fa";

export default function Sidebar() {
  const sidebarRootStyles = {
    [`.${sidebarClasses.container}`]: {
      backgroundColor: "transparent",
      color: "var(--secondary)",
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
      "&:focus": {
        outline: "none",
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
            component={
              <a
                href="https://github.com/FelixVaughan"
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          />
          <MenuItem
            icon={<FaLinkedin size={iconSize} />}
            component={
              <a
                href="https://www.linkedin.com/in/felix-ezama-vaughan-36a536229/"
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          />
          <MenuItem
            icon={<FaStackOverflow size={iconSize} />}
            component={
              <a
                href="https://stackoverflow.com/users/5514399/felix-vaughan"
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          />
          <MenuItem
            icon={<FaEnvelope size={iconSize} />}
            component={
              <a
                href="mailto:your.email@example.com"
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          />
        </div>
      </Menu>
    </_Sidebar>
  );
}
