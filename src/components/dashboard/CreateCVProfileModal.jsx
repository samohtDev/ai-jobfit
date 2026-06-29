/**
 * Component: CreateCVProfileModal
 *
 * Displays a modal where users can create
 * a new CV Profile.
 */

import CreateCVProfileForm from "./CreateCVProfileForm";

function CreateCVProfileModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">

        <h2>Create CV Profile</h2>

        <CreateCVProfileForm />

        <button onClick={onClose}>
          Cancel
        </button>

      </div>
    </div>
  );
}

export default CreateCVProfileModal;