import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {
  StyledAppBar,
  StyledToolbar,
  LogoContainer,
  LogoImage,
  BrandName,
  NavLinks,
  MobileNavContainer,
  StyledLink,
} from '../styles/Navbar';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Eventos', path: '/events' },
    { label: 'Registrate', path: '/signup' },
  ];

  const toggleDrawer = (open) => (event) => {
    // Si se presionan teclas como Tab o Shift, no hacemos nada
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      style={{ width: 250 }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem button key={item.label} component={StyledLink} to={item.path}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <StyledAppBar position="static">
        <StyledToolbar>
          {/* Sección del logo y nombre de la marca */}
          <LogoContainer>
            {/* Reemplaza la URL por la de tu logotipo real */}
            <LogoImage src="https://res.cloudinary.com/dfxpfatj7/image/upload/v1739335003/SOLDADO_cjqve0.png" alt="Hybrid Soldiers México" />
            <BrandName variant="h6">Hybrid Soldiers México</BrandName>
          </LogoContainer>

          {/* Enlaces de navegación para escritorio */}
          <NavLinks>
            {navItems.map((item) => (
              <StyledLink key={item.label} to={item.path}>
                {item.label}
              </StyledLink>
            ))}
          </NavLinks>

          {/* Icono de menú para móviles/tabletas */}
          <MobileNavContainer>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </MobileNavContainer>
        </StyledToolbar>
      </StyledAppBar>

      {/* Drawer para móviles/tabletas */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
    </>
  );
};

export default Navbar;
