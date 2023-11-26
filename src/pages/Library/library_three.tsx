import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import feather from "feather-icons";


import SubInform from "@components/subInform";

import jqImg from "@images/subPage/jquery.png"



const Library_three = () => {
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
                    <Link to="/library/three">Three.js</Link>
                </div>

                <SubInform 
                    img={"https://velog.velcdn.com/images/seongmini/post/dca8d73c-898e-4f6e-80ac-7695ce24e538/image.svg"}
                    title={"Three.js"}
                    des={"Three.js는 웹에서 3D 그래픽을 생성하고 표현하기 위한 JavaScript 라이브러리입니다. 이 라이브러리는 WebGL을 기반으로 하며, 3D 그래픽을 생성하는 데 필요한 다양한 기능과 도구를 제공합니다. Three.js를 사용하면 웹 개발자들은 상호작용성이 있는 3D 환경을 구축하고 웹 페이지에 통합할 수 있습니다."}
                    link={"https://threejs.org/"}
                />

                <div className="captureDiv">
                    <img src="https://velog.velcdn.com/images/qudgus21/post/5dbe88e6-2937-437c-a2ef-a3636f68a5ef/image.gif" alt="" />
                    <img src="https://velog.velcdn.com/images/toitoii080/post/7f496b60-054d-4f8f-af7d-287188fc3868/image.gif" alt="" />
                </div>

                

            </div>
        </section>
    )
}


export default Library_three;