/**
 * ==========================================================
 * Authentication Service
 * ==========================================================
 *
 * Purpose:
 * Handles all authentication operations.
 *
 * Current Features:
 * - Register User
 * - Login User
 * - Logout User
 *
 * Future Features:
 * - Password Reset
 * - Email Verification
 * - Google Login
 * ==========================================================
 */

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";

import { auth } from "../firebase/firebaseConfig";

/**
 * Register a new user.
 */
export const registerUser = async (
    email,
    password,
) => {

    return await createUserWithEmailAndPassword(
        auth,
        email,
        password,
    );
};

/**
 * Login existing user.
 */
export const loginUser = async (
    email,
    password,
) => {

    return await signInWithEmailAndPassword(
        auth,
        email,
        password,
    );
};

/**
 * Logout current user.
 */
export const logoutUser = async () => {

    return await signOut(auth);

};