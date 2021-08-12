import Header from "./components/common/Header";
import Home from "./components/Home";
import { useState } from "react";
import useFetch from "./components/hooks/useFetch";
import SearchBar from "./components/search/SearchBar";
import "./styles/main.css";

function App() {
  const [callInput, setCallInput] = useState("");

  return (
    <div className="App">
      <Header />
      <SearchBar callInput={callInput} setCallInput={setCallInput} />
      <Home callInput={callInput} />
    </div>
  );
}

export default App;
