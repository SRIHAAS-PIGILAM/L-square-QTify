import { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";

function Section({ title, data }) {
  const initiallyExpanded = title === "Top Albums";

  const [showAll, setShowAll] = useState(initiallyExpanded);

  const displayedData = showAll ? data : data.slice(0, 7);

  const currentButtonText = showAll ? "Collapse" : "Show all";

  const gridClass =
    showAll && displayedData.length > 7
      ? `${styles.grid} ${styles.expandedGrid}`
      : styles.grid;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>

        <button
          className={styles.button}
          onClick={() => setShowAll((prev) => !prev)}
        >
          {currentButtonText}
        </button>
      </div>

      <div className={gridClass}>
        {displayedData.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            follows={item.follows}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
}

export default Section;