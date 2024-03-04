import "./App.css";
import Footer from "./Components/Footer/footer";
import { Box, Stack } from "@mui/material";
import About from "./Components/About/about";
import Ourservice from "./Components/Services/service";
import Contact from "./Components/Contact/contact";
import Home from "./Components/Home/home";
import Chooseus from "./Components/Choose us/choose_us";
import Content from "./Components/Services/content";
import Ourstory from "./Components/Story/Ourstory";

function App() {
  return (
    <Stack>
      <Home />
      <Content />
      <Ourservice />
      <About />
      <Ourstory />
      <Chooseus />
      <Contact />
      <Footer />
    </Stack>
  );
}

export default App;
