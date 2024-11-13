import styled from 'styled-components';
import imagem from '../../dados/imagens/heitorvila.png';
import { personaHeitor } from '../Personas/dados.js';

const Persona = styled.div`
width: 100%;`;

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imagem});
  background-size: cover; /* Ajusta o tamanho da imagem para cobrir todo o espaço do banner */
  background-position: center; /* Centraliza a imagem no banner */

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    height: 10rem;
    width: 100%;
    padding: 0 10px;
  }
`;

const Tema = styled.h1`
  font-size: 7rem;
  color: #fff;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 2rem;
    padding: 0;
  }
`;

const Caixatexto = styled.div`
margin-left: 5rem;
margin-right: 5rem;
margin-top: 3rem;
margin-bottom: 3rem;
padding-left: 2rem;
padding-right: 2rem;

@media (max-width: 600px) {
  margin-left: 1rem;
margin-right: 1rem;
margin-top: 2rem;
margin-bottom: 3rem;
  }
`;
const Texto = styled.p`
  white-space: pre-line;
  font-size: 1.3rem;
  line-height: 1.8;
  /* Outros estilos opcionais */
`;

const VideoButton = styled.button`
  display: block;
  margin: 2rem auto;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #ff0000;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #cc0000;
  }
`;

const Video = styled.div`
display:flex;
align-items:center;
flex-direction:column;
`
const TelaVideo = styled.iframe`
width:560px;  // largura do player
height:315px; // altura do player

@media (max-width: 600px) {
width:400px;  // largura do player
height:215px;
  }
`;

function Heitor() {
    const openYouTubeVideo = () => {
        window.open('https://www.youtube.com/Z2_LDC-WQQ0', '_blank');
      };
    return (
      <Persona>
        <Banner>
          <Tema>Heitor Villa-Lobos</Tema>
        </Banner>
        <Caixatexto>
        {personaHeitor.map((personagem) => (
          <Texto
            key={personagem.id_Persona}
            dangerouslySetInnerHTML={{ __html: personagem.Texto }}
          />
        ))}
        </Caixatexto>
        <Video>
        <TelaVideo
        width="560"  // largura do player
        height="315" // altura do player
        src="https://www.youtube.com/embed/Z2_LDC-WQQ0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></TelaVideo>
      <VideoButton onClick={openYouTubeVideo}>
        Assistir vídeo no YouTube
      </VideoButton>
        </Video>
      </Persona>
    );
  }

export default Heitor;