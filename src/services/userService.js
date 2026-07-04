/**
 * ==========================================================
 * User Service
 * ==========================================================
 *
 * Purpose:
 * Handles Firestore operations related to users.
 *
 * Responsibilities:
 * - Create user profile
 * - Update user profile
 * - Retrieve user profile
 * ==========================================================
 */

import { doc, setDoc, serverTimestamp } from "firebase/firestore";

import { db } from "../firebase/firebaseConfig";

/**
 * Creates a user profile in Firestore.
 */
export const createUserProfile = async (

    uid,

    userData,

) => {

    await setDoc(

        doc(db, "users", uid),

        {

            ...userData,

            createdAt: serverTimestamp(),

            updatedAt: serverTimestamp(),

        }

    );

};