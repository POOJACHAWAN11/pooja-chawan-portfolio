import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import { FaArrowRight, FaEnvelope, FaWhatsapp, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTestinglibrary , SiPostman } from 'react-icons/si';
import { PROFILE, METRICS } from '../../data/portfolioData';

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [photoSrc, setPhotoSrc] = useState(PROFILE.photo || '/profile.jpg');

  // Smooth typewriter effect without screen flicker or jumpy layout
  useEffect(() => {
    const currentFullRole = PROFILE.roles[roleIndex];
    let timer;

    if (!isDeleting && displayedText === currentFullRole) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayedText === '') {
      // Switch to next word
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % PROFILE.roles.length);
    } else {
      // Typing or deleting
      const speed = isDeleting ? 30 : 65;
      timer = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? currentFullRole.substring(0, prev.length - 1)
            : currentFullRole.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  const scrollTo = (id) => {
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
    <Box
      id="home"
      component="section"
      sx={{
        pt: { xs: 15, md: 18 },
        pb: { xs: 8, md: 10 },
        position: 'relative',
        overflow: 'hidden',
        background:
          'radial-gradient(circle at 85% 15%, rgba(201, 237, 117, 0.28) 0%, rgba(246, 248, 245, 0) 45%), radial-gradient(circle at 10% 70%, rgba(45, 122, 94, 0.08) 0%, rgba(246, 248, 245, 0) 40%)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 6 }} alignItems="center">
          {/* Left Column: Text & CTAs */}
          <Grid item xs={12} md={7}>
            {/* Status Pill */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.25,
                px: 2,
                py: 0.75,
                borderRadius: 999,
                backgroundColor: '#ffffff',
                border: '1px solid #dde4dc',
                boxShadow: '0 2px 10px rgba(23, 77, 59, 0.04)',
                mb: 2.5,
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: '#22c55e',
                  boxShadow: '0 0 0 2px rgba(34, 197, 94, 0.25)',
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  fontFamily: (t) => t.typography.mono.fontFamily,
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  color: 'primary.main',
                }}
              >
                {PROFILE.badge}
              </Typography>
            </Box>

            {/* Main Headline */}
            <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
              I build{' '}
              <Box
                component="span"
                sx={{
                  color: 'secondary.main',
                  position: 'relative',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    bottom: 4,
                    width: '100%',
                    height: '8px',
                    backgroundColor: 'rgba(201, 237, 117, 0.45)',
                    zIndex: -1,
                    borderRadius: 1,
                  },
                }}
              >
                products
              </Box>
              , not just pages.
            </Typography>

            {/* Typewriter Role Title */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                minHeight: '2.4rem',
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  fontFamily: (t) => t.typography.mono.fontFamily,
                  fontSize: { xs: '1.05rem', sm: '1.25rem' },
                  fontWeight: 600,
                  color: 'secondary.main',
                }}
              >
                &gt; {displayedText}
                <Box
                  component="span"
                  sx={{
                    display: 'inline-block',
                    width: '2px',
                    height: '1.1em',
                    backgroundColor: 'secondary.main',
                    ml: 0.5,
                    verticalAlign: '-2px',
                    animation: 'blink 1.1s infinite',
                    '@keyframes blink': {
                      '0%, 100%': { opacity: 1 },
                      '50%': { opacity: 0 },
                    },
                  }}
                />
              </Typography>
            </Box>

            {/* Bio Subtitle */}
            <Typography variant="subtitle1" sx={{ mb: 3.5, maxWidth: 580 }}>
              {PROFILE.bio}
            </Typography>

            {/* Core Track Chips */}
            <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', mb: 4 }}>
              <Chip
                label="🟢 MERN Stack Developer"
                sx={{
                  backgroundColor: 'mern.light',
                  color: 'mern.main',
                  border: '1px solid rgba(22, 112, 77, 0.25)',
                  fontWeight: 700,
                  py: 2.2,
                  px: 0.5,
                  fontSize: '0.88rem',
                }}
              />
              <Chip
                label="🎭 Playwright Automation Test Engineer"
                sx={{
                  backgroundColor: 'playwright.light',
                  color: 'playwright.main',
                  border: '1px solid rgba(185, 71, 67, 0.25)',
                  fontWeight: 700,
                  py: 2.2,
                  px: 0.5,
                  fontSize: '0.88rem',
                }}
              />
            </Box>

            {/* Action Buttons */}
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => scrollTo('platina')}
                endIcon={<FaArrowRight style={{ fontSize: '0.85rem' }} />}
                size="large"
                sx={{ px: 3, py: 1.3 }}
              >
                Explore Platina
              </Button>

              <Button
                variant="outlined"
                color="primary"
                href={`mailto:${PROFILE.email}`}
                startIcon={<FaEnvelope style={{ fontSize: '0.95rem' }} />}
                size="large"
                sx={{ px: 2.7, py: 1.3 }}
              >
                Hire Me · Email
              </Button>

              <Button
                variant="outlined"
                color="primary"
                href={`https://wa.me/${PROFILE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<FaWhatsapp style={{ fontSize: '1.1rem', color: '#25d366' }} />}
                size="large"
                sx={{ px: 2.7, py: 1.3 }}
              >
                WhatsApp ↗
              </Button>
            </Box>
          </Grid>

          {/* Right Column: Profile Photo Card */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                position: 'relative',
                maxWidth: { xs: 320, sm: 380, md: 400 },
                mx: 'auto',
              }}
            >
              {/* Outer decorative card container */}
              <Box
                sx={{
                  position: 'relative',
                  p: 1.5,
                  backgroundColor: '#ffffff',
                  borderRadius: '32px',
                  border: '1px solid #dde4dc',
                  boxShadow: '0 20px 48px rgba(23, 77, 59, 0.08)',
                }}
              >
                <Box
                  component="img"
                  src={photoSrc}
                  alt={PROFILE.name}
                  onError={() => setPhotoSrc('/avatar-fallback.svg')}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    aspectRatio: '1/1',
                    objectFit: 'cover',
                    borderRadius: '24px',
                    display: 'block',
                    backgroundColor: '#eef2ec',
                  }}
                />
              </Box>

              {/* Floating Badge 1 - MERN Stack with React Icons */}
              <Card
                sx={{
                  position: 'absolute',
                  bottom: -16,
                  left: { xs: -8, sm: -20 },
                  borderRadius: 3,
                  border: '1px solid #dde4dc',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 10px 28px rgba(23, 77, 59, 0.1)',
                  zIndex: 2,
                }}
              >
                <CardContent sx={{ py: '10px !important', px: '14px !important' }}>
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 700,
                      fontSize: '0.82rem',
                      color: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.8,
                    }}
                  >
                    <SiMongodb style={{ color: '#47a248', fontSize: '1rem' }} />
                    <SiExpress style={{ color: '#000000', fontSize: '0.95rem' }} />
                    <FaReact style={{ color: '#61dafb', fontSize: '1rem' }} />
                    <FaNodeJs style={{ color: '#339933', fontSize: '1rem' }} />
                    <span>MERN Stack</span>
                  </Typography>
                </CardContent>
              </Card>

              {/* Floating Badge 2 - QA & Automation with React Icons */}
              <Card
                sx={{
                  position: 'absolute',
                  top: 24,
                  right: { xs: -8, sm: -20 },
                  borderRadius: 3,
                  border: '1px solid #dde4dc',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 10px 28px rgba(23, 77, 59, 0.1)',
                  zIndex: 2,
                }}
              >
                <CardContent sx={{ py: '10px !important', px: '14px !important' }}>
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 700,
                      fontSize: '0.82rem',
                      color: 'playwright.main',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.8,
                    }}
                  >
                    <SiTestinglibrary style={{ color: '#2eac68', fontSize: '1rem' }} />
                    <SiPostman style={{ color: '#ff6c37', fontSize: '1rem' }} />
                    <span>Playwright · Postman</span>
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>

        {/* 4 Stats Cards */}
        <Grid container spacing={2.5} sx={{ mt: { xs: 6, md: 8 } }}>
          {METRICS.map((stat) => (
            <Grid item xs={6} md={3} key={stat.label}>
              <Card
                sx={{
                  p: { xs: 2.5, sm: 3 },
                  textAlign: 'center',
                  backgroundColor: '#ffffff',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    color: 'primary.main',
                    letterSpacing: '-0.02em',
                    fontSize: { xs: '1.8rem', sm: '2.2rem' },
                    mb: 0.5,
                  }}
                >
                  {stat.value}
                  <Box component="span" sx={{ color: 'secondary.main' }}>
                    {stat.suffix}
                  </Box>
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                  {stat.label}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
