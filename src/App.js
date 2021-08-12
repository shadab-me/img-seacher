import Header from "./components/common/Header";
import Home from "./components/Home";
import SearchBar from "./components/search/SearchBar";
import "./styles/main.css";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Home />
    </div>
  );
}

export default App;
