import React from "react";
import { Box } from "@mui/material";
import Header from "components/Header";

const Breakdown = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="BUHANGIN" subtitle="Breakdown of Sales in Buhangin" />
      <Box
        mt="40px"
        height="75vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <iframe
          style={{
            background: "#1a1f45",
            border: "none",
            borderRadius: "2px",
            boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
          }}
          width="100%" // Adjust the width to be responsive
          height="100%" // Adjust the height to occupy the full container
          src="https://charts.mongodb.com/charts-project-0-mohwveq/embed/charts?id=2ed934d9-dcc6-43b4-bde9-d0595175fc7c&maxDataAge=3600&theme=dark&autoRefresh=true"
          allowFullScreen
        ></iframe>
      </Box>
    </Box>
  );
};

export default Breakdown;
