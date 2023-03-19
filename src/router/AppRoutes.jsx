import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { ProdutsRouters } from "../products/routers/ProdutsRouters";
export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path="/*" element={<ProdutsRouters/>} />
            </Routes>
        </>
    )
}
