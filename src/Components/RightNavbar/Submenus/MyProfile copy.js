
//HOOKS
import React, { useState } from "react";
import useClickOutside from "../../../CustomHooks/ClickOutside";

//REACT ROUTER
import { Link } from "react-router-dom";
//ICONS , PICS , STYLES
import styles from "./MyProfile.module.scss";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useKeycloak } from '@react-keycloak/web'




const MyProfile = () => {
  const { keycloak } = useKeycloak();
  //console.log(keycloak.idTokenParsed.name)

  const [isProfileOpen, setisProfileOpen] = useState(false);
  let domNode = useClickOutside(() => {
    setisProfileOpen(false);
  });
  return (
    <div
      ref={domNode}
      className={styles.avatar_container}
      onClick={() => { setisProfileOpen(!isProfileOpen); }}>
      {/* AVATAR ICON */}
      <div className={styles.icon_avatar_container}>
       
      </div>

      {/* NAME */}
      <div className={styles.name}>
        <span>{keycloak.idTokenParsed.name}</span>
        <MdKeyboardArrowDown />
      </div>

      {/* AVATAR/SETTINGS SUBMENU */}
      <div
        className={`${styles.menu} ${isProfileOpen ? styles.menu_active : ""}`}
      >
        <div className={styles.info}>
          <span className={styles.name}>WebDesign</span>
          <span className={styles.role}>Adminstrator</span>
        </div>
        <div className={styles.settings}>
          <Link to="/">Settings</Link>
          <Link to="/">Sign Out</Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;