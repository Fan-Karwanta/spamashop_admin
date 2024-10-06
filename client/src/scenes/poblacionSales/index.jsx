import React from "react";
import { Box } from "@mui/material";
import Header from "components/Header";

const Breakdown = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="POBLACION" subtitle="Breakdown of Sales in Poblacion" />
      <Box
        mt="40px"
        height="75vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <iframe
          style={{
            background: "#21313C",
            border: "none",
            borderRadius: "2px",
            boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
          }}
          width="100%" // Adjust the width to be responsive
          height="100%" // Adjust the height to occupy the full container
          src="https://charts.mongodb.com/charts-project-0-mohwveq/embed/charts?id=6565b04a-b63c-4e20-b728-d2c6dc89d3be&maxDataAge=60&theme=dark&autoRefresh=true"
          allowFullScreen
        ></iframe>
      </Box>
    </Box>
  );
};

export default Breakdown;
