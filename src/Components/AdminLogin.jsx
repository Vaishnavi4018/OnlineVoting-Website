import { useState } from "react";
import { useAuth } from "./context/AuthContext";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const [electionName, setElectionName] = useState("");
  const { adminLogin } = useAuth();

  const handleLogin = () => {
    if (password === "admin123") {
      adminLogin(electionName);
    } else {
      alert("Wrong password");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Admin Login</h2>
      <input
        className="border p-2 mr-2"
        type="text"
        placeholder="Election Name"
        value={electionName}
        onChange={(e) => setElectionName(e.target.value)}
      />
      <input
        className="border p-2 mr-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default AdminLogin;
