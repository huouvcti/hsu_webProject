import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import feather from "feather-icons";


import SubInform from "@components/subInform";

import mdnImg from "@images/subPage/mdn.jpeg"



const Docs_mdn = () => {
    useEffect(()=>{
        feather.replace();
    },[])

    return (
        <section>
            <div className="subMenu">

                <div className="navList">
                    <Link to="/"><i data-feather="home"></i></Link>
                    <i data-feather="chevron-right"></i>
                    <Link to="/docs">Docs</Link>
                    <i data-feather="chevron-right"></i>
                    <Link to="/docs/mdn">MDN</Link>
                </div>

                <SubInform 
                    img={"https://static.vecteezy.com/system/resources/previews/007/581/046/non_2x/mdn-letter-logo-design-on-black-background-mdn-creative-initials-letter-logo-concept-mdn-letter-design-vector.jpg"}
                    title={"MDN"}
                    des={"MDN은 Mozilla Developer Network의 약자로, 모질라가 운영하는 개발자를 위한 온라인 자료와 도구를 제공하는 웹 플랫폼입니다. MDN은 웹 기술과 관련된 다양한 주제에 대한 문서, 튜토리얼, 예제 코드, API 참조 등을 제공하여 웹 개발자들이 웹 표준을 준수하고 최신 기술을 학습할 수 있도록 도와줍니다."}
                    link={"https://developer.mozilla.org/ko/"}
                />

                <div className="captureDiv">
                    <img src={mdnImg} alt="" />
                </div>

            </div>
        </section>
    )
}


export default Docs_mdn;