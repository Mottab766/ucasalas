import styled from 'styled-components';
import { RodapeInformacoes } from '../../dados/dados';

const Rodapedados = styled.div`
display: flex;
justify-content: center;
height: 11rem;
width: 100%;
flex-direction: row;
background-color: #480078;
padding-top: 1rem;
padding-bottom: 1rem;

@media (max-width: 600px) {
  height: 15rem;
  padding-top: 0;
  width: 100%;
  }
`;

const Plataformas = styled.div`
display: flex;
width: 50%;
justify-content: space-around;

@media (max-width: 600px) {
  padding-top: 0;
  width: 90%;
  height: 12rem;

  }
`;

const Titulo = styled.h4`
font-size: 1.2rem;

@media (max-width: 600px) {
  font-size: 1rem;

  }
`;

const Dados = styled.div`
display: flex;
flex-direction: column;
  color: #fff;
  font-size: 0.9rem;

  @media (max-width: 600px) {
  font-size: 0.8rem;
  margin: 10px 10px 0;
  }
`;

const Sites = styled.a`
  color: #fff;
  text-decoration: none; /* Adicionei para remover o sublinhado do link */
  margin-top: 2px;
  margin-botton: 2px;
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
