import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Navigation from "./components/navbar/Navigation";
import { useEffect } from "react";
import LavaAnimation from "./components/lavaAnimation/LavaAnimation";
import "./app.css";
function App() {
  return (
    <div className="App">
      <div className="nav">
        <Navigation />
      </div>
      <Sidebar />
      <LavaAnimation
        width={window.innerWidth - 15}
        height={window.innerHeight}
        ballSizeFactor={0.6}
      />
      <div className="home">
        <Home />
      </div>
    </div>
  );
}

export default App;
