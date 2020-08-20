import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
${normalize}
:root {
   /* --primary-color: #82d8d8;
  --primary-color-light: #b1e7e7;
  --secondary-color: #524763;
  --secondary-color-light: #625577;
  --secondary-color-lightest: #c1bacd; */

  /* ${(props) => props.primaryColor}
  ${(props) => props.primaryColorLight}
  ${(props) => props.secondaryColor}
  ${(props) => props.secondaryColorLight}
  ${(props) => props.secondaryColorLightest} */

  --background-color: #fff3da;
  --text-white: #ffffff;
  --text-between: #ffeec9;
  --text-dark: #333333;
  --heading-primary: 3.5rem;
  --heading-secondary: 2.3rem;
  --heading-tertiary: 1.8rem;
  --paragraph: 1.6rem;

  /* --primary-color: #56ffc9;
  --primary-color-light: #cdffef;
  --secondary-color: #bd5d47;
  --secondary-color-light: #cf8979;
  --secondary-color-lightest: #e5c0b7; */

  /* --primary-color: #f638dc;
  --primary-color-light: #cdffef;
  --secondary-color: #200f21;
  --secondary-color-light: #382039;
  --secondary-color-lightest: #58325a; */
}
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;;
}
html { 
  font-size:62.5%;
  @media screen and (max-width:1400px){
    font-size:55%;
  }
  @media screen and (max-width:1300px){
    font-size:49%;
  }
  @media screen and (max-width:1100px){
    font-size:45%;
  }
 }
body {
  background: var(--secondary-color);
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  font-weight: 400;
  line-height: 1.7;
  overflow-x:hidden;


}
#app {
  min-height:100vh;
  background:var(--secondary-color);

}

ul {list-style-type: none; }
a:visited {
  color: var(--text-white);
}
:any-link {
  text-decoration: none;
}
/* button
{
    outline: 0 none;
} */
`;
