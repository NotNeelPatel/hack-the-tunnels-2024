import { useState } from "react";
import { useAccountContext } from "../../context";
import { Base as Layout } from "@/layouts";
import "./Login.style.scss";

function Login() {
  const [message, setMessage] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAccountContext();

  const attemptLogin = async () => {
    try {
      const message = await login(username, password);
      setMessage(message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="Login"></div>
      <div className="Login__panel">
        <div className="Login__panel__content">
          <img src="/carleton_logo.png"></img>
          <div className="Login__panel__content__message">
            <div>Welcome to the Carleton SSO Federated Portal.</div>
            <div>
              Enter your{" "}
              <a href="https://myone.carleton.ca" target="blank">
                MyCarletonOne
              </a>{" "}
              username and password.
            </div>
          </div>
          {message && <p>{message}</p>}
          <div className="Login__panel__content__input">
            <input type="text" placeholder="MyCarletonOne username" onChange={(e) => setUsername(e.target.value)}></input>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
          </div>
          <div className="Login__panel__content__checkbox">
            <input type="checkbox"></input>
            <label>Keep me signed in</label>
          </div>
          <button
            className="Login__panel__button"
            onClick={() => attemptLogin()}
          >
            Sign In
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
