import { Box, Typography, useTheme } from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import AboutImg from "../../Assets/Images/about.png";
import "./animation.css";

const About = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when target element comes into view
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect observer to stop observing once animation is triggered
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    ); // Adjust threshold as needed

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    // Cleanup function
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);
  return (
    <Box>
      <Box ref={aboutRef}>
        {isVisible
          ? <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                paddingBlock: { lg: "80px", xs: "60px" },
                paddingInline: {
                  lg: "100px",
                  xs: "10px",
                  sm: "60px",
                  md: "80px"
                },
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: {
                  xs: "column-reverse",
                  lg: "row",
                  md: "row",
                  sm: "row"
                },
                gap: { lg: "90px", xs: "20px" }
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                  width: { lg: "50%", sm: "50%", md: "50%", xs: "100%" }
                }}
                className="about"
              >
                <Typography
                  variant="h1"
                  sx={{ color: theme.palette.secondary.dark, mt: 3 }}
                >
                  About Us
                </Typography>
                <Typography variant="h5">
                  Our Mission: To empower businesses through high-quality,
                  customized software solutions that enhance efficiency,
                  productivity, and profitability.
                </Typography>
              </Box>
              <Box
                sx={{ width: { lg: "41%", sm: "41%", md: "41%", xs: "100%" } }}
                className="about-img"
              >
                <Box
                  component="img"
                  src={AboutImg}
                  sx={{ width: "100%", mt: { xs: 4 } }}
                />
              </Box>
            </Box>
          : ""}
      </Box>
    </Box>
  );
};

export default About;
