import styles from "../app/page.module.css";

export default function NextLevelTransition() {
  return (
    <div className={styles.myComponentContainer}>
      <video className={styles.videoBackground} autoPlay muted loop>
        <source src="/nextLevel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Your component content goes here */}
      <h1>Hello, I'm a component with a video background!</h1>
    </div>
  );
}
