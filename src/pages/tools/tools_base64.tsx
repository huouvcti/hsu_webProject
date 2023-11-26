import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import feather from "feather-icons";


import SubInform from "@components/subInform";





const Tools_base64 = () => {
    useEffect(()=>{
        feather.replace();
    },[])


    const [string, setString] = useState("");
    const [resultBase64, setResultBase64] = useState("");

    useEffect(()=>{
        const encoded = btoa(string);
        setResultBase64(encoded);
    },[string])


    const [base64, setBase64] = useState("");
    const [resultString, setResultString] = useState("");

    useEffect(()=>{
        const decoded = atob(base64);
        setResultString(decoded);
    },[base64])
    


    return (
        <section>
            <div className="subMenu">

                <div className="navList">
                    <Link to="/"><i data-feather="home"></i></Link>
                    <i data-feather="chevron-right"></i>
                    <Link to="/tools">Tools</Link>
                    <i data-feather="chevron-right"></i>
                    <Link to="/library/base64">Base64</Link>
                </div>

                <div className="base64">
                    <h1>Base64 인코딩</h1>

                    <div className="rgbHex_content">
                        <textarea name="" value={string} onChange={(event)=>setString(event.target.value)}></textarea>
                        
                        <p>{resultBase64}</p>
                    </div>
                </div>

                <hr />

                <div className="base64">
                    <h1>Base64 디코딩</h1>

                    <div className="rgbHex_content">
                        <textarea name="" value={base64} onChange={(event)=>setBase64(event.target.value)}></textarea>
                        
                        <p>{resultString}</p>
                    </div>
                    
                </div>
                
                
                
                
                

            </div>
        </section>
    )
}


export default Tools_base64;