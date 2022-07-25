import "./ThemeSwitch.scss";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { useUIStore } from "../../state/store";

const ThemeSwitch = () => {
  const { isDarkMode, toggleDarkMode } = useUIStore((state) => state);

  const toggleThemeChange = () => {
    if (!isDarkMode) {
      document.getElementsByTagName("HTML")[0].setAttribute("data-theme", "dark");
      toggleDarkMode();
    } else {
      document.getElementsByTagName("HTML")[0].setAttribute("data-theme", "light");
      toggleDarkMode();
    }
  };

  return (
    <button className="theme-switch" onClick={toggleThemeChange}>
      {isDarkMode === false ? <FaMoon /> : <BsSunFill />}
    </button>
  );
};

export default ThemeSwitch;
