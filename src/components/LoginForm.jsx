// Login form component
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../services/authService";


function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

    /**
   * ==========================================================
   * Handles login form submission.
   *
   * Flow:
   * User clicks Login
   *        ↓
   * Form calls handleSubmit()
   *        ↓
   * Authenticate with Firebase
   *        ↓
   * AuthProvider updates currentUser
   *        ↓
   * Navigate to Dashboard
   * ==========================================================
   */
  const handleSubmit = async (event) => {

      event.preventDefault();
      setError("");

      try {

        const userCredential = await loginUser(

            email,
            password,
        );

        console.log("✅ User logged in successfully!");
        console.log(userCredential.user);
        navigate("/dashboard");

    }
    catch (error) {

        setError("Incorrect email or password.");

    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <br />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <br />

      <div>
        <label>Password</label>
        <br />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <br />
      {
          error && (

              <p>

                  {error}

              </p>

          )
      }
      <button type="submit">Login</button>
      <p>{email}</p>

<p>{password}</p>
    </form>
  );
}

export default LoginForm;