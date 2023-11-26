import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import feather from "feather-icons";


import SubInform from "@components/subInform";

import mdnImg from "@images/subPage/mdn.jpeg"



const Assets_icons = () => {
    useEffect(()=>{
        feather.replace();
    },[])

    return (
        <section>
            <div className="subMenu">

                <div className="navList">
                    <Link to="/"><i data-feather="home"></i></Link>
                    <i data-feather="chevron-right"></i>
                    <Link to="/assets">Assets</Link>
                    <i data-feather="chevron-right"></i>
                    <Link to="/assets/icons">Icons</Link>
                </div>

                <SubInform 
                    img={"https://www.sketchappsources.com/resources/source-image/google-material-icons-sketch-library.png"}
                    title={"Google Material Icons"}
                    link={"https://fonts.google.com/icons"}
                />
                <SubInform 
                    img={"https://img.fortawesome.com/1ce05b4b/open-graph-general.png"}
                    title={"Font Awesome"}
                    link={"https://fontawesome.com/icons"}
                />
                <SubInform 
                    img={"https://media.flaticon.com/share/flaticon-generic.jpg"}
                    title={"Flaticon"}
                    link={"https://www.flaticon.com/kr/"}
                />
                <SubInform 
                    img={"https://blog.icons8.com/wp-content/uploads/2020/10/collections-icons8-1-1280x720.png"}
                    title={"Icons8"}
                    link={"https://icons8.com/"}
                />
                <SubInform 
                    img={"https://www.figma.com/community/thumbnail?resource_id=1144676345861942963&resource_type=plugin"}
                    title={"Feather Icons"}
                    link={"https://feathericons.com/"}
                />
                

                
            </div>
        </section>
    )
}


export default Assets_icons;