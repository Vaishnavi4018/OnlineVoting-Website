// import { useState, useEffect } from "react";
// import { Card, CardContent, Avatar, Typography, Box, Button, Radio, RadioGroup, FormControlLabel } from "@mui/material";

// export default function Voters() {
//   const [candidates, setCandidates] = useState([]);
//   const [selectedCandidate, setSelectedCandidate] = useState(null);
//   const [hasVoted, setHasVoted] = useState(false);

//   useEffect(() => {
//     const savedCandidates = JSON.parse(localStorage.getItem("candidates")) || [];
//     setCandidates(savedCandidates);
//     const votedCandidate = localStorage.getItem("votedCandidate");
//     if (votedCandidate) {
//       setHasVoted(true);
//       setSelectedCandidate(votedCandidate);
//     }
//   }, []);

//   const handleVote = () => {
//     if (selectedCandidate) {
//       localStorage.setItem("votedCandidate", selectedCandidate);
//       setHasVoted(true);
//     }
//   };

//   return (
//     <Box maxWidth="600px" margin="auto" padding="16px" bgcolor="#f5f5f5" borderRadius="8px">
//       <Typography variant="h6" fontWeight="bold" marginBottom="16px" textAlign="center">
//         Vote for Your Candidate
//       </Typography>
//       <RadioGroup value={selectedCandidate} onChange={(e) => setSelectedCandidate(e.target.value)}>
//         {candidates.map((candidate) => (
//           <Card key={candidate.id} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px", marginBottom: "12px" }}>
//             <Box sx={{ display: "flex", alignItems: "center" }}>
//               <Avatar src={candidate.profile} sx={{ width: 60, height: 60, marginRight: "16px" }} />
//               <CardContent>
//                 <Typography variant="body1">{candidate.name}</Typography>
//               </CardContent>
//             </Box>
//             {candidate.symbol && <img src={candidate.symbol} alt="Symbol" style={{ width: "80px", height: "50px", borderRadius: "4px" }} />}
//             <FormControlLabel value={candidate.id} control={<Radio disabled={hasVoted} />} label="" />
//           </Card>
//         ))}
//       </RadioGroup>
//       <Button variant="contained" color="primary" onClick={handleVote} fullWidth disabled={hasVoted || !selectedCandidate}>
//         {hasVoted ? "You have already voted" : "Vote"}
//       </Button>
//     </Box>
//   );
// }

// import { useState, useEffect } from "react";
// import { Card, CardContent, Avatar, Typography, Box, Button, Radio, RadioGroup, FormControlLabel } from "@mui/material";

// export default function Voters() {
//   const [candidates, setCandidates] = useState([]);
//   const [selectedCandidate, setSelectedCandidate] = useState(null);
//   const [hasVoted, setHasVoted] = useState(false);

//   useEffect(() => {
//     const savedCandidates = JSON.parse(localStorage.getItem("candidates")) || [];
//     setCandidates(savedCandidates);

//     const votedCandidate = localStorage.getItem("votedCandidate");
//     if (votedCandidate) {
//       setSelectedCandidate(votedCandidate);
//       setHasVoted(true);
//     }
//   }, []);

//   const handleVote = () => {
//     if (selectedCandidate) {
//       localStorage.setItem("votedCandidate", selectedCandidate);
//       setHasVoted(true);
//     }
//   };

//   return (
//     <Box maxWidth="600px" margin="auto" padding="16px" bgcolor="#f5f5f5" borderRadius="8px">
//       <Typography variant="h6" fontWeight="bold" marginBottom="16px" textAlign="center">
//         Vote for Your Candidate
//       </Typography>
//       <RadioGroup value={selectedCandidate} onChange={(e) => setSelectedCandidate(e.target.value)}>
//         {candidates.map((candidate) => (
//           <Card key={candidate.id} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px", marginBottom: "12px" }}>
//             <Box sx={{ display: "flex", alignItems: "center" }}>
//               <Avatar src={candidate.profile} sx={{ width: 60, height: 60, marginRight: "16px" }} />
//               <CardContent>
//                 <Typography variant="body1">{candidate.name}</Typography>
//               </CardContent>
//             </Box>
//             {candidate.symbol && <img src={candidate.symbol} alt="Symbol" style={{ width: "80px", height: "50px", borderRadius: "4px" }} />}
//             <FormControlLabel value={candidate.id} control={<Radio disabled={hasVoted} />} label="" />
//           </Card>
//         ))}
//       </RadioGroup>
//       <Button variant="contained" color="primary" onClick={handleVote} fullWidth disabled={hasVoted || !selectedCandidate}>
//         {hasVoted ? "You have already voted" : "Vote"}
//       </Button>
//     </Box>
//   );
// }

