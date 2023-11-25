import { Routes, Route } from "react-router-dom";

import Header from "@components/header/header";
import Footer from "@components/footer/footer";


import Home from "@pages/home";

import Docs from "@pages/docs/docs";
import Detail from "@pages/docs/detail";

const RootRoutes = () => {
    return (
        <>
            <Header></Header>
            
            <Routes>
                <Route path="/" element={<Home/>} />

                <Route path="/docs" element={<Docs/>} />

                <Route path="/docs/:subMenu" element={<Detail/>} />
            </Routes>
            
            <Footer></Footer>
        </>
    )

}


export default RootRoutes;