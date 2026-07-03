/**
 * ==========================================================
 * Hook: useAuth
 * ==========================================================
 *
 * Purpose:
 * Makes it easy to access AuthContext.
 * ==========================================================
 */

import { useContext } from "react";

import AuthContext from "../context/AuthContext";

const useAuth = () => {

    return useContext(AuthContext);

};

export default useAuth;