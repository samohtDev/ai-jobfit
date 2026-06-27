/**
 * Component: EmptyState
 *
 * Displayed when the user has not yet
 * added any CVs.
 */

import AddCVButton from "./AddCVButton";

function EmptyState() {
  return (
    <div className="empty-state">

      <h2>No CVs Yet</h2>

      <p>
        Create your first CV profile to begin
        optimizing job applications with AI JobFit.
      </p>

      <AddCVButton />

    </div>
  );
}

export default EmptyState;