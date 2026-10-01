import React, { useState } from 'react';
import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';
import { FaEnvelope, FaWhatsapp, FaPhoneAlt, FaLinkedinIn, FaCopy, FaCheck } from 'react-icons/fa';
import SectionHeader from '../common/SectionHeader';
import { PROFILE } from '../../data/portfolioData';

export default function ContactSection() {
  const [copyFeedback, setCopyFeedback] = useState({ open: false, message: '' });

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopyFeedback({ open: true, message: `${label} copied to clipboard!` });
  };

  const handleCloseSnackbar = () => {
    setCopyFeedback({ open: false, message: '' });
  };

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#f6f8f5',
      }}
    >
      <Container maxWidth="lg">
        <Card
          sx={{
            p: { xs: 4, sm: 6, md: 7 },
            backgroundColor: '#174d3b',
            color: '#ffffff',
            borderRadius: 5,
            textAlign: 'center',
            boxShadow: '0 24px 60px rgba(23, 77, 59, 0.22)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
            <SectionHeader
              badge="Get In Touch / Hire Me"
              title="Let's build something fast and reliable."
              lead="Actively open to MERN Stack Developer, Senior Frontend Engineer, and Playwright Automation Test Engineer opportunities. For hiring inquiries, collaborations, or tech talks, reach out directly."
              align="center"
              light
              sx={{ mb: 4 }}
            />

            {/* Direct Contact Badges (Click to Copy) */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                flexWrap: 'wrap',
                mb: 4.5,
              }}
            >
              <Box
                onClick={() => handleCopy(PROFILE.email, 'Email')}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1.25,
                  px: 2.5,
                  py: 1.1,
                  borderRadius: 999,
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  border: '1px solid rgba(255, 255, 255, 0.28)',
                  fontSize: '0.94rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.22)',
                    borderColor: '#c9ed75',
                    transform: 'translateY(-1px)',
                  },
                }}
              >
                <FaEnvelope style={{ color: '#c9ed75', fontSize: '1rem' }} />
                <span>{PROFILE.email}</span>
                <FaCopy style={{ fontSize: '0.85rem', opacity: 0.75, marginLeft: 4 }} />
              </Box>

              <Box
                onClick={() => handleCopy(PROFILE.phone, 'Phone number')}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1.25,
                  px: 2.5,
                  py: 1.1,
                  borderRadius: 999,
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  border: '1px solid rgba(255, 255, 255, 0.28)',
                  fontSize: '0.94rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.22)',
                    borderColor: '#c9ed75',
                    transform: 'translateY(-1px)',
                  },
                }}
              >
                <FaPhoneAlt style={{ color: '#c9ed75', fontSize: '0.95rem' }} />
                <span>{PROFILE.phone}</span>
                <FaCopy style={{ fontSize: '0.85rem', opacity: 0.75, marginLeft: 4 }} />
              </Box>
            </Box>

            {/* Quick Action Channels - Crystal Clear, High-Contrast Buttons */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                flexWrap: 'wrap',
              }}
            >
              {/* Button 1: Send Email */}
              <Button
                variant="contained"
                href={`mailto:${PROFILE.email}`}
                startIcon={<FaEnvelope style={{ fontSize: '1rem' }} />}
                size="large"
                sx={{
                  backgroundColor: '#ffffff !important',
                  color: '#174d3b !important',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  px: 3.2,
                  py: 1.3,
                  borderRadius: 999,
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
                  '&:hover': {
                    backgroundColor: '#c9ed75 !important',
                    color: '#174d3b !important',
                  },
                }}
              >
                Send Email
              </Button>

              {/* Button 2: WhatsApp */}
              <Button
                variant="contained"
                href={`https://wa.me/${PROFILE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<FaWhatsapp style={{ fontSize: '1.2rem' }} />}
                size="large"
                sx={{
                  backgroundColor: '#25d366 !important',
                  color: '#ffffff !important',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  px: 3.2,
                  py: 1.3,
                  borderRadius: 999,
                  boxShadow: '0 4px 16px rgba(37, 211, 102, 0.3)',
                  '&:hover': {
                    backgroundColor: '#1eb857 !important',
                  },
                }}
              >
                Chat on WhatsApp
              </Button>

              {/* Button 3: Direct Call - Fully Visible White Text & Icon */}
              <Button
                variant="contained"
                href={`tel:${PROFILE.phoneRaw}`}
                startIcon={<FaPhoneAlt style={{ fontSize: '0.95rem' }} />}
                size="large"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.18) !important',
                  color: '#ffffff !important',
                  border: '1.5px solid rgba(255, 255, 255, 0.6) !important',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  px: 3.2,
                  py: 1.3,
                  borderRadius: 999,
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.12)',
                  '&:hover': {
                    backgroundColor: '#ffffff !important',
                    color: '#174d3b !important',
                    borderColor: '#ffffff !important',
                  },
                }}
              >
                Direct Call
              </Button>

              {/* Button 4: LinkedIn Profile - Official LinkedIn Blue, Fully Visible */}
              <Button
                variant="contained"
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<FaLinkedinIn style={{ fontSize: '1.1rem' }} />}
                size="large"
                sx={{
                  backgroundColor: '#0a66c2 !important',
                  color: '#ffffff !important',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  px: 3.2,
                  py: 1.3,
                  borderRadius: 999,
                  boxShadow: '0 4px 16px rgba(10, 102, 194, 0.35)',
                  '&:hover': {
                    backgroundColor: '#084d93 !important',
                  },
                }}
              >
                LinkedIn Profile ↗
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>

      {/* Copy feedback notification */}
      <Snackbar
        open={copyFeedback.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
          icon={<FaCheck style={{ fontSize: '0.9rem' }} />}
          sx={{
            backgroundColor: '#103b2e',
            color: '#c9ed75',
            fontWeight: 600,
            borderRadius: 3,
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          }}
        >
          {copyFeedback.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
