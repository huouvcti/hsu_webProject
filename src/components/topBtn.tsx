import React, { useEffect, useState } from "react";
import feather from "feather-icons";


const TopBtn = () => {
    const [showButton, setShowButton] = useState(false);


    useEffect(()=> {
        feather.replace();
    },[showButton])

    const scrollToTop=()=>{
        window.scrollTo({
            top:0,
            left: 0,
            behavior:"smooth"
        })
    }

    useEffect(() => {
        const handleShowButton = () => {
          window.scrollY > 100 ? setShowButton(true) : setShowButton(false);
        };
    
        console.log(window.scrollY);
        window.addEventListener('scroll', handleShowButton);
        return () => {
          window.removeEventListener('scroll', handleShowButton);
        };
    },[]);

    return (
        <>
            {
                showButton
                ? <div className="topBtn" onClick={scrollToTop}>
                        <i data-feather="chevron-up"></i>
                    </div>
                : <></>
            }
            
        </>
    )
}

export default TopBtn;