import styled from 'styled-components';
import { RodapeInformacoes } from '../../../dados/dados';

const Rodapedados = styled.div`
  display: flex;
  justify-content: center;
  height: 8rem;
  width: 100%;
  flex-direction: row;
  background-color: #480078;
  padding-top: 1rem;
  padding-bottom: 1rem;
  flex-wrap: wrap; /* Adiciona quebra de linha para conteúdo responsivo */

  @media (max-width: 768px) {
    height: 22rem;
    display: flex;
    flex-direction:column;
    flex-flow:wrap;
    width: 100%; /* Ocupa 100% da largura em telas pequenas */
    height: 100%rem;
    justify-content: center/* Ajusta o alinhamento para a esquerda */
  }
`;

const Plataformas = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-around;
  flex-wrap: wrap; /* Adiciona a capacidade de envolver as plataformas em telas pequenas */

  @media (max-width: 768px) {
    display: flex;
    flex-direction:column;
    justify-content: center
    width: 100%; /* Ocupa 100% da largura em telas pequenas */
  }
`;

const Titulo = styled.h4`
  font-size: 0.8rem;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 0.7rem; /* Ajusta o tamanho da fonte em telas pequenas */
  }
`;

const Dados = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 0.8rem;

  @media (max-width: 768px) {
    font-size: 0.7rem; /* Ajusta o tamanho da fonte em telas pequenas */
    margin-bottom: 1rem;
  }
`;

const Sites = styled.a`
  color: #fff;
  text-decoration: none; /* Adiciona para remover o sublinhado do link */
  margin-top: 2px;
  margin-bottom: 2px;
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
