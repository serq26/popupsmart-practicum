import React from "react";
import { useSelector } from "react-redux";
import { changeThemeHandle, logoutHandle } from "../../utils";
import "./header.css";

export default function Header() {
  const user = useSelector((state) => state.auth.user);
  const theme = useSelector((state) => state.theme.theme);

  const handleChange = () => {
    changeThemeHandle(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="header">
      <h2>Todo List</h2>
      {user && (
        <nav>
          Welcome, {user}
          <button onClick={logoutHandle}>Logout</button>
        </nav>
      )}
      <div className="app-actions">
        <div className="theme-wrapper">
          <div className="theme-switch-wrapper">
            <label htmlFor="theme-btn">
              <input
                type="checkbox"
                id="theme-btn"
                onChange={handleChange}
                value={theme}
                checked={theme === "dark" ? "checked" : ""}
              />
              <div className="slider-wrapper">
                <div className="theme-btn-slider">
                  <img
                    src={
                      theme === "dark" ? "/icons/moon.png" : "/icons/sun.png"
                    }
                    alt=""
                  />
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>      
    </header>
  );
}
