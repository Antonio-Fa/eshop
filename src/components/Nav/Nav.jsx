import React from "react";
import styles from "./Nav.module.scss";
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav className={styles.Bar}>
            <NavLink className={styles.link} to="/">
                Home
            </NavLink>
            <NavLink to="/products/">Products</NavLink>
        </nav>
    );
}

export default Nav;
