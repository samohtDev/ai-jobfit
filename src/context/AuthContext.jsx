/**
 * ==========================================================
 * Context: AuthContext
 * ==========================================================
 *
 * Purpose:
 * Stores authentication information that can be
 * accessed throughout the application.
 *
 * This file only creates the context.
 * It does NOT manage authentication.
 * ==========================================================
 */

import { createContext } from "react";

const AuthContext = createContext();

export default AuthContext;