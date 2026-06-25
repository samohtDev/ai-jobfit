// User registration page

import RegisterForm from "../components/RegisterForm";

function RegisterPage() {
  return (
    <div className="container">
      <h1>Create Account</h1>

      <p>
        Create your AI JobFit account and start generating tailored applications.
      </p>

      <RegisterForm />
    </div>
  );
}

export default RegisterPage;