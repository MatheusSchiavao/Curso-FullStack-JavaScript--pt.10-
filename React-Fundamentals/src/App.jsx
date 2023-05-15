import Title from "./components/title";
import Subtitle from "./components/subtitle";
import StatusText from "./components/statusText";
import styles from "./App.module.css"

export default function App() {
  return (
    <div className={styles.app}>
      <Title />
      <Subtitle />
      <StatusText />
    </div>
  );
}
