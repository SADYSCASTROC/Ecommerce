import { Route,Routes,Navigate } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"
import { InicioPage,SearchPage,Categors,ProductoInfoPage } from "../pages"

export const ProdutsRouters = () => {
  return (
    <>
        <Navbar/>
        <Routes>
                <Route path="inicio" element={<InicioPage />} />
                <Route path="ProductoInfo/:id" element={<ProductoInfoPage />} />
                <Route path="categorias/:nameCategory" element={<Categors />} />
                <Route path="buscar" element={<SearchPage />} />
                <Route path="/" element={<Navigate to="/inicio"/>} />
            </Routes>
    </>
  )
}
