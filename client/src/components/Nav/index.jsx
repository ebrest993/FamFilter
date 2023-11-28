import { Link } from "react-router-dom";

import About from '../../pages/About'
import { THEME_TOGGLE } from "../../utils/actions";
import { useStoreContext } from "../../utils/store-context";
import Auth from "../../utils/auth";

import logo from "../../assets/images/logo.png";
import darkToggle from "../../assets/images/dark-toggle.svg";

import "./style.scss";

export default function Nav() {
  const [theme, dispatch] = useStoreContext("theme");

  return (
    <header className={`header-theme__${theme.dark ? "dark" : "light"}`}>
    
      <div>
        <img className="header-logo" src={logo} alt="Logo" />
      </div>
        {!Auth.loggedIn() && (
        <>
        <h1>
          Welcome! 
            <h6>
              Login or Sign Up below!
            </h6>
        </h1>
        </>
         )}
      <div>
        <nav class="test">
          {Auth.loggedIn() && (
            <>
              <Link to="/">Home</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/create">Create New</Link>
              <div className="logout-link" onClick={() => Auth.logout()}>
                Logout
              </div>
            </>
          )}
          <Link to="/about">about us</Link>
        </nav>

        <img
          onClick={() => dispatch({ type: THEME_TOGGLE })}
          className="header-theme-toggle"
          src={darkToggle}
          alt="Theme Toggle"
        />
      </div>
    </header>
  );
}
