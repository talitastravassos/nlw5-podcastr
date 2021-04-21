import Header from "../components/Header";
import Player from "../components/Player";
import styles from "../styles/app.module.scss";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Component {...pageProps} />
        <Header />
      </main>
      <Player />
    </div>
  );
}

export default MyApp;
