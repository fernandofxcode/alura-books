import Header from './componentes/Header';
import Pesquisa from './componentes/Pesquisa';
import styled from 'styled-components';

// Este AppContainer foi criado em substituiçao ao arquivo App.css
const AppContainer = styled.div`  
  width: 100vw;     /* !!! esse '100vw' quer dizer todo o espaço HORIZONTAL da tela */
  height: 100vh;    /* !!! esse '100vh' quer dizer todo o espaço VERTICAL da tela */
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Pesquisa />
    </AppContainer>
  );
}

export default App; 
  