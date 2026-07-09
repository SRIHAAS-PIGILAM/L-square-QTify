import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

function Card({
  image = "https://picsum.photos/159/205",
  follows = 100,
  title = "New English Songs",
  type = "album",
}) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <img
          src={image}
          alt={title}
          className={styles.image}
        />

        <div className={styles.bottomSection}>
          <Chip
            label={`${follows} ${
              type === "song" ? "Likes" : "Follows"
            }`}
            size="small"
            className={styles.chip}
          />
        </div>
      </div>

      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default Card;