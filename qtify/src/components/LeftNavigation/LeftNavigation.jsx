import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import styles from "./LeftNavigation.module.css";

function LeftNavigation() {
  return (
    <button className={`${styles.button} custom-prev`}>
      <ChevronLeftIcon />
    </button>
  );
}

export default LeftNavigation;