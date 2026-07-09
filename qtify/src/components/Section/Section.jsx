import styles from "./Section.module.css";
import Card from "../Card/Card";

function Section({ title, data }) {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <button className={styles.collapse}>Collapse</button>
      </div>

      <div className={styles.grid}>
        {data.map((album) => (
          <Card
            key={album.id}
            image={album.image}
            follows={album.follows}
            title={album.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Section;