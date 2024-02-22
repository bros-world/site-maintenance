import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Card = props => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        background: props.title == "Our Services" ? "#FFFFFF" : "#FFFFFF",
        p: 5,
        width: { lg: "auto", md: "auto", sm: "100%", xs: "100%" },
        borderRadius: "10px",
        flex: "auto"
      }}
      direction={"column"}
      spacing={2}
    >
      <Box component="img" src={props.imageurl} sx={{ maxWidth: "130px" }} />
      <Typography variant={props.title == "Our Services" ? "h3" : "h5"}>
        {props.title}
      </Typography>
      <Typography variant="h6" sx={{ maxWidth: { lg: "470px" } }}>
        {props.description}
      </Typography>
    </Stack>
  );
};

export default Card;
