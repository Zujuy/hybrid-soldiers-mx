import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

/* Styled AppBar */
export const StyledAppBar = styled(AppBar)`
  background: ${({ theme }) => theme.colors.secondary} !important;
`;

/* Styled Toolbar */
export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/* Logo Container */
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

/* logo image */
export const LogoImage = styled.img`
  height: 40px; 
  margin-right: 10px;
`;

export const BrandName = styled(Typography)`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

/* navigation links hidden on mobile */
export const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

/* menu icon just for mobile */
export const MobileNavContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

/* react router link */
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
