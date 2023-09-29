import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./EducationDetails.module.css";

export default function EducationDetails() {
  return (
    <>
      <Navbar activePage="Education Details" />
      <Footer />
      <h1 className={styles.heading}>Education Details</h1>
      <div className={styles.card}>
        <div className={styles.details}><p><span className={styles.title}>Education</span>: Bachelor' Degree.</p>
        <p><span className={styles.title}>Batch</span>: Electronics, Computer Science, Mathematics.</p>
        <p><span className={styles.title}>College</span>: ASN Degree College, Tenali, Andhra Pradesh.</p>
        <p><span className={styles.title}>University</span>: Acharya Nagarjuna University.</p>
        <p><span className={styles.title}>CGPA</span>: 7.09</p>
        <p><span className={styles.title}>Year</span>: 2019 - 2022.</p>
        </div>
        <div className={styles.image}> <img src="image-2.jpg" alt="" /></div>
        
      </div>
      <div className={styles.card}>
        <div className={styles.details}> <p><span className={styles.title}>Education</span>: Intermediate.</p>
        <p><span className={styles.title}>Batch</span>: Maths, Physics, Chemistry.</p>
        <p><span className={styles.title}>College</span>: NRI Junior College, Tenali, Andhra Pradesh</p>
        <p><span className={styles.title}>Board</span>: Board of Intermediate Education.</p>
        <p><span className={styles.title}>CGPA</span>: 7.96</p>
        <p><span className={styles.title}>Year</span>: 2017 - 2019.</p>
        </div>
        <div className={styles.image}> <img src="image-4.jpg" alt="" /></div>
     
      </div>
      <div className={styles.card}>
        <div className={styles.details}><p><span className={styles.title}>Education</span>: 10<sup>th.</sup></p>
        <p><span className={styles.title}>School</span>: Sri Chaitanya High School, Tenali, Andhra Pradesh.</p>
        <p><span className={styles.title}>Board</span>: Board of Secondary Education.</p>
        <p><span className={styles.title}>CGPA</span>: 9.2</p>
        <p><span className={styles.title}>Year</span>: 2017.</p>
        </div>
        <div className={styles.image}> <img src="image-3.jpg" alt="" /></div>
      
      </div>
    </>
  );
}
