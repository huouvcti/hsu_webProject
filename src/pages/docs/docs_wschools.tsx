import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import feather from "feather-icons";


import SubInform from "@components/subInform";

import w3sImg from "@images/subPage/w3s.jpeg"



const Docs_wschools = () => {
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
                    <Link to="/docs/w3schools">W3Schools</Link>
                </div>

                <SubInform 
                    img={"https://thelifedge.com/wp-content/uploads/2021/10/W3Schools-Main.png"}
                    title={"W3Schools"}
                    des={"W3Schools는 웹 개발 및 프로그래밍에 관한 온라인 학습 자료를 제공하는 웹 사이트입니다. 이 사이트는 HTML, CSS, JavaScript, PHP, Python, SQL 등과 같은 웹 개발 언어 및 기술에 대한 튜토리얼, 예제 코드, 설명 등을 제공하여 사용자들이 해당 기술을 배우고 익힐 수 있도록 도와줍니다."}
                    link={"https://www.w3schools.com/"}
                />

                <div className="captureDiv">
                    <img src={w3sImg} alt="" />
                </div>

            </div>
        </section>
    )
}


export default Docs_wschools;