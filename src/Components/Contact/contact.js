import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Video from "../../Assets/video/contact.mp4";
import Form from "./Form";
import { useTheme } from "@emotion/react";
import $ from "jquery";

const Contact = () => {
  const theme = useTheme();
  useEffect(() => {
    window.scrollTo(0, 0);
    var video = document.getElementById("video-1");
    video.play();
    getOffset();
  }, []);
  function getOffset() {
    $(window).scroll(function() {
      var offset = $("#contactus").offset().top;
      console.log(offset);
    });
  }
  return (
    <Box
      sx={{
        paddingBlock: { lg: "100px", md: "60px", sm: "60px", xs: "20px" },
        pl: { lg: 10, md: 0, sm: 0, xs: 0 },
        pr: { lg: 10, md: 0, sm: 0, xs: 0 }
      }}
      id="contactus"
    >
      <Box
        sx={{
          textAlign: "center",
          width: "100%",
          position: "relative",
          pb: 10,
          pt: 10
        }}
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
            id="video-1"
            type="video/mp4"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: { lg: "nowrap", xs: "wrap" },
            justifyContent: "space-between",
            width: "89.4%",
            alignItems: "baseline",
            margin: { xs: "auto" }
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              textAlign: { lg: "left", xs: "center" },
              gap: "14px",
              width: { lg: "44.7%", xs: "auto" },
              pl: 1,
              color: theme.palette.secondary.main,
              margin: { lg: "initial", xs: "auto" }
            }}
          >
            <Typography variant="h2">Get to know us</Typography>
            <Typography
              variant="h6"
              sx={{ color: theme.palette.secondary.main }}
            >
              Got a project in mind? Share the details and we’ll figure out the
              next move together.
            </Typography>
          </Box>
          <Form />
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
