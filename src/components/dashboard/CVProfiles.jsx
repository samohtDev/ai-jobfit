/**
 * Component: CVProfiles
 *
 * Displays all CVs stored by the user.
 */

import EmptyState from "./EmptyState";
import { useState, useEffect } from "react";
import { getCVProfiles } from "../../services/cvProfileService";
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

const loadCVProfiles = async () => {

    try {

        const profiles = await getCVProfiles();

        console.log("Profiles from Firestore:", profiles);

        setCVProfiles(profiles);

    }
    catch (error) {

        console.error(error);

    }

};

useEffect(() => {

    loadCVProfiles();

}, []);


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
                      key={profile.id}
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