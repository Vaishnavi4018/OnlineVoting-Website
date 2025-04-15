import { useState, useEffect } from "react";
import { Card, CardContent, Avatar, Typography, Box } from "@mui/material";

export default function Candidates() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const savedCandidates = JSON.parse(localStorage.getItem("candidates")) || [];
    setCandidates(savedCandidates);
  }, []);

  return (
    <Box maxWidth="600px" margin="auto" padding="16px" bgcolor="#f5f5f5" borderRadius="8px">
      <Typography variant="h6" fontWeight="bold" marginBottom="16px" textAlign="center">
        Candidates List
      </Typography>
      {candidates.map((candidate, index) => (
        <Card key={index} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px", marginBottom: "12px" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar src={candidate.image} sx={{ width: 60, height: 60, marginRight: "16px" }} />
            <CardContent>
              <Typography variant="body1">{candidate.name}</Typography>
              <Typography variant="body2" color="text.secondary">{candidate.details}</Typography>
              <Typography variant="caption">Election: {candidate.electionName}</Typography>
            </CardContent>
          </Box>
        </Card>
      ))}
    </Box>
  );
}
