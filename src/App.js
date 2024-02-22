import "./App.css";
import Footer from "./Components/Footer/footer";
import { Box } from "@mui/material";
import About from "./Components/About/about";
import Ourservice from "./Components/Services/service";
import Contact from "./Components/Contact/contact";
import Home from "./Components/Home/home";
import Chooseus from "./Components/Choose us/choose_us";

function App() {
  return (
    <Box>
      <Home />
      <About />
      <Ourservice />
      <Chooseus />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
