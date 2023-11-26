import React, { useEffect } from "react";

import { Link } from "react-router-dom";


import MainCard from "@components/mainCard";


const Examples = () => {

    const subMenu = [
        {link: "https://www.gdweb.co.kr/main/", title: "GDWEB:지디웹", img:"https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/f8ul/image/xjlnyutuknK8qwsUVqJGQ9DS9r8.png"},
        {link: "https://www.awwwards.com/", title: "Awwwards", img: "https://assets.awwwards.com/awards/submissions/2022/02/620f70eabacc1911266197.jpg"},
        {link: "https://www.cssdesignawards.com/", title: "CSS Design Awards", img:"https://sgd.com.au/wp-content/uploads/2016/02/css-design-awards-1024x665-1.jpg"},
        {link: "https://www.siteinspire.com/", title: "Siteinspire", img:"https://www.bookmarks.design/media/image/siteinspire.jpg"},
        {link: "https://www.pinterest.co.kr/", title: "Pinterest", img:"https://techneedle.com/wp-content/uploads/2012/10/pinterest-logo.jpg"}
    ]

    return (
        <section>
            <div className="mainMenu">

                <div className="menuDes">
                    <h1>Examples</h1>
                    <p>웹 디자인 참고 사이트들을 소개합니다.</p>
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


export default Examples;