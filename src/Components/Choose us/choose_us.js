import { Box, Button, Typography } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import OurTeam from "./Leads";
import { useTheme } from "@emotion/react";
import "./animation.css";

const Chooseus = () => {
  const theme = useTheme();
  const [word1bool, setword1bool] = useState(false);
  const [word2bool, setword2bool] = useState(false);
  const [word3bool, setword3bool] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when target element comes into view
        if (entry.isIntersecting) {
          setIsVisible(true);
          animation();

          // Disconnect observer to stop observing once animation is triggered
          observer.disconnect();
        }
      },
      { threshold: 1.0 }
    ); // Adjust threshold as needed

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Cleanup function
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <Box sx={{ overflowY: "auto" }}>
      <Box ref={targetRef} sx={{ paddingBlock: { lg: "100px", xs: "20px" } }}>
        {isVisible
          ? <Box
              sx={{
                background: theme.palette.primary.light,
                // paddingBlock: "80px",
                display: "flex",
                flexDirection: "column",
                gap: "50px",
                paddingInline: "10px",
                mt: { lg: 0, md: 10, sm: 10, xs: 5 },
                mb: 5,
                pt: 2,
                pb: 2,
                pl: { lg: 10, md: 5, sm: 5, xs: 1 },
                pr: { lg: 10, md: 5, sm: 5, xs: 1 }
              }}
            >
              {" "}<Box className={word1bool ? "word6" : ""}>
                <Typography variant="h1">Choose Us ?</Typography>
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
                <Typography
                  variant="h5"
                  sx={{ color: theme.palette.secondary.main }}
                >
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
          : ""}
      </Box>
    </Box>
  );
};

export default Chooseus;
