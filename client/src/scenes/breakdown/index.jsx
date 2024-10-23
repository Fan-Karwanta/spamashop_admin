import React from "react";
import { Box } from "@mui/material";
import Header from "components/Header";

const Breakdown = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="BREAKDOWN" subtitle="Breakdown of Sales By Category" />
      <Box mt="40px" height="75vh">
        <iframe
          style={{
            background: "#1a1f45",
            border: "none",
            borderRadius: "2px",
            boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
            width: "100%", // Set to full width for responsiveness
            height: "100%", // Set to fill the container height
          }}
          src="https://charts.mongodb.com/charts-project-0-mohwveq/embed/charts?id=1d5bf1dd-e262-4480-804a-a462ba557ac5&maxDataAge=3600&theme=dark&autoRefresh=true"
        ></iframe>
      </Box>
    </Box>
  );
};

export default Breakdown;
// october 15 2024 if you will push the repo here you will have all the charts in 1 hr syncing. to save data usage from charts
