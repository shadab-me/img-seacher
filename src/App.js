import Header from "./components/common/Header";
import Home from "./components/Home";
import { useState } from "react";
import useFetch from "./components/hooks/useFetch";
import SearchBar from "./components/search/SearchBar";
import "./styles/main.css";

function App() {
  const [userInput, setUserInput] = useState("");
  console.log(userInput);
  return (
    <div className="App">
      <Header />
      <SearchBar userInput={userInput} setUserInput={setUserInput} />
      <Home userInput={userInput} />
    </div>
  );
}

export default App;
