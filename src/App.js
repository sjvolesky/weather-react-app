import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Denver" />
        <footer>
          This project was coded by Samantha Volesky and is{" "}
          <a
            href="https://github.com/sjvolesky/weather-react-app.git"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
