import FormLogin from "../components/FormLogin";


const Login = () => {

    document.title = "Iniciar Sesion";

    return (
        <div className="w-full h-screen bg-red-100 flex justify-center items-center">
            <FormLogin/>
        </div>
    );
}

export default Login;
