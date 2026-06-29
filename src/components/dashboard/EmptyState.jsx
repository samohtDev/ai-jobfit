/**
 * Component: EmptyState
 *
 * Displayed when the user has not yet
 * added any CVs.
 */

import CreateCVProfileButton from "./CreateCVProfileButton";

function EmptyState({ onCreateProfile }) {
  return (
    <div className="empty-state">

      <h2>No CV Profiles Yet</h2>

      <p>
        Create your first CV profile to begin
        optimizing job applications with AI JobFit.
      </p>

      <CreateCVProfileButton onClick={onCreateProfile} />

    </div>
  );
}

export default EmptyState;