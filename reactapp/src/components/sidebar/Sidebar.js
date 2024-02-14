import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
} from "react-icons/fa";
import {
  Menu,
  MenuItem,
  Sidebar as _Sidebar,
  sidebarClasses,
} from "react-pro-sidebar";

const useStyles = makeStyles(() => {
  const theme = useTheme();
  return {
    icon: {
      fontSize: "3em",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.5em",
      },
    },
    iconContainer: {
      [theme.breakpoints.down("sm")]: {
        marginLeft: "-7px",
      },
    },
  };
});

export default function Sidebar() {
  const classes = useStyles();

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
      zIndex: -1,
    },
  };

  const menuItemStyles = {
    button: {
      marginBottom: "1em",
      marginTop: "2em",
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

  return (
    <_Sidebar rootStyles={sidebarRootStyles}>
      <Menu menuItemStyles={menuItemStyles}>
        <div className="nav-menu-container">
          <MenuItem
            className={classes.iconContainer}
            icon={<FaGithub className={classes.icon} />}
            component={
              <a
                href="https://github.com/FelixVaughan"
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          />
          <MenuItem
            className={classes.iconContainer}
            icon={<FaLinkedin className={classes.icon} />}
            component={
              <a
                href="https://www.linkedin.com/in/felix-ezama-vaughan-36a536229/"
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          />
          <MenuItem
            className={classes.iconContainer}
            icon={<FaStackOverflow className={classes.icon} />}
            component={
              <a
                href="https://stackoverflow.com/users/5514399/felix-vaughan"
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          />
          <MenuItem
            className={classes.iconContainer}
            icon={<FaEnvelope className={classes.icon} />}
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
