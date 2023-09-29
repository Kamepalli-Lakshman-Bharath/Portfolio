import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./projects.module.css";

export default function Projects() {
  return (
    <>
      <Navbar activePage={"Projects"} />
      <Footer />
      <div className={styles.grid}>
        <div className={styles.card}>
          <img src="/Project-1.png" alt="" />
          <div className={styles.card_links}>
            <div>
              <a
                target="_blank"
                href="https://github.com/Kamepalli-Lakshman-Bharath/Admin_Panel_react"
              >
                <img
                  className={styles.link_image}
                  src="github-svgrepo-com.svg"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a
                target="_blank"
                href="https://admin-panel-react-tau.vercel.app/"
              >
                <img
                  className={styles.link_image}
                  src="external-link-svgrepo-com.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <img src="/Project-2.png" alt="" />
          <div className={styles.card_links}>
            <div>
              <a
                target="_blank"
                href="https://github.com/Kamepalli-Lakshman-Bharath/Kafen_ReactApp"
              >
                <img
                  className={styles.link_image}
                  src="github-svgrepo-com.svg"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a target="_blank" href="https://kafen-react-app.vercel.app/">
                <img
                  className={styles.link_image}
                  src="external-link-svgrepo-com.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <img src="/Project-3.png" alt="" />
          <div className={styles.card_links}>
            <div>
              <a
                target="_blank"
                href="https://github.com/Kamepalli-Lakshman-Bharath/Shopping_app_R_LS"
              >
                <img
                  className={styles.link_image}
                  src="github-svgrepo-com.svg"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a target="_blank" href="https://shopping-app-r-ls.vercel.app/">
                <img
                  className={styles.link_image}
                  src="external-link-svgrepo-com.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <img src="/Project-4.png" alt="" />
          <div className={styles.card_links}>
            <div>
              <a
                target="_blank"
                href="https://github.com/Kamepalli-Lakshman-Bharath/QuizAppWithReact"
              >
                <img
                  className={styles.link_image}
                  src="github-svgrepo-com.svg"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a
                target="_blank"
                href="https://quiz-app-with-react-ten.vercel.app/"
              >
                <img
                  className={styles.link_image}
                  src="external-link-svgrepo-com.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <img src="/Project-5.png" alt="" />
          <div className={styles.card_links}>
            <div>
              <a
                target="_blank"
                href="https://github.com/Kamepalli-Lakshman-Bharath/moviesApp"
              >
                <img
                  className={styles.link_image}
                  src="github-svgrepo-com.svg"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a
                target="_blank"
                href="https://movies-app-liart-delta.vercel.app/"
              >
                <img
                  className={styles.link_image}
                  src="external-link-svgrepo-com.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <img src="/Project-6.png" alt="" />
          <div className={styles.card_links}>
            <div>
              <a
                target="_blank"
                href="https://github.com/Kamepalli-Lakshman-Bharath/IPLAPP_React"
              >
                <img
                  className={styles.link_image}
                  src="github-svgrepo-com.svg"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a
                target="_blank"
                href="https://heroic-moxie-049eb4.netlify.app/"
              >
                <img
                  className={styles.link_image}
                  src="external-link-svgrepo-com.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img src="/Project-7.png" alt="" />
          <div className={styles.card_links}>
            <div>
              <a
                target="_blank"
                href="https://github.com/Kamepalli-Lakshman-Bharath/React-Assignment2"
              >
                <img
                  className={styles.link_image}
                  src="github-svgrepo-com.svg"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a
                target="_blank"
                href="https://react-assignment2-sigma.vercel.app/"
              >
                <img
                  className={styles.link_image}
                  src="external-link-svgrepo-com.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <img src="/Project-8.png" alt="" />
          <div className={styles.card_links}>
            <div>
              <a
                target="_blank"
                href="https://github.com/Kamepalli-Lakshman-Bharath/vegan-store"
              >
                <img
                  className={styles.link_image}
                  src="github-svgrepo-com.svg"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a
                target="_blank"
                href="https://kamepalli-lakshman-bharath.github.io/vegan-store/"
              >
                <img
                  className={styles.link_image}
                  src="external-link-svgrepo-com.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
