// Main dashboard displayed after user login

import CVProfiles from "../components/dashboard/CVProfiles";
import { logoutUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

function DashboardPage() {

  const navigate = useNavigate();
  
    /**
   * ==========================================================
   * Handles user logout.
   *
   * Flow:
   * Logout Button
   *       ↓
   * Firebase Sign Out
   *       ↓
   * AuthProvider updates currentUser
   *       ↓
   * Navigate to Login
   * ==========================================================
   */
  const handleLogout = async () => {

      try {

          await logoutUser();

          navigate("/login");

      }
      catch (error) {

          console.error(error);

      }
  };

  return (
      <div className="container">

        <h1>Dashboard</h1>
        
        <button onClick={handleLogout}>
            Logout
        </button>

        <CVProfiles />

      </div> 
  );
}

export default DashboardPage;