import React, { useEffect } from "react";

import { Link } from "react-router-dom";


import MainCard from "@components/mainCard";


const Assets = () => {

    const subMenu = [
        {link: "/assets/icons", title: "Icons", img: "https://img.freepik.com/free-vector/illustration-of-business-concept_53876-9271.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698364800&semt=ais"},
        {link: "/assets/fonts", title: "Fonts", img:"https://cdn.logojoy.com/wp-content/uploads/20230525152328/Types-of-fonts-header-Image.png"},
        {link: "/assets/images", title: "Images", img:"https://media.istockphoto.com/id/1368411105/ko/%EB%B2%A1%ED%84%B0/%EB%82%98%EB%AC%B4-%ED%8F%89%ED%8F%89%ED%95%9C-%EB%82%98%EB%AC%B4-%EC%88%B2-%EB%B0%8F-%EB%8D%A4%EB%B6%88%EC%9D%98-%EB%B2%A1%ED%84%B0-%EC%84%B8%ED%8A%B8%EC%9E%85%EB%8B%88%EB%8B%A4.jpg?s=612x612&w=0&k=20&c=d3xpdhIvfR4Oi-i5fFiKfClt-jUBQlK2jsHNiu0s7KA="}
    ]

    return (
        <section>
            <div className="mainMenu">

                <div className="menuDes">
                    <h1>Assets</h1>
                    <p>웹 디자인에 필요한 요소(아이콘, 폰트, 이미지)를 무료로 구할 수 있는 페이지를 소개합니다.</p>
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


export default Assets;