import { Link } from "react-router-dom";
import styles from './Error.module.css'
const Error = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Page not found</h2>
      <Link to="/" className={styles.btn}>
        На главную
      </Link>
    </div>
  );
};
export default Error;
