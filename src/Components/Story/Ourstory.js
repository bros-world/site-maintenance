import { Box, Typography, useTheme } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import StoryImg from "../../Assets/Images/story.png";
import "./animation.css";

const Ourstory = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const storyRef = useRef(null);
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

    if (storyRef.current) {
      observer.observe(storyRef.current);
    }

    // Cleanup function
    return () => {
      if (storyRef.current) {
        observer.unobserve(storyRef.current);
      }
    };
  }, []);

  return (
    <Box sx={{ paddingBlock: "20px" }}>
      <Box ref={storyRef}>
        {isVisible
          ? <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                paddingInline: {
                  lg: "100px",
                  xs: "10px",
                  sm: "60px",
                  md: "80px"
                },
                alignItems: "center",
                justifyContent: "space-between",
                gap: { lg: "90px" }
              }}
            >
              <Box
                sx={{ width: { lg: "41%", sm: "41%", md: "41%", xs: "100%" } }}
                className="story-img"
              >
                <Box
                  component="img"
                  src={StoryImg}
                  sx={{ width: "100%", mt: { xs: 4 } }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                  width: { lg: "50%", sm: "50%", md: "50%", xs: "100%" },
                  mt: 3
                }}
                className="story"
              >
                <Typography
                  variant="h1"
                  sx={{ color: theme.palette.secondary.dark }}
                >
                  Our Story
                </Typography>
                <Typography variant="h5">
                  Brosworld was founded on the belief that technology can
                  transform the way businesses operate. With years of industry
                  experience and a passion for excellence, we have grown into a
                  leading software services provider, trusted by clients across
                  various sectors.
                </Typography>
              </Box>
            </Box>
          : ""}
      </Box>
    </Box>
  );
};

export default Ourstory;
