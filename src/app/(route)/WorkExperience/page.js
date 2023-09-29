import Navbar from "../../Components/Navbar/Navbar";
import styles from "./WorkExperience.module.css";
import Footer from "../../Components/Footer/Footer";

export default function WorkExperience() {
  return (
    <>
      <Navbar activePage="Work Experience" />
      <Footer />
      <h1 className={styles.heading}>Experience</h1>
      <div className={styles.card}>
        <p><span className={styles.title}>Job Title</span>: Scholar Trainee.</p>
        <p><span className={styles.title}>Company Name</span>: Wipro.</p>
        <p><span className={styles.title}>Dates of Employeement</span>: Sep 28 2022 - Feb 21 2023.</p>
        <p><span className={styles.title}>Key Responsibilties and achivements</span>: As a Scholar Trainee at Wipro, I actively attended classes, participated in class activities, achieved high scores in training milestones, and successfully completed a capstone project. I gained hands-on experience in developing .NET applications and demonstrated proficiency in logical building using C#.</p>
        <p><span className={styles.title}>Relavent Skills</span>: C#/.NET development.</p>
      </div>
    </>
  );
}
