import React from "react";
import { Link } from "react-router-dom";

import styles from "./navbar.module.css";

export const Navbar = () => {
  return (
    <nav>
      <div className={styles.buttonsContainer}>
        <Link className={styles.changeToPosts} to={`/posts`}>
          My Posts
        </Link>
        <Link className={styles.changeToAlbums} to={`/albums`}>
          My Albums
        </Link>
      </div>
      <div>
        <Link className={styles.logout} to={`/login`}>
          Logout
        </Link>
      </div>
    </nav>
  );
};
