import { useTheme } from "@emotion/react";
import { Stack, Typography } from "@mui/material";
import React from "react";

const About = () => {
  const theme = useTheme();
  return (
    <Stack
      direction={"column"}
      spacing={4}
      sx={{
        paddingBlock: { lg: "100px", xs: "60px" },
        textAlign: { lg: "left", md: "left", sm: "left", xs: "center" },
        pl: { lg: 10, md: 5, sm: 5, xs: 2 },
        pr: { lg: 10, md: 5, sm: 5, xs: 2 }
      }}
    >
      <Typography variant="h2" sx={{ color: theme.palette.secondary.dark }}>
        Hi, We are Brosworld
      </Typography>
      <Typography
        variant="h6"
        sx={{ width: { lg: "65%", md: "100%", sm: "100%", xs: "100%" } }}
      >
        Welcome to Brosworld!, where technology meets innovation to propel your
        business forward. With a focus on customer-centric software solutions,
        our team of experts is dedicated to helping you achieve operational
        excellence and a competitive edge.
      </Typography>
    </Stack>
  );
};

export default About;
