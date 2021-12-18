import { createGlobalStyle } from "styled-components";
import Digital7 from "./fonts/digital-7.italic.ttf";
import Eurostile from "./fonts/EurostileExtended-Black.woff";
import Eurostilew2 from "./fonts/EurostileExtended-Black.woff2";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Digital-7 Italic';
  src: url(${Digital7}) format('truetype');
}

@font-face {
    font-family: 'Eurostile Extended';
    src: url(${Eurostilew2}) format('woff2'),
        url(${Eurostile}) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}
`;

export default FontStyles;
