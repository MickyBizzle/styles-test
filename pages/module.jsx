import Link from "next/link";
import styles from "../components/Module.module.scss";

const Module = () => (
  <div>
    Using scss module <br />
    <br />
    <button className={styles.Button}>Click me</button>
    <br />
    <br />
    <Link href="/">Go to emotion example</Link>
  </div>
);

export default Module;
