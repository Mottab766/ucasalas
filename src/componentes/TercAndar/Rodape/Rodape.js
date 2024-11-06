import styled from 'styled-components';
import { RodapeInformacoes } from '../../../dados/dados';

const Rodapedados = styled.div`
display: flex;
justify-content: center;
height: 10rem;
width: 100%;
flex-direction: row;
background-color: #480078;
padding-top: 2rem;
padding-bottom: 1rem;

`;

const Plataformas = styled.div`
display: flex;
width: 50%;
justify-content: space-around;
`;

const Titulo = styled.h4``

const Dados = styled.div`
display: flex;
flex-direction: column;
  color: #fff;
  font-size: 0.8rem;
`;

const Sites = styled.a`
  color: #fff;
  text-decoration: none; /* Adicionei para remover o sublinhado do link */
`;

function Rodape() {
  return (
    <Rodapedados>
      {RodapeInformacoes.map((rodape, index) => (
        <Plataformas key={index}>
          <Dados>
            <Titulo>Plataformas</Titulo>
            <Sites href={rodape.PortalUca}>
              PortalUCA
            </Sites>
            <Sites href={rodape.Ucaplus}>
              Uca Plus
              </Sites>
            <Sites href={rodape.Ucaplus}>
              Uca Cursos
            </Sites>
          </Dados>
          <Dados>
            <Titulo>Redes Sociais - Instagram</Titulo>
            <Sites href={rodape.AjudaERP}>
              Ajuda ERP
            </Sites>
            <Sites href={rodape.AjudaPack}>
            Ajuda Pack Contábil e Immobile
            </Sites>
            <Sites href={rodape.Ucacursos}>
            UCA Cursos
            </Sites>
          </Dados>
          <Dados>
            <Titulo>Redes Sociais - Telegram</Titulo>
            <Sites href={rodape.Ajudaempresarial}>
              Ajuda Empresarial
            </Sites>
            <Sites href={rodape.AjudapackTel}>
            Ajuda Pack Contábil e Immobile
            </Sites>
            <Sites href={rodape.Ajudapro}>
            Ajuda Prosoft Contábil
             </Sites>
            <Sites href={rodape.Ucacursostelegr}>
            UCA Cursos
            </Sites>
          </Dados>
        </Plataformas>
      ))}
    </Rodapedados>
  );
}

export default Rodape;
