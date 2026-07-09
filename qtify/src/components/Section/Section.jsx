import { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";

function Section({ title, data, buttonText }) {
  const [showAll, setShowAll] = useState(
    title === "Top Albums"
  );

  const displayedData = showAll ? data : data.slice(0, 7);

  const currentButtonText = showAll ? "Collapse" : "Show all";

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>

        <button
          className={styles.button}
          onClick={() => setShowAll(!showAll)}
        >
          {currentButtonText}
        </button>
      </div>

      <div className={styles.grid}>
        {displayedData.map((item) => (
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