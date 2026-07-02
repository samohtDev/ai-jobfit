/**
 * Component: CVProfiles
 *
 * Displays all CVs stored by the user.
 */

import EmptyState from "./EmptyState";
import { useState } from "react";
import CreateCVProfileModal from "./CreateCVProfileModal";
import CVProfileCard from "./CVProfileCard";


function CVProfiles() {

  const [showModal, setShowModal] = useState(false);

  /**
 * CV Profiles
 *
 * Stores every CV Profile belonging
 * to the current user.
 *
 * For now this simulates the database.
 */
  const [cvProfiles, setCVProfiles] = useState([]);

  const openModal = () => {
  setShowModal(true);
};


/**
 * Adds a newly created profile
 * to the CV Library.
 *
 * Called by:
 * CreateCVProfileModal
 */
const handleProfileCreated = (newProfile) => {

    setCVProfiles((previousProfiles) => [

        ...previousProfiles,

        newProfile,

    ]);

};


const closeModal = () => {
  setShowModal(false);
};

  return (
    <section>

      <h2>My CV Profiles</h2>

      {
        cvProfiles.length > 0
          ? (
              <div>
                {
                  cvProfiles.map((profile) => (
                    <CVProfileCard
                      key={profile.profileName}
                      profile={profile}
                    />
                  ))
                }
              </div>
            )
          : (
              <EmptyState
                  onCreateProfile={openModal}
              />
            )
      }

      {showModal && (
          <CreateCVProfileModal
            onClose={closeModal}
            onProfileCreated={handleProfileCreated}
          />
      )}
    </section>
  );
}

export default CVProfiles;