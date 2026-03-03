import LoginForm from "../packages/Component/LoginForm/LoginForm";
import {Navbar} from "../packages";

export default function Login() {
  const handleLogin = (email: string, password: string) => {
    console.log("Login attempt:", { email, password });
  };

  return (
      <>
          <Navbar />
          <div className="login-page">
              <h1>Connexion</h1>
              <LoginForm onSubmit={handleLogin} />
          </div>
      </>
  )
}
