import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa'; // Ícone de menu hamburguer
import logo from '../MenuPrincipal/logo.png';
import { Link } from 'react-router-dom'; // Importe o Link


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7rem;
  padding: 0 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    display: flex;
  align-items: center;
  justify-content: space-between;
    height: 5rem;
    padding: 0 10px;
  }
`;

const Menulogo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const Logo = styled.img`
  width: 25rem;
  height: auto;

  @media (max-width: 600px) {
    width: 10rem; /* Ajusta o tamanho do logo em telas menores */
  }
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 600px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')}; /* Exibe o menu hamburguer ao clicar */
    position: absolute;
    top: 5rem;
    right: 0;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 100%;
    padding: 10px;
    z-index: 1000; /* Adiciona o z-index alto */
  }
`;

const MenuItem = styled.div`
  position: relative;
  padding: 40px;
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  cursor: pointer;
  color: ${(props) => (props.active ? '#000' : '#666')};
  
  &:hover {
    color: #000;
  }

  @media (max-width: 600px) {
    padding: 15px; /* Reduz o espaçamento dos itens em telas menores */
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 11px;
  display: ${(props) => (props.show ? 'block' : 'none')};
  z-index: 1;
  width: 8rem;

  @media (max-width: 600px) {
    position: static;
    box-shadow: none;
    width: 100%;
  }
`;

const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 14px;
  cursor: pointer;
  color: #333;
  
  &:hover {
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    background-color: #f1f1f1;
  }
  
  svg {
    margin-right: 8px;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 600px) {
    display: flex;
  }
`;

function Menuprincipal() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.menu-item')) {
      setActiveMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container>
      <Menulogo>
        <Logo src={logo} alt="Logo Uca" />
      </Menulogo>

      <HamburgerIcon onClick={toggleMenu}>
        <FaBars size={24} />
      </HamburgerIcon>
      <MenuContainer isOpen={menuOpen}>
      <MenuItem
          className="menu-item"
          onMouseEnter={() => handleMouseEnter('Inicio')}
          onMouseLeave={handleMouseLeave}
        >
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Inicio</Link> </MenuItem>
        <MenuItem
          className="menu-item"
          onMouseEnter={() => handleMouseEnter('terreo')}
          onMouseLeave={handleMouseLeave}
        >
          Térreo
          {activeMenu === 'terreo' && (
            <Dropdown show>
              <DropdownItem><Link to="/Senna" style={{ color: 'inherit', textDecoration: 'none' }}>Ayrton Senna</Link></DropdownItem>
              <DropdownItem ><Link to="/Lelia" style={{ color: 'inherit', textDecoration: 'none' }}>Lélia Gonzalez</Link></DropdownItem>
              <DropdownItem ><Link to="/Heitor" style={{ color: 'inherit', textDecoration: 'none' }}>Heitor Villa-Lobos</Link></DropdownItem>
            </Dropdown>
          )}
        </MenuItem>
        <MenuItem
          className="menu-item"
          onMouseEnter={() => handleMouseEnter('1andar')}
          onMouseLeave={handleMouseLeave}
        >
          1º Andar
          {activeMenu === '1andar' && (
            <Dropdown show>
              <DropdownItem ><Link to="/SalaOperacoes" style={{ color: 'inherit', textDecoration: 'none' }}>Sala de operações</Link></DropdownItem>
              <DropdownItem ><Link to="/LojaModelo" style={{ color: 'inherit', textDecoration: 'none' }}>Loja modelo</Link></DropdownItem>
            </Dropdown>
          )}
        </MenuItem>
        <MenuItem
          className="menu-item"
          onMouseEnter={() => handleMouseEnter('2andar')}
          onMouseLeave={handleMouseLeave}
        >
          2º Andar
          {activeMenu === '2andar' && (
            <Dropdown show>
              <DropdownItem><Link to="/Clarice" style={{ color: 'inherit', textDecoration: 'none' }}>Clarice Lispector</Link></DropdownItem>
              <DropdownItem><Link to="/Dandara" style={{ color: 'inherit', textDecoration: 'none' }}>Dandara dos Palmares</Link></DropdownItem>
              <DropdownItem><Link to="/Cacique" style={{ color: 'inherit', textDecoration: 'none' }}>Cacique Raoni Metuktire</Link></DropdownItem>
              <DropdownItem>Oswaldo Cruz</DropdownItem>
              <DropdownItem>Paulo Freire</DropdownItem>
              <DropdownItem><Link to="/CarlosChagas" style={{ color: 'inherit', textDecoration: 'none' }}>Carlos Chagas</Link></DropdownItem>
            </Dropdown>
          )}
        </MenuItem>
        <MenuItem
          className="menu-item"
          onMouseEnter={() => handleMouseEnter('3andar')}
          onMouseLeave={handleMouseLeave}
        >
          3º Andar
          {activeMenu === '3andar' && (
            <Dropdown show>
              <DropdownItem><Link to="/Tarsila" style={{ color: 'inherit', textDecoration: 'none' }}>Tarsila do Amaral</Link></DropdownItem>
              <DropdownItem><Link to="/SantosDumont" style={{ color: 'inherit', textDecoration: 'none' }}>Santos Dumont</Link></DropdownItem>
              <DropdownItem><Link to="/ViniciusDeMoraes" style={{ color: 'inherit', textDecoration: 'none' }}>Vinícius de Moraes</Link></DropdownItem>
              <DropdownItem><Link to="/TomJobim" style={{ color: 'inherit', textDecoration: 'none' }}>Tom Jobim</Link></DropdownItem>
            </Dropdown>
          )}
        </MenuItem>
      </MenuContainer>
    </Container>
  );
}

export default Menuprincipal;
