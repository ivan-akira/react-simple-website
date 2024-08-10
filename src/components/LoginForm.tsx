import { useRef, useState } from "react";
import EmailValidator from "email-validator";

interface Prop {
  onLogin: () => void;
}

interface IsValid {
  isEmailValid: boolean | null;
  isPasswordValid: boolean | null;
}

const LoginForm = ({ onLogin }: Prop) => {
  const [isValid, setIsValid] = useState<IsValid>({
    isEmailValid: null,
    isPasswordValid: null,
  });
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  function buildInputClassName(isValid: boolean | null): string {
    if (isValid === null) {
      return "form-control";
    }
    return "form-control " + (isValid ? "is-valid" : "is-invalid");
  }

  const handleValidation = () => {
    let isEmailValid = EmailValidator.validate(emailRef.current?.value ?? "");
    let isPasswordValid = (passwordRef.current?.value ?? "").length > 0;

    if (isEmailValid && isPasswordValid) {
      onLogin();
    } else {
      setIsValid({
        isEmailValid: isEmailValid,
        isPasswordValid: isPasswordValid,
      });
    }
  };

  return (
    <div className="p-5">
      <div className="mb-3">
        <label htmlFor="loginEmail" className="form-label">
          Email
        </label>
        <input
          type="email"
          className={buildInputClassName(isValid.isEmailValid)}
          id="loginEmail"
          aria-describedby="validationMessageEmail"
          ref={emailRef}
        />
        <div id="validationMessageEmail" className="invalid-feedback">
          Please enter valid email address.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="loginPassword" className="form-label">
          Password
        </label>
        <input
          type="password"
          className={buildInputClassName(isValid.isPasswordValid)}
          id="loginPassword"
          aria-describedby="validationMessagePassword"
          ref={passwordRef}
        />
        <div id="validationMessagePassword" className="invalid-feedback">
          Please enter your password.
        </div>
      </div>
      <button className="btn btn-primary" onClick={handleValidation}>
        Login
      </button>
    </div>
  );
};

export default LoginForm;
