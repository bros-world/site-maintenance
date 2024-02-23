import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Card = props => {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        justifyContent: "center",
        background: props.title == "Our Services" ? "#FFFFFF" : "#FFFFFF",
        pl: 2,
        pr: 2,
        pt: 2.5,
        pb: 2.5,
        width: { lg: "30%", md: "40%", sm: "100%", xs: "100%" },
        borderRadius: "4px"
      }
      // flex: "auto"
      }
      direction={"column"}
      spacing={2}
    >
      <Box component="img" src={props.imageurl} sx={{ maxWidth: "110px" }} />
      <Typography variant={props.title == "Our Services" ? "h4" : "h5"}>
        {props.title}
      </Typography>
      <Typography
        variant="h6"
        sx={{ maxWidth: { lg: "470px" }, color: "#42575F" }}
      >
        {props.description}
      </Typography>
    </Stack>
  );
};

export default Card;
