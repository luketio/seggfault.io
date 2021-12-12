import styles from "../styles/Loading.module.scss";

export default function Loading() {
  return(
    <div className={styles.wrap} id="loading">
      <div className={styles.loading}>
        <div className={styles.bounceball}></div>
        <div className={styles.text}>LOADING</div>
      </div>
    </div>
  );
}
