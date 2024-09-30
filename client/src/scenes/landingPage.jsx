import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal, Box, Typography, TextField } from "@mui/material";
import { usePasskey } from "./PasskeyContext"; // Import the context

const LandingPage = () => {
  const [open, setOpen] = useState(false);
  const [passkey, setPasskey] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { setIsPasskeyEntered } = usePasskey(); // Get passkey state setter

  const handlePasskeySubmit = () => {
    const validPasskey = "admin123"; // Example passkey (Replace with real logic)
    if (passkey === validPasskey) {
      setIsPasskeyEntered(true); // Set passkey state to true
      navigate("/dashboard"); // Navigate to dashboard
    } else {
      setError(true);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20%" }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <img
          src="https://static.vecteezy.com/system/resources/previews/023/369/953/original/3d-rendering-yellow-locked-padlock-icon-with-white-check-symbol-png.png" // Replace with your actual icon URL
          alt="Padlock Icon"
          style={{ width: 100, height: 100 }}
        />
        <br />
        <Typography variant="h4" fontWeight="bold">
         SPAMASHOP Admin Panel
        </Typography>
        <br/>
        <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
          Enter Passkey
        </Button>
      </Box>

      {/* Modal for Passkey Entry */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={3}
          bgcolor="background.paper"
          borderRadius={2}
          boxShadow={24}
          style={{ margin: "auto", width: 400, marginTop: "15%" }}
        >
          <Typography variant="h6" gutterBottom>
            Enter Admin Passkey
          </Typography>
          <TextField
            label="Passkey"
            type="password"
            value={passkey}
            onChange={(e) => setPasskey(e.target.value)}
            error={error}
            helperText={error ? "Incorrect passkey" : ""}
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handlePasskeySubmit}
            style={{ marginTop: "20px" }}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default LandingPage;
