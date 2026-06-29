/**
 * Component: CVProfiles
 *
 * Displays all CVs stored by the user.
 */

import EmptyState from "./EmptyState";
import { useState } from "react";
import CreateCVProfileModal from "./CreateCVProfileModal";


function CVProfiles() {

  const [showModal, setShowModal] = useState(false);

  const hasCVs = false;

  const openModal = () => {
  setShowModal(true);
};

const closeModal = () => {
  setShowModal(false);
};

  return (
    <section>

      <h2>My CV Profiles</h2>

      {
        hasCVs
          ? (
            <p>CV cards will appear here.</p>
          )
          : (
            <EmptyState onCreateProfile={openModal} />
          )
      }

      {showModal && (
          <CreateCVProfileModal onClose={closeModal} />
      )}
    </section>
  );
}

export default CVProfiles;