import Routes from "./config/routers";
import "./index.css";
import Navbar from "./navigation/Navbar";

function App() {
  return (
    
    <div>
      <Navbar />
      <Routes></Routes>
    </div>
  );
}

export default App