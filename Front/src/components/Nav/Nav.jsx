import style from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { Link, NavLink } from "react-router-dom";

const Nav = (props) => {
  return (
    <div>
      {props.location.pathname != "/" ? (
        <nav className={style.navContainer}>
          <h2 className={style.buttonLog} onClick= {() => {props.logOut()}}>LogOut</h2>
          <NavLink to="/home" className={style.links}>
            Home
          </NavLink>
          <NavLink to="/favorites" className={style.links}>
            Favorites
          </NavLink>
          <Link to="/about " className={style.links}>
            About
          </Link>
          <SearchBar onSearch={props.onSearch} randomGenerate={props.randomGenerate}></SearchBar>
          
        </nav>
      ) : null}
    </div>
  );
};

export default Nav;
