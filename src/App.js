import "./App.scss";
import Header from "./components/header/Header";
import CharactersPage from "./components/characters-page/CharactersPage";
import { Routes, Route } from "react-router-dom";
import EpisodesPage from "./components/episodes-page/EpisodesPage";
import CardDetails from "./components/card-details/CardDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<CharactersPage />} />
        <Route path="/episodes" element={<EpisodesPage />} />
        <Route path=":charId" element={<CardDetails />} />
      </Routes>
    </div>
  );
}

export default App;
