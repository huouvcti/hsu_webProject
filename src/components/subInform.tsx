import React, { useEffect } from "react";

import { Link } from "react-router-dom";

// img, title, des, link

const SubInform = (props: any) => {

    return (
        <div className="inform">
            <div className="imgWrap">
                <img src={props.img} alt="" />
            </div>

            <div className="inform_text">
                <h1>{props.title}</h1>
                <p>{props.des}</p>
                <Link to={props.link} target="_blank">{props.title}로 이동</Link>
            </div>
        </div>
    )
}

export default SubInform;