import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa'; // Ícone de menu hamburguer
import logo from '../MenuPrincipal/logo.png';

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
  padding: 10px;
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
  padding: 5px 10px;
  cursor: pointer;
  color: #333;
  
  &:hover {
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
          onMouseEnter={() => handleMouseEnter('terreo')}
          onMouseLeave={handleMouseLeave}
        >
          Térreo
          {activeMenu === 'terreo' && (
            <Dropdown show>
              <DropdownItem onClick={() => scrollToSection('1')}>Ayrton Senna</DropdownItem>
              <DropdownItem onClick={() => scrollToSection('2')}>Lélia Gonzalez</DropdownItem>
              <DropdownItem onClick={() => scrollToSection('3')}>Heitor Villa-Lobos</DropdownItem>
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
              <DropdownItem onClick={() => scrollToSection('4')}>Sala de operações</DropdownItem>
              <DropdownItem onClick={() => scrollToSection('5')}>Loja modelo</DropdownItem>
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
              <DropdownItem onClick={() => scrollToSection('6')}>Clarice Lispector</DropdownItem>
              <DropdownItem onClick={() => scrollToSection('7')}>Dandara dos Palmares</DropdownItem>
              <DropdownItem onClick={() => scrollToSection('8')}>Cacique Raoni Metuktire</DropdownItem>
              <DropdownItem onClick={() => scrollToSection('9')}>Oswaldo Cruz</DropdownItem>
              <DropdownItem onClick={() => scrollToSection('10')}>Paulo Freire</DropdownItem>
              <DropdownItem onClick={() => scrollToSection('11')}>Carlos Chagas</DropdownItem>
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
              <DropdownItem onClick={() => scrollToSection('12')}>Tarsila do Amaral</DropdownItem>
              <DropdownItem onClick={() => scrollToSection('13')}>Santos Dumont</DropdownItem>
              <DropdownItem onClick={() => scrollToSection('14')}>Vinícius de Moraes</DropdownItem>
              <DropdownItem onClick={() => scrollToSection('15')}>Tom Jobim</DropdownItem>
            </Dropdown>
          )}
        </MenuItem>
      </MenuContainer>
    </Container>
  );
}

export default Menuprincipal;
