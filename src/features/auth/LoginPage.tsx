import LoginForm from "./forms/LoginForm";
import { Link } from "react-router";

const LoginPage = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm/>
            <p>No tienes cuenta aun?, <Link to="/register">Registrate</Link> </p>
        </div>
    );
};

export default LoginPage;
