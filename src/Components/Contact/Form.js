import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { useTheme } from "@emotion/react";

const Form = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        gap: "16px",
        width: { lg: "44.7%", xs: "auto" },
        mt: { xs: 3 },
        justifyContent: "center",
        margin: "auto"
      }}
    >
      <TextField
        placeholder="Name"
        inputProps={{
          sx: {
            "&::placeholder": {
              color: theme.palette.secondary.main,
              opacity: 1
            }
          }
        }}
      />
      <TextField
        placeholder="Email"
        inputProps={{
          sx: {
            "&::placeholder": {
              color: theme.palette.secondary.main,
              opacity: 1
            }
          }
        }}
      />
      <TextField
        placeholder="We want to grt to know you! Use this field to introduce yourself"
        minRows={3}
        inputProps={{
          sx: {
            "&::placeholder": {
              color: theme.palette.secondary.main,
              opacity: 1
            }
          }
        }}
        multiline
      />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            pb: 1
          }}
        >
          <Checkbox style={{ color: theme.palette.secondary.main }} />
          <Typography variant="h6" sx={{ color: theme.palette.secondary.main }}>
            I accept{" "}
            <Link style={{ color: theme.palette.secondary.light }} to="#">
              Privacy Policy
            </Link>
          </Typography>
        </Box>

        <Button
          variant="outlined"
          endIcon={<ArrowForwardIcon />}
          sx={{ width: { lg: "auto", xs: "100%" }, pt: 1, pb: 1, pl: 3, pr: 3 }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
