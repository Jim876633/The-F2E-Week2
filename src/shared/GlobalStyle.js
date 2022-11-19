import { createGlobalStyle } from "styled-components";

import globalfont from "../assets/fonts/GenJyuuGothicX-Monospace-Medium.ttf";

const GlobalStyle = createGlobalStyle`

:root{
    /*================================================================ */
    /*Color */
    /*================================================================ */
    --clr-primary: #B7EC5D;
    --clr-primary-dark: #648D1E;
    --clr-primary-tint:rgba(183, 236, 93, 0.3);
    --clr-primary-linear: linear-gradient(180deg,
        rgba(183, 236, 93, 0)  0%,
        rgba(183, 236, 93, 0.1)  50%,
        rgba(183, 236, 93, 0.3)  100%);
    
    --clr-secondary: #4D4D4D;
    --clr-secondary-dark: #222222;
    --clr-secondary-tint: #F5F5F5;

    --clr-success: #B7EC5D;
    --clr-success-dark:#648D1E;
    --clr-success-tint:#D9FF99;

    --clr-danger: #F93819;
    --clr-danger-dark:#A01600;
    --clr-darnger-tint: #FFA394;

    --clr-pen-black: #000000;
    --clr-pen-blue: #0066FF;
    --clr-pen-red: #F93819;

    --clr-black: #000000;
    --clr-gray-90: #1A1A1A;
    --clr-gray-80: #333333;
    --clr-gray-70: #4D4D4D;
    --clr-gray-60: #666666;
    --clr-gray-50: #808080;
    --clr-gray-40: #999999;
    --clr-gray-30: #B3B3B3;
    --clr-gray-20: #CCCCCC;
    --clr-gray-10: #E6E6E6;
    --clr-white: #FFFFFF;

    --shadow: rgba(0,0,0,0.25);
    --shadow-gray: rgba(215, 215, 215,0.55);
    --shadow-gray-dark: rgb(135, 135, 135,0.65);
    --shadow-primary: rgba(183, 236, 93,.5);
    --shadow-primary-dark: rgba(183, 236, 93,.7);

    --modal-bg: rgba(34,34,34,.5);
    
    /*================================================================ */
    /*Font Size */
    /*================================================================ */
    
    --fz-h1: 5.6rem;
    --fz-h2: 4.4rem;
    --fz-h3: 3.2rem;
    --fz-h4: 2.8rem;
    --fz-h5: 2.4rem;
    --fz-body: 1.6rem;
    --fz-light: 1.8rem;
    --fz-capation: 1.4rem;
    
    /*================================================================ */
    /*Component Size */
    /*================================================================ */

    --h-nav: 8rem;
}


html{
    font-size: 62.5%;
}
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: globalfont;
    font-size: var(--fz-body);
    font-weight: 400;
    color: var(--clr-secondary);
}
button{
    cursor: pointer;
    border: none;
    background: transparent;
    transition: all .2s;
}
a{
    text-decoration:none;
    transition: all .2s;
}
li{
    list-style: none;
}
img,canvas{
    width: 100%;
    height:100%;
    object-fit: contain;
    vertical-align: middle;

}
h1{
    font-size: var(--fz-h1);
}
h2{
    font-size: var(--fz-h2);
}
h3{
    font-size: var(--fz-h3);
}
h4{
    font-size: var(--fz-h4);
}
h5{
    font-size: var(--fz-h5);
}
@font-face {
        font-family: globalfont;
        src: url(${globalfont});
    }

@media (max-width: 768px) {
    :root{
        --fz-h1: 3.2rem;
        --fz-h2: 2.8rem;
        --fz-h3: 2.4rem;
        --fz-h4: 2rem;
        --fz-h5: 1.8rem;
        --fz-body: 1.6rem;
        --fz-light: 1.6rem;
        --fz-capation: 1.4rem;
    }
}
`;

export default GlobalStyle;
