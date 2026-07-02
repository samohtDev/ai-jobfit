/**
 * ==========================================================
 * Component: CVProfileCard
 * ==========================================================
 *
 * Purpose:
 * Displays a single CV Profile.
 *
 * Props:
 * profile
 *
 * Received From:
 * CVProfiles.jsx
 *
 * Responsibilities:
 * - Display profile information
 * - (Future) Open profile
 * - (Future) Edit profile
 * - (Future) Delete profile
 * ==========================================================
 */

function CVProfileCard({ profile }) {
    return (
        <div>

            <h3>{profile.profileName}</h3>

            <p>{profile.targetCareer}</p>

        </div>
    );
}

export default CVProfileCard;