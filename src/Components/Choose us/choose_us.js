import { Box, Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import OurTeam from "./Leads";
import { useTheme } from "@emotion/react";
import "./animation.css";
import $ from "jquery";

const Chooseus = () => {
  const theme = useTheme();
  const [offsetbool, setoffsetbool] = useState(false);
  const [word1bool, setword1bool] = useState(false);
  const [word2bool, setword2bool] = useState(false);
  const [word3bool, setword3bool] = useState(false);
  function animation() {
    setword1bool(false);
    setword2bool(false);
    setword3bool(false);
    setTimeout(() => {
      setword1bool(true);
      setTimeout(() => {
        setword2bool(true);
        setTimeout(() => {
          setword3bool(true);
        }, 100);
      }, 100);
    }, 100);
  }
  function getOffset() {
    $(window).scroll(function() {
      var offset = $("#chooseus").offset().top;
      console.log(offset);
      if (
        $(window).scrollTop() - offset > 0 &&
        $(window).scrollTop() - offset < 3
      ) {
        setoffsetbool(!offsetbool);
      }
    });
  }
  useEffect(
    () => {
      getOffset();
      animation();
    },
    [offsetbool]
  );

  return (
    <Box
      sx={{
        background: theme.palette.primary.light,
        paddingBlock: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "50px",
        paddingInline: "10px",
        mt: { lg: 15, md: 10, sm: 10, xs: 5 },
        mb: 5,
        pl: { lg: 10, md: 5, sm: 5, xs: 1 },
        pr: { lg: 10, md: 5, sm: 5, xs: 1 }
      }}
      id="chooseus"
    >
      <Box className={word1bool ? "word6" : ""}>
        <Typography variant="h1">Choos Us ?</Typography>
      </Box>
      <Box className={word2bool ? "word7" : ""}>
        <OurTeam />
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          alignItems: "center"
        }}
        className={word3bool ? "word8" : ""}
      >
        <Typography variant="h1">World</Typography>
        <Typography variant="h5" sx={{ color: theme.palette.secondary.main }}>
          Trusted by startups and world largest companies
        </Typography>
        <Button
          variant="outlined"
          sx={{
            width: { lg: "auto", xs: "100%" },
            mt: { lg: 0, xs: 1 },
            pl: 3,
            pr: 3,
            pb: 2,
            pt: 2
          }}
        >
          Let's talk
        </Button>
      </Box>
    </Box>
  );
};

export default Chooseus;
