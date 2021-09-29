import { useState } from "react";
import "./RegisterPage.css";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';


const RegisterPage = () => {
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
  const passwordAgain = useValueInput({ type: "password", initialState: "" });
  const userName = useValueInput({ type:"text" , initialState:"" })

  return (
    <div className="login">
      <div className="register__card">
        <h1>LamaSocial</h1>

        <form className="register__form" >
          <div className="register__inputContainer" >
            <AccessibilityNewIcon className="register__icon" />
            <input placeholder="Username" {...userName} />
          </div>
          <div className="register__inputContainer" >
            <EmojiEmotionsIcon className="register__icon" />
            <input placeholder="Email" {...email} />
          </div>
          <div className="register__inputContainer" >
            <VpnKeyIcon className="register__icon" />
            <input placeholder="Password" {...password} />
          </div>
          <div className="register__inputContainer" >
            <VpnKeyIcon className="register__icon" />
            <input placeholder="Password Again" {...passwordAgain} />
          </div>

          <button>Register</button>
        </form>

        <div className="register__register">

          <button className="register__button" >Log into your Account</button>
        </div>

      </div>
    </div>
  );
};

export default RegisterPage;
