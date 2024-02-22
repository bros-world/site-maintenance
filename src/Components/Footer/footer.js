import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import React from "react";

import Logo from "../../Assets/Icons/logo.png";
import Facebook from "../../Assets/Icons/facebook.png";
import Linkedin from "../../Assets/Icons/linkedin.png";
import Twitter from "../../Assets/Icons/twitter.png";
import Instagram from "../../Assets/Icons/instagram.png";
import { useTheme } from "@emotion/react";
const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        background: theme.palette.primary.light,
        paddingBlock: "80px",
        pl: { lg: 10, md: 5, sm: 5, xs: 2 },
        pr: { lg: 10, md: 5, sm: 5, xs: 2 }
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          flex: "auto"
        }}
      >
        <Stack
          sx={{
            width: { lg: "auto", md: "auto", sm: "auto", xs: "100%" },
            pl: 1,
            pr: 1
          }}
          direction={"column"}
          spacing={2}
        >
          <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Box component="img" src={Logo} />
            <Typography variant="h6">Brosworld</Typography>
          </Box>
          <Box sx={{ pt: 1, width: "300px" }}>
            <Typography variant="h6">
              Developing career-focused content to empower individuals in their
              professional journeys
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box component="img" src={Facebook} />
            <Box component="img" src={Linkedin} />
            <Box component="img" src={Twitter} />
            <Box component="img" src={Instagram} />
          </Box>
        </Stack>
        <Stack
          direction={"column"}
          spacing={2}
          sx={{
            width: { lg: "auto", md: "auto", sm: "auto", xs: "100%" },
            pl: 1,
            pr: 1
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontStyle: "bold", pt: { lg: 0, md: 0, sm: 0, xs: 5 } }}
          >
            Links
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {/* <Link
              style={{
                textDecoration: "none",
                color: "#172125"
              }}
            >
              About Us
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "#172125"
              }}
            >
              Services
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "#172125"
              }}
            >
              Why choose Us
            </Link> */}
            {/* <Link style={{ textDecoration: "none", color: "#172125" }}>
              About Us
            </Link>
            <Link style={{ textDecoration: "none", color: "#172125" }}>
              Services
            </Link> */}
            <Typography variant="h6">About Us</Typography>
            <Typography variant="h6">Services</Typography>
            <Typography variant="h6">Why choose Us</Typography>
          </Box>
        </Stack>
        <Stack
          direction={"column"}
          spacing={2}
          sx={{
            width: { lg: "auto", md: "auto", sm: "auto", xs: "100%" },
            pl: 1,
            pr: 1,
            pt: { lg: 0, md: 0, sm: 3, xs: 0 }
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontStyle: "bold", pt: { lg: 0, md: 0, sm: 0, xs: 5 } }}
          >
            Contact us
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Typography variant="h6">Brosworld@gmail.com</Typography>
            <Typography variant="h6">+923183561921</Typography>
            <Typography variant="h6">+923183561921</Typography>
          </Box>
        </Stack>
      </Box>
      <Box
        sx={{
          pt: 5,
          paddingInline: { lg: "80px", md: "10px", sm: "40px", xs: "10px" }
        }}
      >
        <Divider sx={{ background: "white", p: 0.1 }} />
      </Box>
    </Box>
  );
};

export default Footer;
