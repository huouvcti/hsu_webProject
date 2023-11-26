import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import feather from "feather-icons";


import SubInform from "@components/subInform";

import jqImg from "@images/subPage/jquery.png"



const Tools_rgbHex = () => {
    useEffect(()=>{
        feather.replace();
    },[])

    return (
        <section>
            <div className="subMenu">

                <div className="navList">
                    <Link to="/"><i data-feather="home"></i></Link>
                    <i data-feather="chevron-right"></i>
                    <Link to="/tools">Tools</Link>
                    <i data-feather="chevron-right"></i>
                    <Link to="/library/rgbHex">RGB - HEX</Link>
                </div>

                
                <div>
                    <h1>RGB to HEX</h1>
                    <div>
                        <div>
                            <div>
                                <p>RGB</p>
                                <div>
                                    <input type="text" placeholder="255"/>
                                    <input type="text" placeholder="255"/>
                                    <input type="text" placeholder="255"/>
                                </div>
                            </div>

                            <div>
                                <p>Hex</p>
                                <input type="text" />
                            </div>
                        </div>

                        <div></div>
                    </div>
                </div>
                

            </div>
        </section>
    )
}


export default Tools_rgbHex;