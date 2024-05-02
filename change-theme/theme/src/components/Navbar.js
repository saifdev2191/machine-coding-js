import { ConsumeContext } from "../context/context";
import styles from "./navbar.module.css"

const Navbar = () => {
  const { theme, changeTheme } = ConsumeContext();
  console.log(theme);
  console.log(styles)
  return (
    <div className={`nav ${theme === "light" ? styles.light : styles.dark}`}>
      <div className="nav-end">
        <label htmlFor="change-theme">Theme: {theme}</label>
        <input
          type="checkbox"
          className="toggle-switch"
          onChange={changeTheme}
          id="change-theme"
        />
      </div>
    </div>
  );
};

export default Navbar;
