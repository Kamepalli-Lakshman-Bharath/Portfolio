"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { useRouter } from "next/navigation";

export default function Navbar(props) {
  const { activePage } = props;
  const [activeItem, setActiveItem] = useState(activePage || "Home");

  const { push } = useRouter();
  const handleActiveItem = (menuItem) => {
    setActiveItem(menuItem);
    switch (menuItem) {
      case "Home":
        push("/");
        break;
      case "Education Details":
        push("./EducationDetails");
        break;
      case "Projects":
        push("./Projects");
        break;
      case "Work Experience":
        push("./WorkExperience");
        break;
      case "Skills":
        push("./Skills");
        break;
      case "Certificates":
        push("./Certificates");
        break;
      default:
        console.log("Page not found");
        break;
    }
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        {[
          "Home",
          "Education Details",
          "Projects",
          "Work Experience",
          "Skills",
          "Certificates",
        ].map((menuItem) => (
          <li
            key={menuItem}
            className={`${styles.menuItem} ${
              activeItem === menuItem ? styles.active : ""
            }`}
            onClick={() => handleActiveItem(menuItem)}
          >
            {menuItem}
          </li>
        ))}
      </ul>
      <h1 className={styles.name} onClick={()=> push("/")}>Lakshman Bharath Kamepalli</h1>
    </nav>
  );
}
