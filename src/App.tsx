import Login from "./pages/Login";
import Product from "./pages/Product";
import { useState } from "react";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin(true);
  };

  const handleLogout = () => {
    setIsLogin(false);
  };

  if (!isLogin) {
    return <Login isLogin={isLogin} onLogin={handleLogin} />;
  }

  return <Product isLogin={isLogin} onLogout={handleLogout} />;
};

export default App;
