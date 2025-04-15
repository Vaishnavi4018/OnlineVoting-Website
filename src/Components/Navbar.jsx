import React, { useContext } from "react";
import { AppBar, Button, Toolbar, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { isVoterLoggedIn, isAdminLoggedIn, logout, electionName } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <AppBar position="static" className="navbar">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* App Name or Admin Election Name */}
        <Typography variant="h4" component="div" sx={{ fontWeight: "bold" }}>
          {isAdminLoggedIn && electionName ? `Admin: ${electionName}` : "MyVote"}
        </Typography>

        {/* Navigation Buttons */}
        <Box>
          <Button color="inherit" component={Link} to="/">Home</Button>

          {!isVoterLoggedIn && !isAdminLoggedIn && (
            <>
              <Button color="inherit" component={Link} to="/login">Voter Login</Button>
              <Button color="inherit" component={Link} to="/admin">Admin Login</Button>
            </>
          )}

          {isVoterLoggedIn && (
            <>
              <Button color="inherit" component={Link} to="/voters">Voters</Button>
              <Button color="inherit" component={Link} to="/candidates">Candidates</Button>
              <Button color="inherit" component={Link} to="/profile">Profile</Button>
            </>
          )}

          {isAdminLoggedIn && (
            <>
              <Button color="inherit" component={Link} to="/admin">Admin</Button>
              <Button color="inherit" component={Link} to="/candidates">Candidates</Button>
            </>
          )}

          {(isVoterLoggedIn || isAdminLoggedIn) && (
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
