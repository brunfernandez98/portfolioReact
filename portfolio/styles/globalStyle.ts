import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,*::before,*::after,h1,h2,h3,h4,h5,h6{
        margin: 0;
        padding: 0;
        cursor: none;
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
