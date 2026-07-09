import { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";

function Section({ title, data, collapsed }) {
  const [showAll, setShowAll] = useState(!collapsed);

  const displayedData = showAll ? data : data.slice(0, 7);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>

        <button
          className={styles.button}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Collapse" : "Show all"}
        </button>
      </div>

      <div className={styles.grid}>
        {displayedData.map((album) => (
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