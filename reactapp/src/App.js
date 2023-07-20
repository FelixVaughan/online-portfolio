import "./App.css";
import Sidebar from "./components//sidebar/Sidebar";
import Home from "./pages/Home";
import Navigation from "./components/navbar/Navigation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <body>
        <Sidebar />
        <Home />
      </body>
    </div>
  );
}

export default App;
