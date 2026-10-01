import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from '@mui/material';
import { FaBars, FaTimes, FaArrowRight, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { PROFILE, NAV_LINKS } from '../../data/portfolioData';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detector
      const sections = ['home', ...NAV_LINKS.map((n) => n.id)];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const scrollTo = (id) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 2 : 0}
        sx={{
          backgroundColor: scrolled ? 'rgba(246, 248, 245, 0.94)' : 'rgba(246, 248, 245, 0.85)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid',
          borderColor: scrolled ? 'rgba(217, 224, 216, 0.95)' : 'rgba(217, 224, 216, 0.6)',
          transition: 'all 0.25s ease',
          color: 'text.primary',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ height: 72, justifyContent: 'space-between' }}>
            {/* Logo */}
            <Box
              onClick={() => scrollTo('home')}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.25,
                cursor: 'pointer',
                userSelect: 'none',
              }}
            >
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: '10px',
                  backgroundColor: 'primary.main',
                  color: 'accent.light',
                  display: 'grid',
                  placeItems: 'center',
                  fontWeight: 800,
                  fontSize: '0.88rem',
                  letterSpacing: '-0.02em',
                }}
              >
                PC
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  letterSpacing: '-0.02em',
                  color: 'text.primary',
                }}
              >
                {PROFILE.name}
              </Typography>
            </Box>

            {/* Desktop Navigation Links */}
            <Box
              sx={{
                display: { xs: 'none', lg: 'flex' },
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <Button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    sx={{
                      px: 1.4,
                      py: 0.75,
                      borderRadius: 999,
                      fontSize: '0.86rem',
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? 'primary.main' : 'text.secondary',
                      backgroundColor: isActive ? 'rgba(23, 77, 59, 0.08)' : 'transparent',
                      '&:hover': {
                        backgroundColor: 'rgba(23, 77, 59, 0.06)',
                        color: 'text.primary',
                        transform: 'none',
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                );
              })}
            </Box>

            {/* Desktop Action Button */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1.5 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => scrollTo('contact')}
                endIcon={<FaArrowRight style={{ fontSize: '0.8rem' }} />}
                sx={{
                  px: 2.4,
                  py: 0.9,
                  fontSize: '0.88rem',
                  borderRadius: 999,
                }}
              >
                Hire Me
              </Button>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              aria-label="open navigation menu"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { lg: 'none' }, ml: 1 }}
            >
              {mobileOpen ? <FaTimes style={{ fontSize: '1.2rem' }} /> : <FaBars style={{ fontSize: '1.2rem' }} />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: { xs: '80%', sm: 320 },
            backgroundColor: '#f6f8f5',
            p: 2.5,
            boxSizing: 'border-box',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: '8px',
                backgroundColor: 'primary.main',
                color: 'accent.light',
                display: 'grid',
                placeItems: 'center',
                fontWeight: 800,
                fontSize: '0.8rem',
              }}
            >
              PC
            </Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, color: 'text.primary' }}>
              {PROFILE.name}
            </Typography>
          </Box>
          <IconButton onClick={handleDrawerToggle} size="small">
            <FaTimes style={{ fontSize: '1rem' }} />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 2 }} />

        <List sx={{ pt: 0 }}>
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <ListItem key={link.id} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  onClick={() => scrollTo(link.id)}
                  sx={{
                    borderRadius: 2,
                    backgroundColor: isActive ? 'rgba(23, 77, 59, 0.1)' : 'transparent',
                    color: isActive ? 'primary.main' : 'text.primary',
                    fontWeight: isActive ? 700 : 500,
                  }}
                >
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{
                      fontSize: '0.95rem',
                      fontWeight: isActive ? 700 : 500,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => scrollTo('contact')}
          >
            Hire Me · Contact
          </Button>

          <Button
            variant="outlined"
            color="primary"
            fullWidth
            startIcon={<FaWhatsapp style={{ color: '#25d366' }} />}
            href={`https://wa.me/${PROFILE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </Button>

          <Button
            variant="outlined"
            color="primary"
            fullWidth
            startIcon={<FaEnvelope />}
            href={`mailto:${PROFILE.email}`}
          >
            Send Email
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
