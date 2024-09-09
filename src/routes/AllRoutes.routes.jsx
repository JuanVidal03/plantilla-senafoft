import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import { FormRegister } from "../components/formRegister";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<FormRegister/>} />
        </Routes>
    );
}

export default AllRoutes;
