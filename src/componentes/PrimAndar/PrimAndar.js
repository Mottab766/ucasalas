import styled from 'styled-components';
import { Personas1andar } from '../../../src/dados/dados';

const TerreoSalas = styled.div`
background-color: #fff;`;

const Banner = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  justify-content: center;
  background-color: #480078;
  height: 6rem;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 3rem;
`;

const Personagens = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;

const Personagem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative; /* Adicionar para controlar a posição do resumo */
`;

const Imagem = styled.img`
  margin-top: 2rem;
  width: 20rem;
  height: 20rem;
  border-radius: 30%;
  transition: transform 0.1s ease-in-out; /* Transição para o efeito de hover */
`;

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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2px;
`;

const Nome = styled.a`
  font-size: 2rem;
  color: #333;
`;

const Descricao = styled.p`
  font-size: 0.9rem;
  color: #333;
`;

const Quantidade = styled.p`
  font-size: 0.9rem;
  color: #333;
`;

const CafeManha = styled.p`
  font-size: 0.9rem;
  color: #333;
`;

const Almoço = styled.p`
  font-size: 0.9rem;
  color: #333;
`;

const CafeTarde = styled.p`
  font-size: 0.9rem;
  color: #333;
`;

const Link = styled.p`
  font-size: 0.9rem;
  color: #333;
`;

function AndarPrim() {
  return (
    <TerreoSalas>
      <Banner>
        <Titulo>1º Andar</Titulo>
      </Banner>
      <Personagens>
        {Personas1andar.map((personagem, index) => (
          <PersonagemComHover key={index}>
            <Dados>
              <Imagem id={personagem.id_Persona} src={personagem.imagem} alt={personagem.name} />
              <Nome>{personagem.name}</Nome>
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
  );
}

export default AndarPrim;
