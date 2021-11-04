import './App.css';
import { useColorMode } from "@chakra-ui/react"
import {
  BrowserRouter as Router,
} from "react-router-dom";

import AppRoutes from "./routes";

function App() {
  const { colorMode, toggleColorMode } = useColorMode()

  if (colorMode === "light") {
    toggleColorMode();
  }

  return (
    <Router>
      <AppRoutes/>
    </Router>
  );
}

export default App;
