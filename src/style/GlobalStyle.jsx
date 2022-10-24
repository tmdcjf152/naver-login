import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyleBlock = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
}

body{

}

a{
  text-decoration: none;
  color: #000;
}

img{
    width: 100%;
    height: 100%;
}

.center{
  display: flex;
  justify-content: center;
  align-items: center;
}



`;

const GlobalStyle = () => {
	return <GlobalStyleBlock></GlobalStyleBlock>;
};

export default GlobalStyle;
