import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Video from "../../Assets/video/contact.mp4";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Logo from "../../Assets/Icons/brand.png";
import "./animation.css";
import { useTheme } from "@emotion/react";
import $ from "jquery";

const Home = () => {
  const theme = useTheme();
  const [offsetbool, setoffsetbool] = useState(false);
  const [word1bool, setword1bool] = useState(false);
  const [word2bool, setword2bool] = useState(false);
  const [word3bool, setword3bool] = useState(false);
  const [word4bool, setword4bool] = useState(false);
  const [word5bool, setword5bool] = useState(false);

  function animation() {
    setword1bool(false);
    setword2bool(false);
    setword3bool(false);
    setword4bool(false);
    setword5bool(false);
    setTimeout(() => {
      setword1bool(true);

      setTimeout(() => {
        setword2bool(true);
        setTimeout(() => {
          setword3bool(true);
          setTimeout(() => {
            setword4bool(true);
            setTimeout(() => {
              setword5bool(true);
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 1000);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    var video = document.getElementById("video");
    video.play();
    animation();
  }, []);

  return (
    <Box
      sx={{
        textAlign: "center",
        width: "100%",
        position: "relative",
        pb: { lg: 24, xs: 20 },
        pt: { lg: 24, xs: 20 }
      }}
      id="home"
    >
      <Box>
        <video
          style={{
            width: "100%",
            height: "100%",
            zIndex: -1,
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0
          }}
          src={Video}
          loop
          muted
          id="video"
          type="video/mp4"
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          textAlign: { lg: "left", xs: "center" },
          gap: "14px",
          color: theme.palette.secondary.main,
          pl: { lg: 10, md: 5, sm: 5, xs: 2 },
          pr: { lg: 10, md: 5, sm: 5, xs: 2 }
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
            marginTop: { lg: "-140px", xs: "-135px" }
          }}
        >
          <Box component="img" src={Logo} sx={{ maxWidth: "130px" }} />

          <Typography variant="h6" sx={{ color: theme.palette.secondary.main }}>
            Brosworld
          </Typography>
        </Box>
        <Typography
          className={word1bool ? "word1" : ""}
          variant="h1"
          sx={{
            pt: { lg: 20, xs: 8 },
            visibility: word1bool ? "visible" : "hidden"
          }}
        >
          {" "}Simplified{" "}
        </Typography>
        <Typography
          className={word2bool ? "word2" : ""}
          variant="h1"
          sx={{
            paddingLeft: { lg: "210px" },
            visibility: word2bool ? "visible" : "hidden"
          }}
        >
          Tech for{" "}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
            flexWrap: "wrap",
            gap: "15px",
            alignItems: "center"
          }}
        >
          <Typography
            className={word3bool ? "word3" : ""}
            variant="h1"
            sx={{ visibility: word3bool ? "visible" : "hidden" }}
          >
            Business.
          </Typography>
          <Button
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            sx={{
              height: "fit-content",
              marginTop: "7px",
              pl: { lg: 1, md: 2, sm: 2 },
              pr: { lg: 1, md: 2, sm: 2 },
              pt: { lg: 1, md: 1.5, sm: 1.5 },
              pb: { lg: 1, md: 1.5, sm: 1.5 },
              margin: { lg: "unset", sm: "unset", md: "unset", xs: "auto" },
              visibility: word4bool ? "visible" : "hidden"
            }}
            className={word4bool ? "word4" : ""}
          >
            Contact Us
          </Button>
        </Box>
        <Typography
          className={word5bool ? "word5" : ""}
          variant="h6"
          sx={{
            maxWidth: { lg: "50%", xs: "auto" },
            color: theme.palette.secondary.main,
            mt: { lg: 0, md: 0, sm: 0, xs: 3 },
            visibility: word5bool ? "visible" : "hidden"
          }}
        >
          We develop & implement products that increase conversion, reduce cost
          and build awesome user experience.{" "}
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
