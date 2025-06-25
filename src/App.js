import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Movies from "./pages/Movies";


function App() {
  return (
    <Router>
      <div className="App">
        <Route></Route>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/movies" component={Movies} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
