import styled from 'styled-components';
import {PersonasTerreo} from '../../../src/dados/dados'

const TerreoSalas = styled.div``

const Banner = styled.div`
 display: flex;
 align-items: center;
margin-top: 1rem;
justify-content: center;
background-color:#480078; 
height: 6rem;`

const Titulo = styled.h2`
color: #fff;
font-size: 3rem`

const Personagens = styled.div`
display:flex;
justify-content:space-around;
flex-direction:row;`

const Personagem = styled.div`
display:flex;
flex-direction:column;`


const Imagem = styled.img`
margin-top: 2rem;
  width: 20rem;
  height: 20rem;
  border-radius: 30%;
`;

const Dados = styled.div`
display:flex;
flex-direction:column;
align-items: center;
`

const Nome = styled.p`
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


function Terreo () {
    return(
        <TerreoSalas>
            <Banner>
                <Titulo>Térreo</Titulo>
            </Banner>
            <Personagens>
            {PersonasTerreo.map((personagem, index) => (
          <Personagem key={index}>
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
          </Personagem>
        ))}
            </Personagens>
        </TerreoSalas>
    )
}

export default Terreo;
