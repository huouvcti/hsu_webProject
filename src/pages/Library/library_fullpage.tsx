import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import feather from "feather-icons";


import SubInform from "@components/subInform";

import jqImg from "@images/subPage/jquery.png"



const Library_fullpage = () => {
    useEffect(()=>{
        feather.replace();
    },[])

    return (
        <section>
            <div className="subMenu">

                <div className="navList">
                    <Link to="/"><i data-feather="home"></i></Link>
                    <i data-feather="chevron-right"></i>
                    <Link to="/library">Library</Link>
                    <i data-feather="chevron-right"></i>
                    <Link to="/library/fullpage">fullPage.js</Link>
                </div>

                <SubInform 
                    img={"https://blog.kakaocdn.net/dn/u2TST/btqCd1QcX7o/n7eCo2i5g6GpV5auSGpAeK/img.png"}
                    title={"fullPagejs"}
                    des={"fullPage.js는 웹 페이지에서 전체 화면을 하나의 섹션으로 나누어 스크롤이나 버튼 클릭과 같은 사용자 인터랙션을 통해 각 섹션으로 이동하게 해주는 JavaScript 라이브러리입니다. 이 라이브러리를 사용하면 단일 페이지 애플리케이션 (Single Page Application, SPA) 스타일의 웹 사이트를 만들거나, 웹 페이지 내에서 특정 섹션 간의 부드러운 전환을 구현하는 데 도움이 됩니다."}
                    link={"https://alvarotrigo.com/fullPage/"}
                />

                <div className="captureDiv">
                    <img src="https://miro.medium.com/v2/resize:fit:1400/1*CV0eXCxfe85ToL88QrFXGg.gif" alt="" />
                    <img src="https://velog.velcdn.com/images/igun0423/post/5d778afd-a05b-49c9-9712-e8159617bb53/image.gif" alt="" />
                </div>

                

            </div>
        </section>
    )
}


export default Library_fullpage;