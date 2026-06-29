// Main dashboard displayed after user login

import CVProfiles from "../components/dashboard/CVProfiles";

function DashboardPage() {
  return (
      <div className="container">

        <h1>Dashboard</h1>

        <CVProfiles />

      </div> 
    
    
    /**
     * <div className="container">
        <h1>Dashboard</h1>

        <p>
            Welcome to AI JobFit. Upload your CV and a Job Description
            to begin ATS analysis and generate tailored application documents.
        </p>

        <div className="dashboard-actions">
            <button>Upload CV</button>
            <button>Upload Job Description</button>
            <button>Analyze</button>
        </div>
    </div>
    **/
  );
}

export default DashboardPage;