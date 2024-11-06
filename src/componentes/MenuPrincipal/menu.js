import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../MenuPrincipal/logo.png';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7rem;
  padding: 0 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Menulogo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const Logo = styled.img`
  width: 25rem;
  height: auto;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content:flex-end;
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

function Menuprincipal() {
  const [activeMenu, setActiveMenu] = useState(null);

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

  return (
    <Container>
      <Menulogo>
        <Logo src={logo} alt="Logo Uca" />
      </Menulogo>
      <MenuContainer>
        <MenuItem active>Início</MenuItem>
        <MenuItem
          className="menu-item"
          onMouseEnter={() => handleMouseEnter('terreo')}
          onMouseLeave={handleMouseLeave}
        >
          Térreo
          {activeMenu === 'terreo' && (
            <Dropdown show>
              <DropdownItem> Ayrton Senna</DropdownItem>
              <DropdownItem> Lélia Gonzalez</DropdownItem>
              <DropdownItem> Heitor Villa-Lobos</DropdownItem>
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
              <DropdownItem> Sala de operações</DropdownItem>
              <DropdownItem> loja modelo</DropdownItem>
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
              <DropdownItem> clarice Lispector</DropdownItem>
              <DropdownItem> Dandara dos Palmares</DropdownItem>
              <DropdownItem>Cacique Raoni Metuktire</DropdownItem>
              <DropdownItem>Oswaldo Cruz</DropdownItem>
              <DropdownItem>Paulo freire</DropdownItem>
              <DropdownItem>Carlos Chagas</DropdownItem>
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
              <DropdownItem>Tarsila do Amaral</DropdownItem>
              <DropdownItem>Santos Dumont</DropdownItem>
              <DropdownItem>Vinícius de Moraes</DropdownItem>
              <DropdownItem>Tom Jobim</DropdownItem>
            </Dropdown>
          )}
        </MenuItem>
      </MenuContainer>
    </Container>
  );
}

export default Menuprincipal;