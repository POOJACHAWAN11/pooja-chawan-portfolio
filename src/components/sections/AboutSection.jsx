import React from 'react';
import { Box, Container, Grid, Card, CardContent, Typography } from '@mui/material';
import { HiLightningBolt, HiPuzzle, HiServer, HiShieldCheck } from 'react-icons/hi';
import SectionHeader from '../common/SectionHeader';
import { ABOUT_PILLARS } from '../../data/portfolioData';

const getPillarIcon = (type) => {
  switch (type) {
    case 'speed':
      return <HiLightningBolt style={{ color: '#2d7a5e', fontSize: '1.6rem' }} />;
    case 'component':
      return <HiPuzzle style={{ color: '#2d7a5e', fontSize: '1.6rem' }} />;
    case 'fullstack':
      return <HiServer style={{ color: '#2d7a5e', fontSize: '1.6rem' }} />;
    case 'quality':
    default:
      return <HiShieldCheck style={{ color: '#2d7a5e', fontSize: '1.6rem' }} />;
  }
};

export default function AboutSection() {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: { xs: 8, md: 11 },
        backgroundColor: '#f6f8f5',
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader
          badge="About Me"
          title="Engineer who ships, tests, and explains."
          lead="5 years of full-stack engineering, 3 of them intensely focused on React.js and modern web architectures, delivering enterprise EdTech products alongside cross-functional product owners and designers."
        />

        <Grid container spacing={3}>
          {ABOUT_PILLARS.map((pillar) => (
            <Grid item xs={12} sm={6} key={pillar.title}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  p: { xs: 2.5, md: 3 },
                  backgroundColor: '#ffffff',
                }}
              >
                <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2.5,
                      backgroundColor: 'rgba(45, 122, 94, 0.08)',
                      display: 'grid',
                      placeItems: 'center',
                      mb: 2,
                    }}
                  >
                    {getPillarIcon(pillar.iconType)}
                  </Box>
                  <Typography variant="h4" component="h3" sx={{ mb: 1, color: 'text.primary' }}>
                    {pillar.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.95rem' }}>
                    {pillar.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
