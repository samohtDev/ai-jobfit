// Registration form component
import { useState } from "react";
import { registerUser } from "../services/authService";


function RegisterForm() {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  /**
   * Handles registration form submission.
   *
   * Flow:
   * User clicks Create Account
   *        ↓
   * Form calls handleSubmit()
   *        ↓
   * Validate form
   *        ↓
   * Register user with Firebase
   */
  const handleSubmit = async (event) => {

      event.preventDefault();
      console.log("Registration Details");

      if (password !== confirmPassword) {

        alert("Passwords do not match.");
        return;
      }

      try {

        const userCredential = await registerUser(
            email,
            password,
        );

        console.log("✅ User created successfully!");
        console.log(userCredential.user);
        alert("Account created successfully!");
      }
      catch (error) {

          console.error("Firebase Error");
          console.error("Code:", error.code);
          console.error("Message:", error.message);
          console.error(error);
      }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Full Name</label>
        <br />
        <input
          type="text"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        />
      </div>

      <br />

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
          placeholder="Create password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <br />

      <div>
        <label>Confirm Password</label>
        <br />
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </div>

      <br />

      <button type="submit">Create Account</button>
    </form>
  );
}

export default RegisterForm;