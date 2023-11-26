import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import feather from "feather-icons";


import SubInform from "@components/subInform";

import jqImg from "@images/subPage/jquery.png"



const Library_anime = () => {
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
                    <Link to="/library/anime">Anime.js</Link>
                </div>

                <SubInform 
                    img={"https://miro.medium.com/v2/resize:fit:1200/1*_8PW5R-S_Ofg8xeopGt-pw.png"}
                    title={"Anime.js"}
                    des={"Anime.js는 JavaScript로 만들어진 강력하고 가벼운 웹 애니메이션 라이브러리입니다. 이 라이브러리는 웹 페이지 또는 웹 애플리케이션에서 다양한 요소들을 부드럽게 애니메이션화하는 데 사용됩니다. Anime.js는 jQuery에 비해 가벼우면서도 강력한 기능을 제공하며, 간단하고 직관적인 API를 통해 사용자가 애니메이션을 쉽게 제어할 수 있도록 합니다."}
                    link={"https://animejs.com/"}
                />

                <div className="captureDiv">
                    <img src="https://i.pinimg.com/originals/6f/18/ac/6f18acb09f08068391b44242327860e8.gif" alt="" />
                    <img src="https://miro.medium.com/v2/resize:fit:2000/1*YXD4-CjVDFM1aqMTX0W0GA.gif" alt="" />
                    <img src="https://camo.githubusercontent.com/a5c1885a7c296b3a801224c925bf88359a9ee6cc246a3b1bffce10ae787ffca8/68747470733a2f2f6a756c69616e2e67722f616e696d652f616e696d656a732d76342d616e696d617461626c65732e6769663f763d33" alt="" />
                </div>

                

            </div>
        </section>
    )
}


export default Library_anime;