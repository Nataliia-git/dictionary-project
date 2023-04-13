import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          {" "}
          <h1>Dictionary 📕</h1>
        </header>
        <main>
          <Dictionary defaultKeyWord="sunrise" />
        </main>
        <footer>
          Coded by Nataliia Zazerina 🇺🇦 and{" "}
          <a
            href="https://github.com/Nataliia-git/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
