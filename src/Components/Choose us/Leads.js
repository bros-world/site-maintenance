import { Box } from "@mui/material";
import React, { useState } from "react";
import user from "../../Assets/Icons/user.png";
import Card from "./Card";

const OurTeam = () => {
  const [team, setteam] = useState([
    {
      name: "Rahul",
      imageurl: user,
      description:
        "Expertise and Experience: With a team of highly skilled professionals and a track record of successful projects, we bring unmatched expertise to every challenge.",
      role: "Ceo of covert"
    },
    {
      name: "Rahul",
      imageurl: user,
      description:
        "Expertise and Experience: With a team of highly skilled professionals and a track record of successful projects, we bring unmatched expertise to every challenge.",
      role: "Ceo of covert"
    },
    {
      name: "Rahul",
      imageurl: user,
      description:
        "Expertise and Experience: With a team of highly skilled professionals and a track record of successful projects, we bring unmatched expertise to every challenge.",
      role: "Ceo of covert"
    },
    {
      name: "Rahul",
      imageurl: user,
      description:
        "Expertise and Experience: With a team of highly skilled professionals and a track record of successful projects, we bring unmatched expertise to every challenge.",
      role: "Ceo of covert"
    },
    {
      name: "Rahul",
      imageurl: user,
      description:
        "Expertise and Experience: With a team of highly skilled professionals and a track record of successful projects, we bring unmatched expertise to every challenge.",
      role: "Ceo of covert"
    },
    {
      name: "Rahul",
      imageurl: user,
      description:
        "Expertise and Experience: With a team of highly skilled professionals and a track record of successful projects, we bring unmatched expertise to every challenge.",
      role: "Ceo of covert"
    },
    {
      name: "Rahul",
      imageurl: user,
      description:
        "Expertise and Experience: With a team of highly skilled professionals and a track record of successful projects, we bring unmatched expertise to every challenge.",
      role: "Ceo of covert"
    }
  ]);
  return (
    <Box
      sx={{
        paddingBlock: "20px",
        display: "flex",
        overflowX: "auto",
        justifyContent: {
          lg: "start",
          md: "center",
          sm: "center",
          xs: "center"
        },
        gap: "10px",
        "::-webkit-scrollbar": {
          height: "1px",
          background: "transparent"
        }
      }}
    >
      {team.map((e, index) => {
        return (
          <Card
            name={e.name}
            imageurl={e.imageurl}
            description={e.description}
            role={e.role}
          />
        );
      })}
    </Box>
  );
};

export default OurTeam;
