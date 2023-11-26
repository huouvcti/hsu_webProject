import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import feather from "feather-icons";


import SubInform from "@components/subInform";

import jqImg from "@images/subPage/jquery.png"



const Library_jquery = () => {
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
                    <Link to="/docs/jquery">jquery</Link>
                </div>

                <SubInform 
                    img={"https://velog.velcdn.com/images/jhk684/post/899f97d5-274f-4d68-9646-100d3cff4c02/image.png"}
                    title={"jQuery"}
                    des={"jQuery는 JavaScript를 기반으로 한 강력하고 경량화된 라이브러리로, HTML 문서를 탐색하고 조작하는데 사용됩니다. 특히 DOM (Document Object Model) 조작 및 이벤트 처리를 단순화하여 개발자들이 간단하고 효과적으로 웹 페이지를 만들 수 있도록 도와줍니다."}
                    link={"https://jquery.com/"}
                />

                <div className="captureDiv">
                    <img src={jqImg} alt="" />
                </div>

            </div>
        </section>
    )
}


export default Library_jquery;