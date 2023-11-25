import React, { useEffect } from "react";

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <h1 className="h-title"><Link to="/docs">WebHelper</Link></h1>

            <ul className="h-gnb">
                <li><Link to="/docs">Docs</Link></li>
                <li><Link to="/">Ask</Link></li>
                <li><Link to="/">Examples</Link></li>
                <li><Link to="/">Assets</Link></li>
                <li><Link to="/">Tools</Link></li>


                <div className="h-lnb">
                    <ul>
                        <li><Link to="/docs/w3school">w3school</Link></li>
                        <li><Link to="/ss">Docs</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/ss">Docs</Link></li>
                        <li><Link to="/ss">Docs</Link></li>
                        <li><Link to="/ss">Docs</Link></li>
                        <li><Link to="/ss">Docs</Link></li>
                    </ul>
                    <ul>

                    </ul>
                    <ul>

                    </ul>
                    <ul>

                    </ul>
                </div>
            </ul>

            
            

        </header>
    )
}


export default Header;