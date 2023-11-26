import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import feather from "feather-icons";


const isRGB = (n: any) => {
    return (parseInt(n) <= 255 && parseInt(n)>=0) ? true : false
}


const Tools_rgbHex = () => {
    useEffect(()=>{
        feather.replace();
    },[])


    const [RGB, setRGB] = useState({
        R: "",
        G: "",
        B: ""
    });

    const [resultHEX, setResultHEX] = useState("");


    const rgbOnChange = (event: any) => {
        setRGB({...RGB, [event.target.name]: event.target.value})
    }

    useEffect(()=>{
        if(isRGB(RGB.R) && isRGB(RGB.G) && isRGB(RGB.B)) {
            const hex = parseInt(RGB.R).toString(16).padStart(2,"0") + parseInt(RGB.G).toString(16).padStart(2,"0") + parseInt(RGB.B).toString(16).padStart(2,"0");

            setResultHEX(hex)

            document.getElementById("color1")!.style.backgroundColor = "#"+hex;
            
        } else {
            setResultHEX("")
        }
    },[RGB])



    const [HEX, setHEX] = useState("");

    const [resultRGB, setResultRGB] = useState({
        R: "",
        G: "",
        B: ""
    });


    const hexOnChange = (event: any) => {
        setHEX(event.target.value)
    }

    useEffect(()=>{
        const hexRegex = /^[0-9a-fA-F]{6}$/;

        if(hexRegex.test(HEX)) {
            const [r, g, b] = HEX.match(/.{1,2}/g) || [];

            setResultRGB({
                R: parseInt(r!, 16).toString(),
                G: parseInt(g!, 16).toString(),
                B: parseInt(b!, 16).toString(),
            })

            document.getElementById("color2")!.style.backgroundColor = "#"+HEX;
        }
    },[HEX])


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

                
                <div className="rgbHex">
                    <h1>RGB to HEX</h1>
                    <div className="rgbToHex_content">
                        <div className="inputDiv">
                            <div className="inputRow">
                                <p><i data-feather="droplet"></i> RGB</p>
                                <div className="rgbGroup">
                                    <div className="rgbInput">
                                        <span style={{color: "#f00"}}>R</span>
                                        <input type="text" placeholder="255" name="R" value={RGB.R} onChange={rgbOnChange} />
                                    </div>

                                    <div className="rgbInput">
                                        <span style={{color: "#0f0"}}>G</span>
                                        <input type="text" placeholder="255" name="G" value={RGB.G} onChange={rgbOnChange}/>
                                    </div>

                                    <div className="rgbInput">
                                        <span style={{color: "#00f"}}>B</span>
                                        <input type="text" placeholder="255" name="B" value={RGB.B} onChange={rgbOnChange}/>
                                    </div>
                                </div>
                            </div>

                            <div className="inputRow">
                                <p><i data-feather="aperture"></i>Hex</p>
                                <p className="result">
                                    # {
                                        (!resultHEX)
                                        ? "올바른 RGB 값을 입력해주세요."
                                        : resultHEX
                                    }
                                </p>
                            </div>
                        </div>

                        <div className="colorVisual" id="color1">

                        </div>
                    </div>
                </div>


                <hr />


                <div className="rgbHex">
                    <h1>HEX to RGB</h1>
                    <div className="rgbToHex_content">
                        <div className="inputDiv">
                            <div className="inputRow">
                                <p><i data-feather="aperture"></i>Hex</p>
                                <p>
                                    # <input type="text" placeholder="000000" value={HEX} onChange={hexOnChange} />
                                </p>
                            </div>

                            <div className="inputRow">
                                <p><i data-feather="droplet"></i> RGB</p>
                                <div className="rgbGroup">
                                    <div className="rgbInput">
                                        <span style={{color: "#f00"}}>R</span>
                                        <p className="result">
                                            {
                                                (!resultRGB.R)
                                                ? "---"
                                                : resultRGB.R
                                            }
                                        </p>
                                    </div>

                                    <div className="rgbInput">
                                        <span style={{color: "#0f0"}}>G</span>
                                        <p className="result">
                                            {
                                                (!resultRGB.G)
                                                ? "---"
                                                : resultRGB.G
                                            }
                                        </p>
                                    </div>

                                    <div className="rgbInput">
                                        <span style={{color: "#00f"}}>B</span>
                                        <p className="result">
                                            {
                                                (!resultRGB.B)
                                                ? "---"
                                                : resultRGB.B
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="colorVisual" id="color2">

                        </div>
                    </div>
                </div>
                

            </div>
        </section>
    )
}


export default Tools_rgbHex;