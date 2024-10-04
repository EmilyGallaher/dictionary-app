import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
         <footer>
          This project was coded by Emily Gallaher and is{" "}
          <a
            href="https://github.com/EmilyGallaher/dictionary-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://cozy-caramel-b029da.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
