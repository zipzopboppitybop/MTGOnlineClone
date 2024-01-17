import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const history = useHistory();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push('/');
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    <>
    {user ? (
      <button onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>
    ) : (
          <>
          <ul id="nav-bar-buttons">
            <li>
              <OpenModalButton
                buttonText="Log In"
                onItemClick={closeMenu}
                modalComponent={<LoginFormModal />}
              />
            </li>
            <li>
              <OpenModalButton
                buttonText="Sign Up"
                onItemClick={closeMenu}
                modalComponent={<SignupFormModal />}
              />
            </li>
          </ul>
          </>
        )}

      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <li className="profile-dropdown-button">
              <i className="fas fa-plus"></i>
              &nbsp;
              New Deck
            </li>
            <NavLink to={`/${user.id}/decks`}>
              <li className="profile-dropdown-button">
                <i className="fa fa-folder"></i>
                &nbsp;
                My Decks
              </li>
            </NavLink>
            <li className="profile-dropdown-button">
              <button className="profile-dropdown-button" onClick={handleLogout}>
                <i className="fa fa-sign-out"></i>
                &nbsp;
                Log Out
              </button>
            </li>
          </>
        ) : (
          <>
          </>
        )}
      </ul>
    </>
  );
}

export default ProfileButton;
