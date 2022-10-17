import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Stack } from "@mui/material";
import Loader from "../Loader";
import {
  getSelectorIsLoggedIn,
  getUserName,
} from "../../redux/auth/auth-selectors";
import operations from "../../redux/auth/auth-operations";
import styles from "./AppBar.module.scss";
import "../../styles/_navigation.scss";
import Navigation from "../Navigation";

function AppBar() {
  const isLoggedIn = useSelector(getSelectorIsLoggedIn);
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div className={styles.AppBar}>
      <header className={styles.AppBar__header}>
        <div className={styles.AppBar__headerLogoWrapper}>
          <img
            className={styles.AppBar__headerLogoIcon}
            src={require("../../images/logo.svg").default}
            alt="logo"
          />
          <h2 className={styles.AppBar__headerLogoTitle}>
            Dashboard<span className={styles.AppBar__headerLogoText}>v.01</span>
          </h2>
        </div>

        <Navigation />

        {isLoggedIn && (
          <div className={styles.AppBar__headerAvatar}>
            <span className={styles.AppBar__headerAvatarWrapper}>
              {name !== "Evano" && (
                <Stack
                  direction="row"
                  spacing={2}
                  className={styles.AppBar__headerAvatarImage}
                >
                  <Avatar />
                </Stack>
              )}
              {name === "Evano" && (
                <img
                  className={styles.AppBar__headerAvatarImage}
                  src="https://i.gyazo.com/dcc93f346253712ca17064e52cff50cb.png"
                  alt="evano"
                />
              )}
              <div>
                <p className={styles.AppBar__headerAvatarName}>{name}</p>
                <p className={styles.AppBar__headerAvatarProfession}>
                  Project Manager
                </p>
              </div>
            </span>

            <div className={styles.AppBar__headerAvatarLogout}>
              <button
                className={styles.AppBar__headerAvatarButtonLogout}
                type="button"
                onClick={() => dispatch(operations.logOut())}
              >
                LogOut
              </button>
            </div>
          </div>
        )}
      </header>

      <main className={styles.AppBar__main}>
        <h2 className={styles.AppBar__mainUsername}>Hello {name} 👋🏼,</h2>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}

export default AppBar;
