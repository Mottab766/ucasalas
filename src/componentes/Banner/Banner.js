import styled from 'styled-components';
import uca from '../Banner/empresa.png'

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40rem;
  background-image: url(${uca});
  background-size: cover; /* Ajusta o tamanho da imagem para cobrir todo o espaço do banner */
  background-position: center; /* Centraliza a imagem no banner */

  @media (max-width: 600px) {
    display: flex;
  align-items: center;
     height: 5rem;
    width: auto;
    padding: 0 10px;
  }
`;

const Tema = styled.h1`
font-size: 7rem;
align-items: center;
justify-content: center;
color: #fff;

@media (max-width: 600px) {
    display: flex;
    font-size: 2rem;
    text-align:center;
  align-items: center;
  justify-content: center;
    padding: 0;
  }
`

function Meubanner () {
    return (
        <Banner>
            <Tema>Salas e Horários</Tema>
        </Banner>
    )
}

export default Meubanner;
