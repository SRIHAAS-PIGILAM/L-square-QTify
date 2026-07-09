import styles from "./Section.module.css";
import Card from "../Card/Card";

function Section({ title, data, buttonText }) {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>

        <button className={styles.button}>
          {buttonText}
        </button>
      </div>

      <div className={styles.grid}>
        {data.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            follows={item.follows}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Section;