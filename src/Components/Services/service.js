import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
// import cloud from "../../Assets/Icons/cloud.png";
import cloud from "../../Assets/gif/clouds.gif";
import computer from "../../Assets/gif/computer.gif";
import consultation from "../../Assets/gif/consultation.gif";
import settings from "../../Assets/gif/settings.gif";
import smartphone from "../../Assets/gif/smartphone.gif";
import Card from "./Card";

const Ourservice = () => {
  const [services, setservices] = useState([
    {
      title: "Our Services",
      imageurl: "",
      description:
        "Ready to transform your ideas into reality? Contact us today to learn more about our services and how we can help you achieve your goals. Let's build something amazing together!"
    },
    {
      title: "Cloud Services",
      imageurl: cloud,
      description:
        "Unlock the potential of cloud computing with our comprehensive cloud services, including migration, integration, and management, for enhanced flexibility and efficiency."
    },
    {
      title: "Mobile App Development",
      imageurl: smartphone,
      description:
        "Engage your audience on the go with our custom mobile applications, offering seamless user experiences across iOS and Android platforms."
    },
    {
      title: "UI/UX Design",
      imageurl: computer,
      description:
        "Transform your ideas into stunning realities with our user-centered design services, ensuring intuitive, engaging, and effective user experiences."
    },
    {
      title: "IT Consulting",
      imageurl: consultation,
      description:
        "Navigate your digital transformation journey with our expert IT consulting services, guiding you through strategy development, system integration, and operational excellence."
    },
    {
      title: "Custom Software Development",
      imageurl: settings,
      description:
        "Tailor-made software solutions designed to meet your specific business requirements, ensuring functionality, scalability, and performance."
    }
  ]);
  return (
    <Box
      sx={{
        pl: { lg: 10, md: 5, sm: 5, xs: 2 },
        pr: { lg: 10, md: 5, sm: 5, xs: 2 },
        display: "flex",
        flexWrap: "wrap",
        justifyContent: {
          lg: "start",
          md: "center",
          sm: "center",
          xs: "center"
        },
        gap: "6px"
      }}
    >
      {services.map((e, index) => {
        return (
          <Card
            title={e.title}
            imageurl={e.imageurl}
            description={e.description}
          />
        );
      })}
    </Box>
  );
};

export default Ourservice;
