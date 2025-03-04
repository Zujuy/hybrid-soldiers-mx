import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Eventos', path: '/events' },
    { label: 'Registrate', path: '/signup' },
  ];

  const toggleDrawer = (open) => (event) => {
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
          <ListItem
            button
            key={item.label}
            component={Link}
            to={item.path}
            style={{ color: location.pathname === item.path ? 'rgb(186, 12, 151)' : 'inherit' }}
          >
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
          {/* Logo y nombre enlazados al Home */}
          <LogoContainer as={Link} to="/">
            <LogoImage src="https://res.cloudinary.com/dfxpfatj7/image/upload/v1739335003/SOLDADO_cjqve0.png" alt="Hybrid Soldiers México" />
            <BrandName>Hybrid Soldiers México</BrandName>
          </LogoContainer>

          {/* Enlaces de navegación para escritorio */}
          <NavLinks>
            {navItems.map((item) => (
              <StyledLink 
                key={item.label} 
                to={item.path} 
                className={location.pathname === item.path ? 'active' : ''}
              >
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


