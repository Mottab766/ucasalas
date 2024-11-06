import styled from 'styled-components';
import uca from '../Banner/empresa.png'

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  background-image: url(${uca});
  background-size: cover; /* Ajusta o tamanho da imagem para cobrir todo o espaço do banner */
  background-position: center; /* Centraliza a imagem no banner */
`;

const Tema = styled.h1`
font-size: 7rem;
align-items: center;
justify-content: center;
color: #fff;
`

function Meubanner () {
    return (
        <Banner>
            <Tema>Salas e Horários</Tema>
        </Banner>
    )
}

export default Meubanner;