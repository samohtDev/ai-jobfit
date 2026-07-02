/**
 * ==========================================================
 * CV Profile Service
 * ==========================================================
 *
 * Purpose:
 * Handles all operations related to CV Profiles.
 *
 * This is the ONLY place that should know
 * how CV Profiles are saved or loaded.
 *
 * Current Version:
 * Logs the profile to simulate saving.
 *
 * Future Version:
 * Will save to Firebase Firestore.
 * ==========================================================
 */

/**
 * Saves a CV Profile.
 *
 * @param {Object} profile
 * @returns {Promise<Object>}
 */

export const saveCVProfile = async (profile) => {

    console.log("Saving profile...");

    console.log(profile);

    return profile;

};