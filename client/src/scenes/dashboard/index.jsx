import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useGetDashboardQuery } from "state/api";
import { usePasskey } from "scenes/PasskeyContext"; // Import the context
import Header from "components/Header";

const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { data, isLoading } = useGetDashboardQuery();
  const { isPasskeyEntered } = usePasskey(); // Get passkey state

  if (!isPasskeyEntered) {
    window.location.href = "/"; // Redirect to your landing page URL
    return null; // Prevent rendering the dashboard
  }

  const columns = [
    {
      field: "_id",
      headerName: "Order ID",
      flex: 1,
    },
    {
      field: "delivery_status",
      headerName: "Delivery Status",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date & Time",
      flex: 1,
    },
    {
      field: "products",
      headerName: "# of Products",
      flex: 0.5,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      renderCell: (params) => `₱${Number(params.value).toFixed(2)}`,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Box width="100%" height="auto" mb="1.5rem">
        <Header
          title="DASHBOARD"
          subtitle="Welcome to SPAMASHOP - Admin Dashboard"
        />
        <br />
        <iframe
          style={{
            background: "#1a1f45",
            border: "none",
            borderRadius: "2px",
            boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
            width: "100%",
            height: "55vh",
            overflow: "hidden",
          }}
          src="https://charts.mongodb.com/charts-project-0-mohwveq/embed/dashboards?id=ec44904d-15c5-49e1-9987-6fdb8ef05054&theme=dark&autoRefresh=true&maxDataAge=60&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"
        />
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        <Box
          gridColumn="span 12" // Full width for transactions table
          gridRow="span 3"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              borderRadius: "5rem",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: theme.palette.background.alt,
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderTop: "none",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${theme.palette.secondary[200]} !important`,
            },
          }}
        >
          <DataGrid
            loading={isLoading || !data}
            getRowId={(row) => row._id}
            rows={(data && data.transactions) || []}
            columns={columns}
          />
        </Box>

        <Box
          gridColumn="span 12" // Full width for Sales By Category
          gridRow="span 3"
          backgroundColor="#1a1f45"
          p="1.5rem"
          borderRadius="0.55rem"
        >
          <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
            Sales By Category
          </Typography>
          <iframe
            style={{
              background: "#1a1f45",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
              width: "100%",
              height: "55vh", // Increased height for a bigger appearance
            }}
            src="https://charts.mongodb.com/charts-project-0-mohwveq/embed/charts?id=1d5bf1dd-e262-4480-804a-a462ba557ac5&maxDataAge=60&theme=dark&autoRefresh=true"
          />
          <Typography
            p="0 0.6rem"
            fontSize="0.8rem"
            sx={{ color: theme.palette.secondary[200] }}
          ></Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
