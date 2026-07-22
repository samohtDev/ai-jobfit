/**
 * ==========================================================
 * CV Profile Service
 * ==========================================================
 *
 * Purpose:
 * Handles all Firestore operations
 * related to CV Profiles.
 *
 * Current Features:
 * - Create Profile
 *
 * Future Features:
 * - Get Profiles
 * - Update Profile
 * - Delete Profile
 * ==========================================================
 */

import {

    collection,
    addDoc,
    getDocs,

} from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";

/**
 * ==========================================================
 * Create a new CV Profile.
 * ==========================================================
 */
export const createCVProfile = async (profile) => {

    return await addDoc(

        collection(db, "cvProfiles"),

        profile,

    );

};


/**
 * ==========================================================
 * Get all CV Profiles.
 * ==========================================================
 */
export const getCVProfiles = async () => {

    const querySnapshot = await getDocs(

        collection(db, "cvProfiles")

    );

    return querySnapshot.docs.map((doc) => ({

        id: doc.id,

        ...doc.data(),

    }));

};
