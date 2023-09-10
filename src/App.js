import Navigation from "./components/Navigation/Navigation";
import Auth from "./components/Auth/Auth";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AskQuestion from "./components/AskQuestion/AskQuestion";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/Auth" element={<Auth />} />
          <Route path="/AskQuestion" element={<AskQuestion />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
