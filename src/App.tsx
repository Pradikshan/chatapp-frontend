import { BrowserRouter as Router } from "react-router-dom";
import Approutes from "./routes/Approutes";

import { io } from "socket.io-client";
import useAppStore from "./store/store";

function App() {
  const socket = io("http://localhost:3000");
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
