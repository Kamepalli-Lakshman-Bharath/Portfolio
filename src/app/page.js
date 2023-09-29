import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <Footer />
      <main className={styles.main}>
        <div className={styles.left}>
          <h1 className={styles.heading}>Hello, I'm Bharath, </h1> 
          <p className={ styles.description}>A Full Stack Developer with a passion for building web applications. Welcome to my portfolio website, where I showcase my expertise in both front-end and back-end development. Explore my projects to see how I create seamless user experiences and robust server-side solutions. If you have any questions or project ideas, don't hesitate to reach out. Let's build something amazing together!</p>
        </div>
        <div className={styles.right}>
          <img src="/image-1.jpg" alt="" />
        </div>
      </main>
    </>
  );
}
