import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieSearch from "./MovieSearch";
import MovieDetails from "./MovieDetails";
import Menu from "./Menu";

function App() {
  return (
    <Router>
      <Menu />
      <div>
        <Routes>
          <Route exact path="/" Component={MovieSearch} />
          <Route path="/movie/:id" Component={MovieDetails} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
