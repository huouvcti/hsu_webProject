import React, { useRef, useEffect } from "react";

import { Link } from 'react-scroll';

import anime from 'animejs';

import AOS from "aos";
import "aos/dist/aos.css";


const Home = () => {
    useEffect(()=> {
        var textWrapper = document.querySelector('.ml6 .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: true})
        .add({
            targets: '.ml6 .letter',
            translateY: ["1.2em", 0],
            translateZ: 0,
            duration: 1000,
            delay: (el, i) => 50 * i
        }).add({
            targets: '.ml6',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
    },[])

    useEffect(()=> {
        AOS.init();
    },[])


    useEffect(()=> {
        const container = document.querySelector('.container');
const keys = document.querySelectorAll('.key');
const panda = document.querySelector('.panda');
const eyes = document.querySelectorAll('.eye');
const features = document.querySelectorAll('.feature');
const leftear = document.querySelector('.leftear');
const rightear = document.querySelector('.rightear');
const mouth = document.querySelector('.mouth');



const calcValue = (mouse, width) => {
  return (((mouse/width)*limit)-(limit/2)).toFixed(1);
};



const limit = 15;
let timeout;
    window.addEventListener('mousemove', (event) => {
    if (timeout) window.cancelAnimationFrame(timeout);
    
    panda.classList.remove('idle');
        
    timeout = window.requestAnimationFrame(() => {
        let xValue = calcValue(event.x, window.innerWidth);
        let yValue = calcValue(event.y, window.innerHeight);
    
        [...features].forEach((feature) => {
        feature.style.transform = `translateX(${xValue}px) translateY(${yValue}px)`;
        });
        
        [...eyes].forEach((eye) => {
        eye.setAttribute('ry', '7.5');
        eye.style.transform = `translateX(${xValue*2}px) translateY(${yValue*2}px)`;
        });
        
        leftear.style.transform = `translateX(${-xValue*0.7}px) translateY(${-yValue*0.7}px)`;
        rightear.style.transform = `translateX(${-xValue*0.7}px) translateY(${-yValue*0.7}px)`;
        })
    }, false);
    },[])

    

    const fullpageRef = useRef(null);

    return (
        <div className="fullpage" ref={fullpageRef}>

            <Link
                to="section1"
                spy={true}
                smooth={true}
                offset={0} // 수정된 offset
                duration={500}
            >
                <div className="section" id="section1">
                    <h1 className="ml6">
                        <span className="text-wrapper">
                            <span className="letters">For Good WEB development</span>
                        </span>
                    </h1>
                </div>
            </Link>

            <Link
                to="section2"
                spy={true}
                smooth={true}
                offset={-100} // 수정된 offset
                duration={500}
            >
                <div className="section" id="section2">
                    <div 
                        data-aos="zoom-out-right"
                        data-aos-duration="1500">
                        
                    </div>

                    <div className="img1"
                        data-aos="zoom-out-right"
                        data-aos-duration="3000"
                        data-aos-offset="200">
                        <img src="https://poiemaweb.com/img/default-font.png" alt="" />
                    </div>

                    <div className="img2"
                        data-aos="flip-down"
                        data-aos-delay="1000"
                        data-aos-duration="700"
                        data-aos-offset="200">
                        <img src="https://cdn.icon-icons.com/image-packs/social_media_app_iconset_6814.png" alt="" />
                    </div>


                    <div className="img3"
                        data-aos="flip-up"
                        data-aos-duration="1500">
                        <img src="https://www.clipstudio.net/view/lp_c/img/design/visual_design-career.png" alt="" />
                    </div>

                    
                    <div className="img7"
                        data-aos="zoom-out-right"
                        data-aos-delay="1000"
                        data-aos-duration="1000">
                        <img src="https://png.pngtree.com/png-vector/20231015/ourmid/pngtree-3d-character-illustrator-standing-pose-png-image_10161392.png" alt="" />
                    </div>

                    <div className="txt1">
                        Make a beautiful web using various factors.
                    </div>
                </div>
            </Link>


            <Link
                to="section3"
                spy={true}
                smooth={true}
                offset={-100} // 수정된 offset
                duration={500}
            >
                <div className="section" id="section3">
                    <div className="container">


                        <svg className="panda idle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 199.13 148">
                            <path className="ear leftear" d="M47.08 17c-5.92-8-13.91-18.74-30-6.82S9 32.86 15 40.84 32.88 50 41.75 43.38 53 25 47.08 17z"/>
                            <path className="ear rightear" d="M152.91 17c5.92-8 13.91-18.74 30-6.82S191 32.86 185 40.84s-17.89 9.16-26.76 2.54S147 25 152.91 17z"/>
                            
                            <path className="head" d="M198.65 74c5.92 40.44-44.32 74-99 74s-106-33.74-99-74C5.6 45.71 25.72 20.42 56.42 8a115 115 0 0 1 43.23-8 118 118 0 0 1 44.7 8.37c30.21 12.33 50.12 37.04 54.3 65.63z" fill="#fff"/>
                                
                            <path className="feature rightpatch" d="M125.52 42.48c-4.77 7-5.2 18.14-3.42 26C125.78 84.86 140.92 93 156 96.94c9.24 2.43 23 3.35 26.51-8C187 74.62 176.29 55.57 168 44.72c-12-15.56-30.14-20.26-42.48-2.24z"/>
                            <path className="feature righteyepatch" d="M130.58 66.16C128 79 153.79 86.93 154.94 71.29c.87-11.93-21.58-18.91-24.36-5.13z" fill="#fff"/>
                            <ellipse className="eye righteye" cx="142.21" cy="70.5" rx="7.5" ry="1" />
                                
                            <path className="feature leftpatch" d="M73 42.48c4.77 7 5.2 18.14 3.42 26C72.73 84.86 57.59 93 42.49 96.94c-9.23 2.43-23 3.35-26.51-8-4.46-14.34 6.25-33.39 14.57-44.24C42.5 29.16 60.66 24.46 73 42.48z"/>
                            <path className="feature lefteyepatch" d="M67.78 66.16C70.37 79 44.56 86.93 43.42 71.29 42.55 59.36 65 52.38 67.78 66.16z" fill="#fff"/>
                            <ellipse className="eye lefteye" cx="56.15" cy="70.5" rx="7.5" ry="1" />
                            
                            <path className="feature nose" d="M87.65 85.55c0-3.45 2.18-6.55 12-6.55s12 3.1 12 6.55c0 4.36-7.64 12-12 12s-12-6.55-12-12z"/>
                            <ellipse className="mouth feature" cx="99.65" cy="123" rx="10" ry="3"/>
                        </svg>
                    </div>

                </div>
            </Link>
        </div>
    )
}


export default Home;