import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import styles from "./RightNavigation.module.css";

function RightNavigation() {
  return (
    <button className={`${styles.button} custom-next`}>
      <ChevronRightIcon />
    </button>
  );
}

export default RightNavigation;