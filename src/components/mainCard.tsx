import React, { useEffect } from "react";

import { Link } from "react-router-dom";

// data { link, img, title }

const MainCard = (props: any) => {

    return (
        <Link to={props.data.link} className="card">
            <div className="imgWrap">
                <img src={props.data.img} alt="" />
            </div>
            <p>{props.data.title}</p>
        </Link>
    )
}


export default MainCard;