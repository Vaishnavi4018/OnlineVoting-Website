import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isVoterLoggedIn, setIsVoterLoggedIn] = useState(false);
  const [electionName, setElectionName] = useState("");

  useEffect(() => {
    const admin = localStorage.getItem("isAdminLoggedIn") === "true";
    const voter = localStorage.getItem("isVoterLoggedIn") === "true";
    const election = localStorage.getItem("electionName") || "";

    setIsAdminLoggedIn(admin);
    setIsVoterLoggedIn(voter);
    setElectionName(election);
  }, []);

  const loginAdmin = (election) => {
    setIsAdminLoggedIn(true);
    setIsVoterLoggedIn(false);
    setElectionName(election);

    localStorage.setItem("isAdminLoggedIn", "true");
    localStorage.removeItem("isVoterLoggedIn");
    localStorage.setItem("electionName", election);
  };

  const loginVoter = () => {
    setIsVoterLoggedIn(true);
    setIsAdminLoggedIn(false);

    localStorage.setItem("isVoterLoggedIn", "true");
    localStorage.removeItem("isAdminLoggedIn");
    localStorage.removeItem("electionName");
  };

  const logout = () => {
    setIsAdminLoggedIn(false);
    setIsVoterLoggedIn(false);
    setElectionName("");

    localStorage.removeItem("isAdminLoggedIn");
    localStorage.removeItem("isVoterLoggedIn");
    localStorage.removeItem("electionName");
  };

  return (
    <AuthContext.Provider
      value={{
        isAdminLoggedIn,
        isVoterLoggedIn,
        loginAdmin,
        loginVoter,
        logout,
        electionName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

// ✅ Add this line below
export { AuthContext };

