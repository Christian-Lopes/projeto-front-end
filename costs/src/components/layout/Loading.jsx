import styles from "./Loading.module.css";
import loading from "../../images/loading.svg";

function Loading() {
  return (
    <div className={styles.loader_container}>
      <img className={styles.loader} src={loading} alt="Loading" />
    </div>
  );
}

export default Loading;
