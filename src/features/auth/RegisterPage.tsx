import RegisterForm from "./forms/RegisterForm";
import { Link } from "react-router";

const RegisterPage = () => {
    return (
        <div>
            <h1>Registro</h1>
            <RegisterForm/>
            <p>Ya tienes cuenta?, <Link to="/login">Inicia sesion</Link></p>
        </div>
    );
};

export default RegisterPage;
