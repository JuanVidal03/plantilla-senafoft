import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import { Charts } from "../pages/Charts";


const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<Charts/>} />
        </Routes>
    );
}

export default AllRoutes;
