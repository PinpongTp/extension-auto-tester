import { NavLink } from "react-router-dom";
import './header.scss'

export const Header = () => {
  return (
    <>
      <div className="header">
        <h1>Auto tester</h1>
      </div>
      <div className="nav">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
          id="fillBtn"
        >
          fill
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="random"
          id="randomBtn"
        >
          random
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="setting"
          id="settingBtn"
        >
          setting
        </NavLink>
      </div>
    </>
  );
};
