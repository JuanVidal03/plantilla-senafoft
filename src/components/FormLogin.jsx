import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
   
const  FormLogin = () => {
    return (
        <Card className="w-full max-w-[450px] flex p-7 " color="white" shadow={true}>
            <h1 className="font-semibold text-black text-3xl">¡Iniciar Sesión!</h1>
            <Typography color="gray" className="mt-1 font-normal">
                Nice to meet you! Enter your details to register.
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Your Name
                </Typography>
                <Input
                    size="lg"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                        className: "before:content-none after:content-none",
                    }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Your Email
                </Typography>
                <Input
                    size="lg"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                    className: "before:content-none after:content-none",
                    }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Password
                </Typography>
                <Input
                    type="password"
                    size="lg"
                    placeholder="********"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                    className: "before:content-none after:content-none",
                    }}
                />
                </div>
                <Checkbox
                label={
                    <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                    >
                    I agree the
                    <a
                        href="#"
                        className="font-medium transition-colors hover:text-gray-900"
                    >
                        &nbsp;Terms and Conditions
                    </a>
                    </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
                />
                <Button className="mt-6" fullWidth>Ingresar</Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    Already have an account?{" sdfsdf"}
                    <a href="#" className="font-medium text-gray-900">
                        Sign In
                    </a>
                </Typography>
            </form>
        </Card>
    );
}

export default FormLogin;
