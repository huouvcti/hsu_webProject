import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import feather from "feather-icons";


import SubInform from "@components/subInform";

import mdnImg from "@images/subPage/mdn.jpeg"



const Assets_images = () => {
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
                    <Link to="/assets/images">Images</Link>
                </div>

                <SubInform 
                    img={"https://images.unsplash.com/opengraph/1x1.png?blend=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1695977110890-9e052bc189ec%3Fblend%3D000000%26blend-alpha%3D10%26blend-mode%3Dnormal%26crop%3Dfaces%252Cedges%26h%3D630%26mark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Fwordmark.png%26mark-align%3Dmiddle%252Ccenter%26mark-w%3D424%26w%3D1200%26auto%3Dformat%26fit%3Dcrop%26q%3D60%26ixid%3DM3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzAwODgxMjY2fA%26ixlib%3Drb-4.0.3&blend-w=1&h=630&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&w=1200&auto=format&fit=crop&q=60"}
                    title={"Unsplash"}
                    link={"https://unsplash.com/ko"}
                />
                <SubInform 
                    img={"https://www.figma.com/community/thumbnail?resource_id=829802086526281657&resource_type=plugin"}
                    title={"Pexels"}
                    link={"https://www.pexels.com/ko-kr/"}
                />
                <SubInform 
                    img={"https://onweb.co.kr/data/file/upgrade/31750736_JOCqjES2_d63a955851d1711769ab7c6abed7d013b855e553.png"}
                    title={"Pixabay"}
                    link={"https://pixabay.com/ko/"}
                />
                <SubInform 
                    img={"https://blog.kakaocdn.net/dn/dNldpT/btrL0UFzxdv/Ss0ANLitxfOJvLqItfhH40/img.png"}
                    title={"Freepik"}
                    link={"https://www.freepik.com/"}
                />
                <SubInform 
                    img={"https://assets-global.viveport.com/vr_developer_published_assets/app/425befd0-fdfa-49fc-9204-4b696cfd9f3f/media/publish/image_1.jpg"}
                    title={"Sketchfab"}
                    link={"https://sketchfab.com/"}
                />
                
            </div>
        </section>
    )
}


export default Assets_images;