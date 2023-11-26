import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import feather from "feather-icons";


import SubInform from "@components/subInform";

import jqImg from "@images/subPage/jquery.png"



const Library_aos = () => {
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
                    <Link to="/library/aos">AOS</Link>
                </div>

                <SubInform 
                    img={"https://velog.velcdn.com/images/whtmdgn1409/post/615efb05-01e2-400b-837f-4ebc41a4a0a8/image.jfif"}
                    title={"AOS"}
                    des={"AOS(Animate On Scroll)는 스크롤 이벤트에 반응하여 웹 페이지의 요소에 애니메이션을 추가하는 라이브러리입니다. 즉, 사용자가 웹 페이지를 스크롤하면서 특정 요소들이 화면에 나타날 때, AOS.js는 사전에 정의된 애니메이션 효과를 적용하여 요소를 부드럽게 나타나게 하는 기능을 제공합니다. 이는 사용자에게 더 흥미로운 시각적 경험을 제공하고 웹 페이지의 인터랙티브한 요소를 강화하는 데 도움이 됩니다."}
                    link={"https://michalsnik.github.io/aos/"}
                />

                <div className="captureDiv">
                    <img src="https://miro.medium.com/v2/resize:fit:2000/1*7LcGpcKILbRmnqcNZdpkjg.gif" alt="" />
                </div>

                

            </div>
        </section>
    )
}


export default Library_aos;