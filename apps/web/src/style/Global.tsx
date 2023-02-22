import { createGlobalStyle } from 'styled-components'
import { PancakeTheme } from '@pancakeswap/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`




@font-face {
  font-family: "Alien";
  src: url('/fonts/alien_league/alienleaguebold.ttf');
  font-display: fallback;
  
}
  
@font-face {
  font-family: "AlienSolid";
  src: url('/fonts/alien-encounters-solid/Alien-Encounters-Solid-Regular.ttf');
  font-display: fallback;
  font-display: fallback;
}



* {
  font-family: 'AlienSolid', "Roboto";
}

  


  
  body {
    background-color: ${({ theme }) => theme.colors.background};
    img {
      height: auto;
      max-width: 100%;
    }
   
}

     

    
    
`

export default GlobalStyle
