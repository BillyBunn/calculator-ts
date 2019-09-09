// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
      background: string;
      calculator: string;
      display: string;
      displayBorder: string;

      memory: string;
      operators: string;
      numbers: string;
      calculate: string;
    };

    test: string;
  }
}
