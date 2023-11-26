import { Routes, Route } from "react-router-dom";

import Header from "@components/header/header";
import Footer from "@components/footer/footer";


import Home from "@pages/home";

import Docs from "@pages/docs/docs";
import Docs_wschools from "@pages/docs/docs_wschools";
import Docs_mdn from "@pages/docs/docs_mdn";

import Library from "@pages/Library/library";
import Library_jquery from "@pages/Library/library_jquery";
import Library_anime from "@pages/Library/library_anime";
import Library_fullpage from "@pages/Library/library_fullpage";
import Library_aos from "@pages/Library/library_aos";
import Library_three from "@pages/Library/library_three";

import Examples from "@pages/examples/examples";

import Assets from "@pages/assets/assets";
import Assets_icons from "@pages/assets/assets_icons";
import Assets_fonts from "@pages/assets/assets_fonts";
import Assets_images from "@pages/assets/assets_images";

import Tools from "@pages/tools/tools";
import Tools_rgbHex from "@pages/tools/tools_rgbHex";

const RootRoutes = () => {
    return (
        <>
            <Header></Header>
            
            <Routes>
                <Route path="/" element={<Home/>} />

                <Route path="/docs" element={<Docs/>} />
                <Route path="/docs/w3schools" element={<Docs_wschools/>} />
                <Route path="/docs/mdn" element={<Docs_mdn/>} />

                <Route path="/library" element={<Library/>} />
                <Route path="/library/jquery" element={<Library_jquery/>} />
                <Route path="/library/anime" element={<Library_anime/>} />
                <Route path="/library/fullpage" element={<Library_fullpage/>} />
                <Route path="/library/aos" element={<Library_aos/>} />
                <Route path="/library/three" element={<Library_three/>} />

                <Route path="/examples" element={<Examples/>} />
            
                <Route path="/assets" element={<Assets/>} />
                <Route path="/assets/icons" element={<Assets_icons/>} />
                <Route path="/assets/fonts" element={<Assets_fonts/>} />
                <Route path="/assets/images" element={<Assets_images/>} />

                <Route path="/tools" element={<Tools/>} />
                <Route path="/tools/rgbHex" element={<Tools_rgbHex/>} />
            </Routes>
            
            <Footer></Footer>
        </>
    )

}


export default RootRoutes;