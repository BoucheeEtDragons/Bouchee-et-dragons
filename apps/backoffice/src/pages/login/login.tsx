import LoginForm from "../../packages/Component/LoginForm/LoginForm.tsx";
import {Navbar} from "../../packages";
import Container from "../../packages/Atom/Container/Container.tsx";
import {redirect} from "react-router-dom";
import "./login.css"

export default function Login() {
  const handleLogin = () => {
    redirect(`/`);
  };

  return (
      <>
          <Navbar />
          <Container>
              <div className="login-page">
                  <h1>Connexion</h1>
                  <LoginForm onSubmit={handleLogin} />
              </div>
          </Container>
      </>
  )
}
