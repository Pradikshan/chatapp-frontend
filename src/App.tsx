import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Approutes from "./routes/Approutes";

import { io } from "socket.io-client";

const socket = io("http://localhost:3000/");

function App() {
  return (
    <Router>
      <>
        <Approutes />
      </>
    </Router>
  );
}

export default App;
