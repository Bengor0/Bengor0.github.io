import React from "react";
import { useState } from "react";
import Headline from "./components/Headline";
import SearchGoogle from "./components/SearchGoogle";
import DownloadOptions from "./components/DownloadOptions";
import SearchList from "./components/SearchList";
import "./App.css";

export default function App() {
  const [previousQuery, setPreviousQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [isErrorAnimated, setIsErrorAnimated] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [initialSearch, setInitialSearch] = useState(true);

  const animateError = () => {
    !isErrorAnimated && setIsErrorAnimated(true);
  };

  return (
    <>
      <header
        className="flex-container top-container"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <Headline
          error={error}
          isErrorAnimated={isErrorAnimated}
          setIsErrorAnimated={setIsErrorAnimated}
        />
      </header>
      <main className="flex-container center-content">
        <SearchGoogle
          setResults={setResults}
          setPreviousQuery={setPreviousQuery}
          error={error}
          setError={setError}
          animateError={animateError}
          setInitialSearch={setInitialSearch}
        />
        <DownloadOptions
          results={results}
          query={previousQuery}
          initialSearch={initialSearch}
          isCheckboxChecked={isCheckboxChecked}
          setIsCheckboxChecked={setIsCheckboxChecked}
        />
        <SearchList results={results} isCheckboxChecked={isCheckboxChecked} />
      </main>
      <footer></footer>
    </>
  );
}
