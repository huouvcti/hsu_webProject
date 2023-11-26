import React, { useEffect } from "react";

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <h1 className="h-title"><Link to="/">WebHelper</Link></h1>

            <ul className="h-gnb">
                <li><Link to="/docs">Docs</Link></li>
                <li><Link to="/examples">Examples</Link></li>
                <li><Link to="/assets">Assets</Link></li>
                <li><Link to="/library">Library</Link></li>
                <li><Link to="/tools">Tools</Link></li>


                <div className="h-lnb">
                    <ul>
                        <li><Link to="/docs/w3schools">W3Schools</Link></li>
                        <li><Link to="/docs/mdn">MDN</Link></li>
                    </ul>
                    
                    <ul>
                        <li><Link to="https://www.gdweb.co.kr/main/" className="external_link">GDWEB</Link></li>
                        <li><Link to="https://www.awwwards.com/" className="external_link">Awwwards</Link></li>
                        <li><Link to="https://www.cssdesignawards.com/" className="external_link">CDA</Link></li>
                        <li><Link to="https://www.siteinspire.com/" className="external_link">Siteinspire</Link></li>
                        <li><Link to="https://www.pinterest.co.kr/" className="external_link">Pinterest</Link></li>
                    </ul>
                    
                    <ul>
                        <li><Link to="/assets/icons">Icons</Link></li>
                        <li><Link to="/assets/fonts">Fonts</Link></li>
                        <li><Link to="/assets/images">Images</Link></li>
                    </ul>

                    <ul>
                        <li><Link to="/library/jquery">jQuery</Link></li>
                        <li><Link to="/library/anime">Anime.js</Link></li>
                        <li><Link to="/library/fullpage">fullPage.js</Link></li>
                        <li><Link to="/library/aos">AOS.js</Link></li>
                        <li><Link to="/library/three">Three.js</Link></li>
                    </ul>

                    <ul>
                        <li><Link to="/tools/rgbHex">RGB - HEX</Link></li>
                        <li><Link to="/tools/Base64">Base64</Link></li>
                        <li><Link to="https://www.toolo.kr/pxtoem/" className="external_link">PX - EM</Link></li>
                        <li><Link to="https://resttesttest.com/" className="external_link">Rest test</Link></li>
                    </ul>
                </div> 
            </ul>

            
            

        </header>
    )
}


export default Header;