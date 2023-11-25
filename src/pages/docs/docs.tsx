import React, { useEffect } from "react";

import { Link } from "react-router-dom";


const Docs = () => {
    return (
        <section>
            <div className="mainMenu">

                <div className="menuDes">
                    <h1>Docs</h1>
                    <p>관련 문서들 입니다.</p>
                </div>
                

                <div className="cardWrap">
                    <Link to="" className="card">
                        <div className="imgWrap">
                            <img src="https://thelifedge.com/wp-content/uploads/2021/10/W3Schools-Main.png" alt="" />
                        </div>
                        
                        <p>W3school</p>
                    </Link>

                    <Link to="" className="card">
                        <div className="imgWrap">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/MDN_Web_Docs_logo.svg/1200px-MDN_Web_Docs_logo.svg.png" alt="" />
                        </div>
                        
                        <p>MDN</p>
                    </Link>


                    <Link to="" className="card">
                        <div className="imgWrap">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/MDN_Web_Docs_logo.svg/1200px-MDN_Web_Docs_logo.svg.png" alt="" />
                        </div>
                        
                        <p>MDN</p>
                    </Link>
                </div>
                
            </div>
        </section>
    )
}


export default Docs;