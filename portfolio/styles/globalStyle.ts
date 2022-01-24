import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,*::before,*::after,h1,h2,h3,h4,h5,h6{
        margin: 0;
        padding: 0;
    }
    h1,h2,h3,h4,h5,h6{
        display:inline-block;
        
    }
    body{
        margin:0;
        padding:0;
        overflow-x:hidden;
        font-family: 'Source Sans Pro', sans-serif;
    }
    .cursor {
        width: 20px;
        height: 20px;
        border: 1px solid white;
        border-radius: 50%;
        position: absolute;
        pointer-events: none;
      }
      
    .cursor::after {
        content: "";
        width: 20px;
        height: 20px;
        position: absolute;
        border: 2px solid blue;
        border-radius: 50%;
        opacity: .5;
        top: -8px;
        left: -8px;
      }
      
      @keyframes cursorAnim {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(5);
        }
        100% {
            transform: scale(1);
            opacity: 0;
        }
      }
      
      .expand {
        animation: cursorAnim .5s forwards;
      }
      .circle {
        position: fixed;
        z-index: 100;
        display: flex;
        flex-flow: row;
        align-content: center;
        justify-content: center;
        top: 0;
        left: 0;
        height: 10px;
        width: 10px;
        background-color: #1e91d6;
        border-radius: 200px;
        pointer-events: none;
        color: #fff;
        text-align: center;
        font-size: 16px;
      }
      
      .cursorText {
        flex: auto;
        font-size: inherit;
        pointer-events: none;
        margin: auto;
      }
      
      
      
      .project {
        display: inline-block;
        position: relative;
        z-index: 1;
        height: 652px;
        width: 601px;
        background: #1e91d6;
        border-radius: 24px;
        cursor: none;
        background-image: url("https://cdn.discordapp.com/attachments/577203676108685331/790326977714192465/Tile_Image.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
      
      .projectName {
        background: #fff;
        border-radius: 34px;
        position: absolute;
        bottom: 30px;
        left: 30px;
        padding: 12px 20px;
        display: inline-block;
        font-weight: 500;
        font-size: 16px;
      }
      
      .contactWrapper {
        padding: 120px;
      }
      
      .contact {
        font-weight: 500;
        font-size: 36px;
        line-height: 1.2;
        text-decoration: underline;
        transition: 150ms ease;
      }
      
      .contact:hover {
        color: #1e91d6;
        cursor: pointer;
      }
`;
export default GlobalStyle;
