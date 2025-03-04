import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

/* Estilizamos el AppBar de Material UI para aplicar un fondo en gradiente */
export const StyledAppBar = styled(AppBar)`
  background: ${({ theme }) => theme.colors.secondary} !important;
`;

/* Toolbar para distribuir los elementos (logo y links) */
export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/* Contenedor para el logo y el nombre de la marca */
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

/* Imagen del logotipo */
export const LogoImage = styled.img`
  height: 40px; /* Ajusta el tamaño según necesites */
  margin-right: 10px;
`;

/* Nombre de la marca, basado en Typography de Material UI */
export const BrandName = styled(Typography)`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

/* Contenedor de links de navegación para escritorio (se oculta en pantallas pequeñas) */
export const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

/* Contenedor para el ícono de menú, visible solo en pantallas menores a 768px */
export const MobileNavContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

/* Estilizamos el Link de react-router-dom para que mantenga la apariencia deseada */
export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s;

  &.active {
    color: ${({ theme }) => theme.colors.primary}
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary}
  }
`;
