import { Route, Routes } from "react-router-dom";
import { CarritoPage } from "../auth/pages/CarritoPage";
import { ProdutsRouters } from "../products/routers/ProdutsRouters";
import { Login } from "../auth/pages/Login";
export const AppRoutes = () => {
    return (
        <>
            <Routes>
            <Route path="login" element={<Login />} />
                <Route path="carrito" element={<CarritoPage />} />
                <Route path="/*" element={<ProdutsRouters/>} />
            </Routes>
        </>
    )
}
