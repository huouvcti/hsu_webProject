import React, { useEffect } from "react";

import { Link } from "react-router-dom";


import MainCard from "@components/mainCard";


const Tools = () => {

    const subMenu = [
        {link: "/tools/rgbHex", title: "RGB - HEX", img: "https://cdn.usbrandcolors.com/images/colors/light-red.png"},
        {link: "/tools/pxEm", title: "PX - EM", img: "https://smazee.com/uploads/images/css-unit-4.png"},
    ]

    return (
        <section>
            <div className="mainMenu">

                <div className="menuDes">
                    <h1>Tools</h1>
                    <p>웹 개발 시 유용한 도구 모음</p>
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


export default Tools;