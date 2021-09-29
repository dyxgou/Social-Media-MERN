import { useState } from "react";
import "./LoginPage.css";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VpnKeyIcon from '@mui/icons-material/VpnKey';


const LoginPage = () => {
  const useValueInput = ({ type = "text", initialState = "" }) => {
    const [value, setValue] = useState(initialState);

    const onChange = (e) => {
      setValue(e.target.value);
    };

    return {
      value,
      onChange,
      type,
    };
  };

  const email = useValueInput({ type: "email", initialState: "" });
  const password = useValueInput({ type: "password", initialState: "" });

  return (
    <div className="login">
      <div className="login__card">
        <h1>LamaSocial</h1>

        <form className="login__form" >
          <div className="login__inputContainer" >
            <EmojiEmotionsIcon className="login__icon" />
            <input placeholder="Email" {...email} />
          </div>
          <div className="login__inputContainer" >
            <VpnKeyIcon className="login__icon" />
            <input placeholder="Password" {...password} />
          </div>

          <button>Log In</button>
        </form>

        <div className="login__register">
          <span> Forgot your password? </span>

          <button className="login__button" >Register</button>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
