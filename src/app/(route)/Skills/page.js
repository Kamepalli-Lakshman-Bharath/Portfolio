import styles from "./Skills.module.css";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

export default function Skills() {
  return (
    <>
      <Navbar activePage="Skills" />
      <Footer />
      <div className={styles.grid}>
        <div className={styles.card}>
          <img src="skills-1.png" alt="" />
        </div>
        <div className={styles.card}>
          <img src="skills-2.png" alt="" />
        </div>
        <div className={styles.card}>
          <img src="skills-3.png" alt="" />
        </div>
        <div className={styles.card}>
          <img src="skills-4.png" alt="" />
        </div>
        <div className={styles.card}>
          <img src="skills-5.webp" alt="" />
        </div>
        <div className={styles.card}>
          <img src="skills-6.svg" alt="" />
        </div>
        <div className={styles.card}>
          <img src="skills-7.png" alt="" />
        </div>
        <div className={styles.card}>
          <img src="skills-8.png" alt="" />
        </div>
        <div className={styles.card}>
          <img src="skills-9.png" alt="" />
        </div>
        <div className={styles.card}>
          <img src="skills-10.png" alt="" />
        </div>
      </div>
    </>
  );
}
