import React, { useEffect } from "react";

import { Link } from "react-router-dom";


import MainCard from "@components/mainCard";


const Docs = () => {

    const subMenu = [
        {link: "/docs/w3schools", title: "W3School", img: "https://thelifedge.com/wp-content/uploads/2021/10/W3Schools-Main.png"},
        {link: "/docs/mdn", title: "MDN", img:"https://static.vecteezy.com/system/resources/previews/007/581/046/non_2x/mdn-letter-logo-design-on-black-background-mdn-creative-initials-letter-logo-concept-mdn-letter-design-vector.jpg"}
    ]

    return (
        <section>
            <div className="mainMenu">

                <div className="menuDes">
                    <h1>Docs</h1>
                    <p>웹 기술과 관련된 문서들을 소개합니다.</p>
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


export default Docs;