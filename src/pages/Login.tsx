import LoginForm from "../components/LoginForm";
import TopBar from "../components/TopBar";

interface Prop {
  isLogin: boolean;
  onLogin: () => void;
}

const Login = ({ isLogin, onLogin }: Prop) => {
  return (
    <>
      <TopBar isLogin={isLogin}></TopBar>
      <LoginForm onLogin={onLogin}></LoginForm>
    </>
  );
};

export default Login;
