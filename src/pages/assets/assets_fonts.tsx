import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import feather from "feather-icons";


import SubInform from "@components/subInform";

import mdnImg from "@images/subPage/mdn.jpeg"



const Assets_fonts = () => {
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
                    <Link to="/assets/fonts">Fonts</Link>
                </div>

                <SubInform 
                    img={"https://designroom.com/wp-content/uploads/2019/03/Anna-March-Blog.jpg"}
                    title={"Google Fonts"}
                    link={"https://fonts.google.com/"}
                />
                <SubInform 
                    img={"https://campaign-cdn.pstatic.net/0/campaign/2022/09/hangeulday/og_main.jpg"}
                    title={"네이버 한글한글 아름답게"}
                    link={"https://hangeul.naver.com/font"}
                />
                <SubInform 
                    img={"https://noonnu.cc/noonnu_og.png"}
                    title={"눈누"}
                    link={"https://noonnu.cc/index"}
                />
                <SubInform 
                    img={"https://blog.kakaocdn.net/dn/BGFq2/btrc1eGXY0Q/kUKU2xFQcplQ1j8Z1ArCTK/img.png"}
                    title={"공유마당 무료폰트"}
                    link={"https://gongu.copyright.or.kr/gongu/bbs/B0000018/list.do?menuNo=200195"}
                />
                <SubInform 
                    img={"https://assets.hongkiat.com/uploads/21-most-visited-free-fonts-site/Fonts-Squirrel.jpg"}
                    title={"Font Squirrel"}
                    link={"https://www.fontsquirrel.com/"}
                />
                
            </div>
        </section>
    )
}


export default Assets_fonts;