// import { useState, useEffect } from "react";
// import {
//   Card,
//   CardContent,
//   Avatar,
//   Typography,
//   Box,
//   Button,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   MenuItem,
//   Select,
//   InputLabel,
//   FormControl,
// } from "@mui/material";

// export default function Voters() {
//   const [elections, setElections] = useState([]);
//   const [selectedElection, setSelectedElection] = useState("");
//   const [candidates, setCandidates] = useState([]);
//   const [selectedCandidate, setSelectedCandidate] = useState(null);
//   const [hasVoted, setHasVoted] = useState(false);

//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem("candidates")) || {};
//     const electionList = Object.keys(stored);
//     setElections(electionList);

//     const lastSelectedElection = sessionStorage.getItem("selectedElection");
//     if (lastSelectedElection && electionList.includes(lastSelectedElection)) {
//       setSelectedElection(lastSelectedElection);
//       setCandidates(stored[lastSelectedElection] || []);
//       const voted = JSON.parse(localStorage.getItem("votedCandidates")) || {};
//       setHasVoted(!!voted[lastSelectedElection]);
//       setSelectedCandidate(voted[lastSelectedElection] || null);
//     }
//   }, []);

//   const handleElectionChange = (e) => {
//     const election = e.target.value;
//     setSelectedElection(election);
//     sessionStorage.setItem("selectedElection", election);

//     const stored = JSON.parse(localStorage.getItem("candidates")) || {};
//     setCandidates(stored[election] || []);

//     const voted = JSON.parse(localStorage.getItem("votedCandidates")) || {};
//     setHasVoted(!!voted[election]);
//     setSelectedCandidate(voted[election] || null);
//   };

//   const handleVote = () => {
//     if (selectedCandidate) {
//       const voted = JSON.parse(localStorage.getItem("votedCandidates")) || {};
//       voted[selectedElection] = selectedCandidate;
//       localStorage.setItem("votedCandidates", JSON.stringify(voted));
//       setHasVoted(true);
//     }
//   };

//   return (
//     <Box maxWidth="700px" margin="auto" padding="20px" bgcolor="#f5f5f5" borderRadius="8px">
//       <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
//         Vote for Your Candidate
//       </Typography>

//       <FormControl fullWidth margin="normal">
//         <InputLabel>Select Election</InputLabel>
//         <Select value={selectedElection} onChange={handleElectionChange} label="Select Election">
//           {elections.map((election) => (
//             <MenuItem key={election} value={election}>
//               {election}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>

//       {selectedElection && (
//         <>
//           <RadioGroup
//             value={selectedCandidate}
//             onChange={(e) => setSelectedCandidate(e.target.value)}
//           >
//             {candidates.map((candidate) => (
//               <Card
//                 key={candidate.id}
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   padding: "12px",
//                   marginBottom: "12px",
//                 }}
//               >
//                 <Box sx={{ display: "flex", alignItems: "center" }}>
//                   <Avatar
//                     src={candidate.image}
//                     sx={{ width: 60, height: 60, marginRight: "16px" }}
//                   />
//                   <CardContent>
//                     <Typography variant="body1">{candidate.name}</Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       ID: {candidate.id}
//                     </Typography>
//                   </CardContent>
//                 </Box>
//                 <FormControlLabel
//                   value={candidate.id}
//                   control={<Radio disabled={hasVoted} />}
//                   label=""
//                 />
//               </Card>
//             ))}
//           </RadioGroup>

//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleVote}
//             fullWidth
//             disabled={hasVoted || !selectedCandidate}
//           >
//             {hasVoted ? "You have already voted in this election" : "Vote"}
//           </Button>
//         </>
//       )}
//     </Box>
//   );
// }


