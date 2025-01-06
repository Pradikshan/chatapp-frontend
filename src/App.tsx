import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Approutes from "./routes/Approutes";

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
