import React, { useEffect } from "react";

import { Link } from "react-router-dom";


import MainCard from "@components/mainCard";


const Library = () => {

    const subMenu = [
        {link: "/library/jquery", title: "jQuery", img: "https://velog.velcdn.com/images/jhk684/post/899f97d5-274f-4d68-9646-100d3cff4c02/image.png"},
        {link: "/library/anime", title: "Anime.js", img: "https://miro.medium.com/v2/resize:fit:1200/1*_8PW5R-S_Ofg8xeopGt-pw.png"},
        {link: "/library/fullpage", title: "fullPage.js", img: "https://blog.kakaocdn.net/dn/u2TST/btqCd1QcX7o/n7eCo2i5g6GpV5auSGpAeK/img.png"},
        {link: "/library/aos", title: "AOS.js", img: "https://velog.velcdn.com/images/whtmdgn1409/post/615efb05-01e2-400b-837f-4ebc41a4a0a8/image.jfif"},
        {link: "/library/three", title: "Three.js", img:"https://velog.velcdn.com/images/seongmini/post/dca8d73c-898e-4f6e-80ac-7695ce24e538/image.svg"}
    ]

    return (
        <section>
            <div className="mainMenu">

                <div className="menuDes">
                    <h1>Library</h1>
                    <p>웹 디자인에 활용하기 좋은 라이브러리들을 소개합니다.</p>
                </div>
                
                <div className="cardWrap">
                    {
                        subMenu.map((value) => (
                            <MainCard
                                data = {value}
                            />
                        ))
                    }
                </div>
                
            </div>
        </section>
    )
}


export default Library;