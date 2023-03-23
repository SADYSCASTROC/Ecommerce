import { Route,Routes,Navigate } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"
import { InicioPage,Categors,ProductoInfoPage } from "../pages"
import { Footer } from "../components"

export const ProdutsRouters = () => {
  return (
    <>
        <Navbar/>
        <Routes>
                <Route path="inicio" element={<InicioPage />} />
                <Route path="ProductoInfo/:id" element={<ProductoInfoPage />} />
                <Route path="categorias/:nameCategory" element={<Categors />} />
                <Route path="/" element={<Navigate to="/inicio"/>} />
            </Routes>
            <Footer/>
    </>
  )
}
