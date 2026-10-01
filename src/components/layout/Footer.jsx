import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { FaEnvelope, FaPhoneAlt, FaLinkedinIn, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { PROFILE } from '../../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#edf1ea',
        borderTop: '1px solid',
        borderColor: 'divider',
        py: { xs: 5, md: 6 },
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'center' },
            gap: 3,
            pb: 4,
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main', mb: 0.5 }}>
              {PROFILE.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 460 }}>
              Senior MERN Stack Developer & Playwright Automation Engineer based in Bangalore.
              Crafting high-reliability digital products, web platforms, and mobile apps.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap' }}>
            <IconButton
              component="a"
              href={`mailto:${PROFILE.email}`}
              aria-label="Email"
              sx={{
                width: 42,
                height: 42,
                backgroundColor: '#ffffff',
                border: '1px solid #dde4dc',
                color: 'primary.main',
                '&:hover': { backgroundColor: 'primary.main', color: '#ffffff' },
              }}
            >
              <FaEnvelope style={{ fontSize: '1rem' }} />
            </IconButton>

            <IconButton
              component="a"
              href={`https://wa.me/${PROFILE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              sx={{
                width: 42,
                height: 42,
                backgroundColor: '#ffffff',
                border: '1px solid #dde4dc',
                color: '#25d366',
                '&:hover': { backgroundColor: '#25d366', color: '#ffffff' },
              }}
            >
              <FaWhatsapp style={{ fontSize: '1.2rem' }} />
            </IconButton>

            <IconButton
              component="a"
              href={`tel:${PROFILE.phoneRaw}`}
              aria-label="Phone"
              sx={{
                width: 42,
                height: 42,
                backgroundColor: '#ffffff',
                border: '1px solid #dde4dc',
                color: 'primary.main',
                '&:hover': { backgroundColor: 'primary.main', color: '#ffffff' },
              }}
            >
              <FaPhoneAlt style={{ fontSize: '0.95rem' }} />
            </IconButton>

            <IconButton
              component="a"
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              sx={{
                width: 42,
                height: 42,
                backgroundColor: '#ffffff',
                border: '1px solid #dde4dc',
                color: '#0a66c2',
                '&:hover': { backgroundColor: '#0a66c2', color: '#ffffff' },
              }}
            >
              <FaLinkedinIn style={{ fontSize: '1.05rem' }} />
            </IconButton>

            <IconButton
              onClick={scrollToTop}
              aria-label="Back to top"
              sx={{
                ml: { xs: 0, sm: 2 },
                width: 42,
                height: 42,
                backgroundColor: 'primary.main',
                color: 'accent.light',
                '&:hover': { backgroundColor: 'primary.dark' },
              }}
            >
              <FaArrowUp style={{ fontSize: '0.95rem' }} />
            </IconButton>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            pt: 3,
            gap: 1.5,
          }}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>
            Platina Target: January 2027 · Scribble shipped to Google Play
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
