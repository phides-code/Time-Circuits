import { createGlobalStyle } from "styled-components";
// import RobotoWoff from "./fonts/roboto-condensed-v19-latin-regular.woff";
// import RobotoWoff2 from "./fonts/roboto-condensed-v19-latin-regular.woff2";

import Digital7 from "./fonts/digital-7.italic.ttf";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Digital-7 Italic';
  src: url(${Digital7}) format('woff');
}
`;

export default FontStyles;
