import React from 'react';
import { Box, Container, Card, CardContent, Typography, Button, Chip } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SectionHeader from '../common/SectionHeader';
import { ACHIEVEMENTS } from '../../data/portfolioData';

export default function AchievementSection() {
  const ach = ACHIEVEMENTS[0];

  return (
    <Box
      id="achievements"
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: '#eef2ec',
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader
          badge="Product Milestone"
          title="Shipped mobile application on Google Play."
          lead="Demonstrating the versatility to take a concept from UI design and client architecture to production app store hosting and release maintenance."
        />

        <Card
          sx={{
            p: { xs: 3, md: 4.5 },
            backgroundColor: '#ffffff',
            borderRadius: 4,
            border: '1px solid #dde4dc',
            boxShadow: '0 12px 36px rgba(23, 77, 59, 0.05)',
          }}
        >
          <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                alignItems: { xs: 'flex-start', md: 'center' },
                gap: 4,
              }}
            >
              {/* Left Content */}
              <Box sx={{ flex: 1 }}>
                <Chip
                  label={ach.badge}
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(23, 77, 59, 0.08)',
                    color: 'primary.main',
                    fontWeight: 800,
                    letterSpacing: '0.06em',
                    fontSize: '0.75rem',
                    mb: 2,
                  }}
                />

                <Typography variant="h3" sx={{ mb: 1.5, color: 'text.primary' }}>
                  {ach.title}
                </Typography>

                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2.5, maxWidth: 680 }}>
                  {ach.description}
                </Typography>

                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: (t) => t.typography.mono.fontFamily,
                    color: 'secondary.main',
                    fontWeight: 700,
                    display: 'block',
                    mb: 3,
                  }}
                >
                  Tech: {ach.tech}
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  href={ach.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  endIcon={<OpenInNewIcon fontSize="small" />}
                  sx={{ borderRadius: 999, px: 3, py: 1.1 }}
                >
                  {ach.linkText}
                </Button>
              </Box>

              {/* Right Side Pill Highlight */}
              <Box
                sx={{
                  minWidth: { xs: '100%', sm: 200 },
                  textAlign: 'center',
                  p: 3.5,
                  borderRadius: 3.5,
                  backgroundColor: '#103b2e',
                  color: '#ffffff',
                  boxShadow: '0 8px 24px rgba(16, 59, 46, 0.25)',
                  alignSelf: { xs: 'stretch', md: 'center' },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: '#c9ed75',
                    fontWeight: 800,
                    lineHeight: 1,
                    mb: 1,
                    fontSize: { xs: '2rem', sm: '2.4rem' },
                  }}
                >
                  {ach.sideHighlight}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: (t) => t.typography.mono.fontFamily,
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#d3e2db',
                    display: 'block',
                  }}
                >
                  {ach.sideSubtext}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
