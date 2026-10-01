import React from 'react';
import { Box, Container, Grid, Card, CardContent, Typography } from '@mui/material';
import SectionHeader from '../common/SectionHeader';
import { ENGINEERING_PRINCIPLES } from '../../data/portfolioData';

export default function EngineeringSection() {
  return (
    <Box
      id="engineering"
      component="section"
      sx={{
        py: { xs: 8, md: 11 },
        backgroundColor: '#f6f8f5',
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader
          badge="Engineering Thinking"
          title="Architecture principles behind production code."
          lead="The distinction between merely listing framework buzzwords and demonstrating senior architectural judgement."
        />

        <Grid container spacing={3}>
          {ENGINEERING_PRINCIPLES.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.num}>
              <Card
                sx={{
                  height: '100%',
                  p: { xs: 2.5, md: 3 },
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#ffffff',
                }}
              >
                <CardContent sx={{ p: 0, '&:last-child': { pb: 0 }, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography
                    variant="caption"
                    sx={{
                      fontFamily: (t) => t.typography.mono.fontFamily,
                      fontWeight: 800,
                      color: 'secondary.main',
                      letterSpacing: '0.08em',
                      display: 'block',
                      mb: 0.75,
                    }}
                  >
                    {item.num} — {item.principle}
                  </Typography>

                  <Typography variant="h4" component="h3" sx={{ mb: 1.25, color: 'text.primary' }}>
                    {item.title}
                  </Typography>

                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2.5, flex: 1 }}>
                    {item.description}
                  </Typography>

                  <Box
                    component="code"
                    sx={{
                      display: 'block',
                      p: 1.5,
                      borderRadius: 2,
                      backgroundColor: '#14221d',
                      color: '#c9ed75',
                      fontFamily: (t) => t.typography.mono.fontFamily,
                      fontSize: '0.74rem',
                      lineHeight: 1.45,
                      overflowX: 'auto',
                      border: '1px solid rgba(201, 237, 117, 0.2)',
                    }}
                  >
                    {item.signature}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
