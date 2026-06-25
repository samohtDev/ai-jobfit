// User login page

import LoginForm from "../components/LoginForm";

function LoginPage() {
  return (
    <div className="container">
      <h1>Login</h1>

      <p>
        Access your AI JobFit dashboard and continue optimizing your applications.
      </p>

      <LoginForm />
    </div>
  );
}

export default LoginPage;