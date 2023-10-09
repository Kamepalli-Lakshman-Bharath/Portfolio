import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Certificates.module.css";
export default function Certificates() {
  return (
    <>
      <Navbar activePage="Certificates" />
      <Footer />
      <h1 className={styles.heading}>Certificates</h1>
      <div className={styles.card}>
        <p>
          <span className={styles.title}>Name</span>: Web Development
          fundamentals.
        </p>
        <p>
          <span className={styles.title}>Skills</span>: HTML5, CSS3, JAVASCRIPT.{" "}
        </p>
        <p>
          <span className={styles.title}>Issued by</span>: EDYODA DIGITAL
          UNIVERSITY.
        </p>
        <p>
          <span className={styles.title}>Description</span>: My web development
          certification includes HTML5, CSS3, JavaScript, and jQuery expertise,
          demonstrating my ability to create engaging websites with interactive
          features.
        </p>
        <p>
          <a
            target="_blank"
            className={styles.link}
            href="https://edyodalms.s3.amazonaws.com/files/certificates/Kamepalli_Lakshman_Bharath_achivement_Web_Dev_Fundamentals_Certification_12056_Qr_code_.png"
          >
            Click here
          </a>
        </p>
      </div>

      <div className={styles.card}>
        <p>
          <span className={styles.title}>Name</span>: React Certification.
        </p>
        <p>
          <span className={styles.title}>Skills</span>: React js, React Redux
          Toolkit.
        </p>
        <p>
          <span className={styles.title}>Issued by</span>: EDYODA DIGITAL
          UNIVERSITY.
        </p>
        <p>
          <span className={styles.title}>Description</span>: Certified in React,
          I excel at building captivating web applications and enhancing user
          experiences through React's powerful capabilities.
        </p>
        <p>
          <a
            target="_blank"
            className={styles.link}
            href="https://edyodalms.s3.amazonaws.com/files/certificates/Lakshman__Bharath_achivement_ReactJS_Certification_15498_Qr_code_.png"
          >
            Click here
          </a>
        </p>
      </div>

      <div className={styles.card}>
        <p>
          <span className={styles.title}>Name</span>: MongoDB Express and Node.js (MEN) Certification
        </p>
        <p>
          <span className={styles.title}>Skills</span>: MongoDB, Express and Node.js.
        </p>
        <p>
          <span className={styles.title}>Issued by</span>: EDYODA DIGITAL
          UNIVERSITY.
        </p>
        <p>
          <span className={styles.title}>Description</span>: Demonstrated proficiency in developing and deploying web applications using MongoDB, Express, and Node.js. Expertise in RESTful API design, authentication, and authorization.
        </p>
        <p>
          <a
            target="_blank"
            className={styles.link}
            href="https://edyodalms.s3.amazonaws.com/files/certificates/Lakshman__Bharath_achivement_Node_Express_Mongo_Certification_16292_Qr_code_.png"
          >
            Click here
          </a>
        </p>
      </div>

      <div className={styles.card}>
        <p>
          <span className={styles.title}>Name</span>: Job Focussed Professional
          Communication Certificate.
        </p>
        <p>
          <span className={styles.title}>Skills</span>: Communication, Team Mangement, LeaderShip Skills
        </p>
        <p>
          <span className={styles.title}>Issued by</span>: EDYODA DIGITAL
          UNIVERSITY.
        </p>
        <p>
          <span className={styles.title}>Description</span>: I possess a
          Job-Focused Professional Communication Certificate, emphasizing my
          strong communication skills and readiness for the professional world.
          This certification underscores my ability to effectively convey ideas
          and collaborate within the workplace.
        </p>
        <p>
          <a
            target="_blank"
            className={styles.link}
            href="https://edyodalms.s3.amazonaws.com/files/certificates/Lakshman__Bharath_achivement_Job_Focussed_Professional_Communication_Certification_16685_Qr_code.png"
          >
            Click here
          </a>
        </p>
      </div>
    </>
  );
}
