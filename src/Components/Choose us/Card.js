import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Card = props => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        background: props.title == "Our Services" ? "transparent" : "#FFFFFF",
        p: 4,
        minWidth: { lg: "370px", md: "370px", sm: "100%", xs: "100%" },
        borderRadius: "12px",
        flex: "auto"
      }}
      direction={"column"}
      spacing={2}
    >
      <Typography variant="h6" sx={{ maxWidth: { lg: "490px" } }}>
        {props.description}
      </Typography>
      <Box sx={{ display: "flex", gap: "13px" }}>
        <Box component="img" src={props.imageurl} />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h6">
            {props.name}
          </Typography>
          <Typography variant="h6">
            {props.role}
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};

export default Card;
