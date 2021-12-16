import { createGlobalStyle } from "styled-components";

import Digital7 from "./fonts/digital-7.italic.ttf";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Digital-7 Italic';
  src: url(${Digital7}) format('woff');
}
`;

export default FontStyles;
