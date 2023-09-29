import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact_menu}>
        <h1 className={styles.footer_heading}>Contact Details :</h1>
        <div className={styles.mail}>
          <div className={styles.mail_image}>
            <img src="/mail-svgrepo-com.svg" alt="" /> 
          </div>
          &nbsp; : kamepallilakshmanbharathk4@gmail.com
        </div>
        <div className={styles.mobile}>
          <div className={styles.mobile_image}>
            <img src="/call-receive-svgrepo-com.svg" alt="" />
          </div>
          &nbsp; : +91 9533894489
        </div>
      </div>
      <div className={styles.mylinks}>
        <div>
          <a
            href="https://github.com/Kamepalli-Lakshman-Bharath"
            target="_blank"
          >
            <img
              className={styles.github_image}
              src="/github-svgrepo-com.svg"
              alt=""
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/bharath-k-03bb9b27b/"
            target="_blank"
          >
            <img
              src="/linkedin-svgrepo-com.svg"
              alt=""
              className={styles.linkedin_image}
            />
          </a>
        </div>
        <div>
          <a
            href="https://codepen.io/Kamepalli-Lakshman-Bharath"
            target="_blank"
          >
            <img
              src="/codepen-svgrepo-com.svg"
              alt=""
              className={styles.codepen_image}
            />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/i_k.l.bharath/" target="_blank">
            <img
              src="/instagram-svgrepo-com.svg"
              alt=""
              className={styles.codepen_image}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
