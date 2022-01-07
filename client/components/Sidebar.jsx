import React from "react";
import "../styles.scss";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CategoryIcon from "@mui/icons-material/Category";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import ArticleIcon from "@mui/icons-material/Article";

const Sidebar = () => {
  const sidebarData = [
    {
      title: "Main Budget",
      icon: <MonetizationOnRoundedIcon />,
      link: "/budgetmain",
    },
    {
      title: "Create a New Budget",
      icon: <AddRoundedIcon />,
      link: "/newbudget",
    },
    {
      title: "Categories",
      icon: <CategoryIcon />,
      link: "/categories",
    },
    {
      title: "TotalDisplay",
      icon: <ArticleIcon />,
      link: "/totaldisplay",
    },
    {
      title: "Profile Settings",
      icon: <SettingsIcon />,
      link: "/settings",
    },
    {
      title: "Logout",
      icon: <PowerSettingsNewIcon />,
      link: "/",
    },
  ];

  return (
    <div className="sidebar" style={{ height: "100%" ,width:"100%" }}>
      <br></br>

      <div className="sidebarlogo-container">
        <img
          src="https://www-assets.youneedabudget.com/wp-content/uploads/2019/02/12222336/illo_fourrules_onehowitworks-768x665.png"
          alt="Budget Logo"
          className="sidebarlogo"
        />
      </div>
      <br></br>

      <div className="sidebarUser"></div>
      <ul className="sidebarList">
        {sidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="sidebarRow"
              id={window.location.pathname == val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
