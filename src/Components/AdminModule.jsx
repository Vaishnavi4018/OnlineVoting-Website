import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const FIXED_PASSWORD = "admin123"; // ✅ Admin password

const AdminModule = () => {
  const [form, setForm] = useState({
    name: "",
    id: "",
    image: null,
    electionName: "",
  });

  const [candidates, setCandidates] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [inputPassword, setInputPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Load candidates from localStorage on mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("candidates")) || [];
    setCandidates(stored);
  }, []);

  // Save candidates to localStorage on change
  useEffect(() => {
    localStorage.setItem("candidates", JSON.stringify(candidates));
  }, [candidates]);

  // Form input handler
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      const reader = new FileReader();
      reader.onload = () => {
        setForm((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Add or update candidate
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.id || !form.electionName) return;

    let updated = [...candidates];
    if (editingIndex !== -1) {
      updated[editingIndex] = form;
      setEditingIndex(-1);
    } else {
      updated.push(form);
    }

    setCandidates(updated);
    sessionStorage.setItem("electionName", form.electionName);
    setForm({ name: "", id: "", image: null, electionName: "" });
  };

  const handleEdit = (index) => {
    setForm(candidates[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updated = candidates.filter((_, i) => i !== index);
    setCandidates(updated);
  };

  const handleLogin = () => {
    if (inputPassword === FIXED_PASSWORD) {
      setIsLoggedIn(true);
    } else {
      alert("Incorrect password");
    }
  };

  const latestCandidate = candidates[candidates.length - 1];

  if (!isLoggedIn) {
    return (
      <Box p={4} textAlign="center">
        <Typography variant="h5" mb={2}>
          Admin Login
        </Typography>
        <TextField
          type="password"
          label="Enter Admin Password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          sx={{ mt: 2, px: 4, borderRadius: "12px" }}
        >
          Login
        </Button>
      </Box>
    );
  }

  return (
    <Box p={4}>
      <Typography variant="h5" gutterBottom>
        Admin Panel - Add Candidate
      </Typography>
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <TextField
          name="electionName"
          label="Election Name"
          value={form.electionName}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          name="name"
          label="Candidate Name"
          value={form.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          name="id"
          label="Candidate ID"
          value={form.id}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          name="image"
          type="file"
          onChange={handleChange}
          fullWidth
          margin="normal"
          inputProps={{ accept: "image/*" }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2, px: 4, borderRadius: "12px" }}
        >
          {editingIndex !== -1 ? "Update" : "Add"} Candidate
        </Button>
      </form>

      {latestCandidate && (
        <Card sx={{ mt: 4, p: 2, borderRadius: 3, boxShadow: 3 }}>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              {latestCandidate.name}
            </Typography>
            <Typography>ID: {latestCandidate.id}</Typography>
            <Typography variant="body2" color="text.secondary">
              Election: {latestCandidate.electionName}
            </Typography>
            {latestCandidate.image && (
              <img
                src={latestCandidate.image}
                alt="candidate"
                style={{
                  width: 100,
                  height: 100,
                  objectFit: "cover",
                  marginTop: 10,
                  borderRadius: "8px",
                }}
              />
            )}
            <Box mt={2}>
              <IconButton
                color="primary"
                onClick={() => handleEdit(candidates.length - 1)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                color="error"
                onClick={() => handleDelete(candidates.length - 1)}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default AdminModule;
