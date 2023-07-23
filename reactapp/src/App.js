import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Navigation from "./components/navbar/Navigation";
import { useEffect } from "react";
import LavaAnimation from "./components/lavaAnimation/LavaAnimation";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <body>
        <Sidebar />
        <LavaAnimation />
        <Home />
      </body>
    </div>
  );
}

export default App;
