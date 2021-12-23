import 'styled-components';

declare module 'styled-components' { //sobrescrever uma definição de tipos
   export interface DefaultTheme {
      title: string;

      colors: {
         primary: string;
         secundary: string;

         background: string;
         text: string;
      }
   }
}