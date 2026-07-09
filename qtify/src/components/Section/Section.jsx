import { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";

function Section({ title, data }) {
  const isSongs = title === "Songs";

  const [showAll, setShowAll] = useState(false);

  const displayedData =
    showAll || isSongs
      ? data
      : data.slice(0, 7);

  const currentButtonText =
    showAll ? "Collapse" : "Show all";

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>

        {!isSongs && (
          <button
            className={styles.button}
            onClick={() =>
              setShowAll((prev) => !prev)
            }
          >
            {currentButtonText}
          </button>
        )}
      </div>

      <div className={styles.grid}>
        {displayedData.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            follows={item.follows || item.likes}
            title={item.title}
            type={
              isSongs
                ? "song"
                : "album"
            }
          />
        ))}
      </div>
    </section>
  );
}

export default Section;