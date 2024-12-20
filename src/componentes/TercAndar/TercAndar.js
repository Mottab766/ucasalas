import styled from 'styled-components';
import {Personas3andar} from '../../../src/dados/dados'
import { Link } from 'react-router-dom'; // Importe o Link do react-router-dom

const TerreoSalas = styled.div``

const Banner = styled.div`
 display: flex;
 align-items: center;
margin-top: 1rem;
justify-content: center;
background-color:#480078; 
height: 6rem;

@media (max-width: 768px) {
  display: flex;
 align-items: center;
  height: 5rem; /* Ajusta a altura do banner em telas pequenas */
}`

const Titulo = styled.h2`
color: #fff;
font-size: 3rem;
@media (max-width: 768px) {
  font-size: 2rem; /* Reduz o tamanho do título em telas pequenas */
}`

const Personagens = styled.div`
display:flex;
justify-content:space-around;
margin-left:4rem;
margin-right:4rem;
flex-direction:row;
flex-wrap:wrap;

@media (max-width: 768px) {
  justify-content: center; /* Centraliza os personagens em telas pequenas */
  flex-flow:wrap;
}`;

const Personagem = styled.div`
display:flex;
flex-direction:column;
margin-left:5rem;
margin-right:5rem;
align-items: center;
position: relative; /* Adicionar para controlar a posição do resumo */

@media (max-width: 768px) {
  display: flex;
  flex-direction: column;
  width:  70%; /* Ocupa toda a largura da tela em dispositivos pequenos */
  height:  70%; /* Ocupa toda a largura da tela em dispositivos pequenos */
  margin-left: 0; /* Reduz o espaço entre os personagens */
  margin-right: 0; /* Reduz o espaço entre os personagens */
}`


const Imagem = styled.img`
margin-top: 2rem;
  width: 20rem;
  height: 20rem;
  border-radius: 30%;
  transition: transform 0.1s ease-in-out; /* Transição para o efeito de hover */

  @media (max-width: 768px) {
    width: 12rem; /* Reduz o tamanho da imagem em telas pequenas */
    height: 12rem;

  }`;

const Resumo = styled.div`
position: absolute;
background-color: rgba(0, 0, 0, 0.7); /* Fundo semitransparente */
color: #fff;
transform: translateX(-20%); /* Inicialmente escondido à esquerda */
transition: transform 1s ease-in-out;
display:flex;
align-items: center;
justify-content: center;
text-align: center;
width: 19.3rem;
height: 20rem;
border-radius: 30%;
margin-top: 2rem;
opacity: 0; 
padding-left:7px;
padding-right:7px;

@media (max-width: 768px) {
  display:flex;
  flex-direction:column;
  align-items: center;
  width: 11.4rem; /* Reduz a largura do resumo em telas pequenas */
  height: 12rem; /* Reduz a altura do resumo */ 
  font-size: 0.73rem; /* Ajusta o tamanho da fonte em telas pequenas */
  padding-left: 8px;
padding-right: 8px;
   }
`;

const PersonagemComHover = styled(Personagem)`
  &:hover ${Imagem} {
    transform: scale(1); /* Efeito de zoom suave */
    opacity: 1; 
  }

  &:hover ${Resumo} {
    transform: translateX(0); /* Mostra o resumo quando passa o mouse */
    opacity: 10; 
  }
`;

const Dados = styled.div`
display:flex;
flex-direction:column;
align-items: center;

@media (max-width: 768px) {
  display:flex;
  font-size: 0.8rem; /* Ajusta o tamanho da fonte em telas pequenas */
  width: 12rem;
  text-align: center;
  align-items: center;
}`;

const Nome = styled(Link)`
  font-size: 2rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Reduz o tamanho da fonte do nome */
  }
`

const Descricao = styled.p`
  font-size: 0.9rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 0.8rem; /* Reduz o tamanho da fonte da descrição */
  }
`;

const Quantidade = styled.p`
  font-size: 0.9rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 0.8rem; /* Reduz o tamanho da fonte da quantidade */
  }
`;

const CafeManha = styled.p`
  font-size: 0.9rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 0.8rem; /* Reduz o tamanho da fonte do café da manhã */
  }
`;

const Almoço = styled.p`
  font-size: 0.9rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 0.8rem; /* Reduz o tamanho da fonte do almoço */
  }
`;

const CafeTarde = styled.p`
  font-size: 0.9rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 0.8rem; /* Reduz o tamanho da fonte do café da tarde */
  }
`;


function AndarTerc () {
    return(
        <TerreoSalas>
            <Banner>
                <Titulo>3º Andar</Titulo>
            </Banner>
            <Personagens>
            {Personas3andar.map((personagem, index) => (
           <PersonagemComHover key={index}>
            <Dados>
            <Imagem  id={personagem.id_Persona} src={personagem.imagem} alt={personagem.name} />
            <Nome id={personagem.id_Persona} to={personagem.Link}>{personagem.name}</Nome>
            <Descricao><strong>{personagem.desc}</strong></Descricao>
            <Quantidade>{personagem.quantidade}</Quantidade>
            <CafeManha>{personagem.cafe}</CafeManha>
            <Almoço>{personagem.almoco}</Almoço>
            <CafeTarde>{personagem.cafetarde}</CafeTarde>
            <Link>{personagem.link}</Link>
            </Dados>
            <Resumo>{personagem.Resumopersona}</Resumo> {/* Exibe o resumo ao passar o mouse */}
            </PersonagemComHover>
                    ))}
            </Personagens>
        </TerreoSalas>
    )
}

export default AndarTerc;

