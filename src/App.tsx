import Paper from "./components/Paper/Paper.tsx";
import Header from "./features/Header/Header.tsx";
import Summary from "./features/Summary/Summary.tsx";
import Skills from "./features/Skills/Skills.tsx";
import Experience from "./features/Experience/Experience.tsx";
import Education from "./features/Education/Education.tsx";
import DownloadButton from "./components/DownloadButton/DownloadButton.tsx";
import Footer from "./components/Footer/Footer.tsx";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <DownloadButton />
      <Paper>
        <Header />
        <main className={styles.main}>
          <Summary />
          <Skills />
          <Experience />
          <Education />
        </main>
        <Footer />
      </Paper>
    </>
  );
}

export default App;
