import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
:root{
// gray 
--Gray-50: #F0F0F0; 
--Gray-100: #E0E0E0; 
--Gray-200: #C2C2C2; 
--Gray-300: #A3A3A3; 
--Gray-400: #858585; 
--Gray-500: #666666; 
--Gray-600: #4D4D4D; 
--Gray-700: #333333; 
--Gray-800: #1A1A1A; 
--Gray-900: #0A0A0A; 

// MulledWane 
--MulledWane-50: #EEEDF0; 
--MulledWane-100: #DCD9E0; 
--MulledWane-200: #BAB4C1; 
--MulledWane-300: #978EA2; 
--MulledWane-400: #756983; 
--MulledWane-500: #524364; 
--MulledWane-600: #3E324B; 
--MulledWane-700: #292232; 
--MulledWane-800: #151119; 
--MulledWane-900: #08070A; 

// PurpleHeart 
--PurpleHeart-50: #EFE6F9; 
--PurpleHeart-100: #DDCCF3; 
--PurpleHeart-200: #BB99E6; 
--PurpleHeart-300: #9966DA; 
--PurpleHeart-400: #7733CD; 
--PurpleHeart-500: #5500C1; 
--PurpleHeart-600: #400091; 
--PurpleHeart-700: #2B0061; 
--PurpleHeart-800: #150030; 
--PurpleHeart-900: #090013; 

  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}


*{
  margin: 0;
  padding: 0;
  background-color:#0A0A0A;
  color:white;
  font-family:sans-serif;
  box-sizing:border-box;
  font-family: 'JetBrains Mono', sans-serif;
}

textarea,button {
  font-family: 'JetBrains Mono', sans-serif;
}

  /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
  /* @media (min-width:320px) {
    html{
      font-size:18%;
    }
  } */
  /* smartphones, Android phones, landscape iPhone */ 
  /* @media (min-width:480px) {
    html{
      font-size:28%;
    }
  } */

  /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones  (Android) */ 
  /* @media (min-width:600px) { 
    html{
      font-size:32%;
    }
  } */
  
  /* tablet, landscape iPad, lo-res laptops ands desktops */ 
  /* @media (min-width:801px) { 
    html{
      font-size:32%;
    }
  } */

  /* big landscape tablets, laptops, and desktops */ 
  /* @media (min-width:1025px) { 
    html{
      font-size:32%;
    }
  } */
  
  /* hi-res laptops and desktops */
  /* @media (min-width:1281px) {
    html{
      font-size:38%;
    }
  } */

`;
