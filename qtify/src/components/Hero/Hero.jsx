import styles from "./Hero.module.css";
import Headphones from "../../assets/vibrating-headphone 1.png";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.text}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>

      <div>
        <img
          src={Headphones}
          alt="headphones"
          className={styles.image}
        />
      </div>
    </div>
  );
}

export default Hero;