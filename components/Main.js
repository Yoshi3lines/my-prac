import { Headline } from "../components/Headline";
import { Links } from "../components/Links";
import styles from "../styles/Home.module.css";

export function Main(props) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Headline page={props.page}>
          {<code className={styles.code}>pages/{props.page}.js</code>}
        </Headline>
        <Links />
      </main>
    </div>
  );
}