// import { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   Avatar,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
//   Button,
// } from "@mui/material";

// export default function Voters() {
//   const [candidates, setCandidates] = useState([]);
//   const [selectedCandidate, setSelectedCandidate] = useState("");
//   const [hasVoted, setHasVoted] = useState(false);

//   useEffect(() => {
//     const savedCandidates = JSON.parse(localStorage.getItem("candidates")) || [];
//     setCandidates(savedCandidates);

//     const voted = localStorage.getItem("votedCandidate");
//     if (voted) {
//       setHasVoted(true);
//       setSelectedCandidate(voted);
//     }
//   }, []);

//   const handleVote = () => {
//     if (selectedCandidate) {
//       localStorage.setItem("votedCandidate", selectedCandidate);
//       setHasVoted(true);
//     }
//   };

//   return (
//     <Box maxWidth="600px" mx="auto" mt={4} p={2} bgcolor="#f0f0f0" borderRadius={2}>
//       <Typography variant="h6" textAlign="center" gutterBottom>
//         Vote for Your Candidate
//       </Typography>

//       <RadioGroup
//         value={selectedCandidate}
//         onChange={(e) => setSelectedCandidate(e.target.value)}
//       >
//         {candidates.map((candidate) => (
//           <Card
//             key={candidate.id}
//             sx={{
//               mb: 2,
//               px: 2,
//               py: 1,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//             }}
//           >
//             <Box display="flex" alignItems="center">
//               <Avatar
//                 src={candidate.profile}
//                 alt={candidate.name}
//                 sx={{ width: 60, height: 60, mr: 2 }}
//               />
//               <Typography variant="body1">{candidate.name}</Typography>
//             </Box>

//             <FormControlLabel
//               value={candidate.id}
//               control={<Radio disabled={hasVoted} />}
//               label="" // remove label so dot appears alone
//               labelPlacement="end"
//               sx={{ marginLeft: "auto" }}
//             />
//           </Card>
//         ))}
//       </RadioGroup>

//       <Button
//         variant="contained"
//         fullWidth
//         disabled={hasVoted || !selectedCandidate}
//         onClick={handleVote}
//       >
//         {hasVoted ? "You already voted" : "Vote"}
//       </Button>
//     </Box>
//   );
// }



import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";

export default function Voters() {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    const savedCandidates = JSON.parse(localStorage.getItem("candidates")) || [];
    setCandidates(savedCandidates);

    const voted = localStorage.getItem("votedCandidate");
    if (voted) {
      setHasVoted(true);
      setSelectedCandidate(voted);
    }
  }, []);

  const handleVote = () => {
    if (selectedCandidate) {
      localStorage.setItem("votedCandidate", selectedCandidate);
      setHasVoted(true);
    }
  };

  return (
    <Box maxWidth="600px" mx="auto" mt={4} p={2} bgcolor="#f0f0f0" borderRadius={2}>
      <Typography variant="h6" textAlign="center" gutterBottom>
        Vote for Your Candidate
      </Typography>

      <RadioGroup
        value={selectedCandidate}
        onChange={(e) => setSelectedCandidate(e.target.value)}
      >
        {candidates.map((candidate) => (
          <Card
            key={candidate.id}
            sx={{
              mb: 2,
              px: 2,
              py: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box display="flex" alignItems="center">
              <Avatar
                src={candidate.image} // ✅ fixed here!
                alt={candidate.name}
                sx={{ width: 60, height: 60, mr: 2 }}
              />
              <Typography variant="body1">{candidate.name}</Typography>
            </Box>

            <FormControlLabel
              value={candidate.id}
              control={<Radio disabled={hasVoted} />}
              label=""
              labelPlacement="end"
              sx={{ marginLeft: "auto" }}
            />
          </Card>
        ))}
      </RadioGroup>

      <Button
        variant="contained"
        fullWidth
        disabled={hasVoted || !selectedCandidate}
        onClick={handleVote}
      >
        {hasVoted ? "You already voted" : "Vote"}
      </Button>
    </Box>
  );
}
