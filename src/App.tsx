import { BrowserRouter as Router } from "react-router-dom";
import Approutes from "./routes/Approutes";

import { io } from "socket.io-client";
import useAppStore from "./store/store";

const socket = io("http://localhost:3000");

function App() {
  const setSocket = useAppStore((state) => state.setSocket);

  setSocket(socket);

  return (
    <Router>
      <>
        <Approutes />
      </>
    </Router>
  );
}

export default App;
