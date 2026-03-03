import LoginForm from "../../packages/Component/LoginForm/LoginForm.tsx";
import {Navbar} from "../../packages";
import Container from "../../packages/Atom/Container/Container.tsx";
import "./login.css"

export default function Login() {
  const handleLogin = () => {
     console.log("trying to login :)");
  };

  return (
      <>
          <Navbar />
          <Container>
              <div className="login-page">
                  <h1 className="login-title">Connexion</h1>
                  <LoginForm onSubmit={handleLogin} />
              </div>
          </Container>
      </>
  )
}
