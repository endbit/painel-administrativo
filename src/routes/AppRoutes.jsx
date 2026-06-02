import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateLayout from "../components/PrivateLayout/PrivateLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Produtos from "../pages/Produtos/Produtos";
import Posts from "../pages/Posts/Posts";
import Configuracoes from "../pages/Configuracoes/Configuracoes";

export default function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route element={<PrivateLayout/>}>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/produtos" element={<Produtos/>}/>
                    <Route path="/posts" element={<Posts/>}/>
                    <Route path="/configuracoes" element={<Configuracoes/>}/>
                </Route>
            </Routes>
        </Router>
    )
}