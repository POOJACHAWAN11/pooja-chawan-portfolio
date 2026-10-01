import React from 'react';
import { Box, Container, Grid, Card, CardContent, Typography } from '@mui/material';
import SectionHeader from '../common/SectionHeader';
import { TEACHING_PILLARS } from '../../data/portfolioData';

export default function TeachingSection() {
  return (
    <Box
      id="teaching"
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: '#eef2ec',
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader
          badge="Education & Mentorship"
          title="I teach what I build in production."
          lead="Alongside day-to-day software engineering, I train software developers, guide career transitions, and publish structured technical content."
        />

        <Grid container spacing={3}>
          {TEACHING_PILLARS.map((item) => (
            <Grid item xs={12} sm={6} key={item.title}>
              <Card
                sx={{
                  height: '100%',
                  p: { xs: 3, md: 3.5 },
                  backgroundColor: '#ffffff',
                  borderRadius: 4,
                  border: '1px solid #dde4dc',
                }}
              >
                <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                  <Box sx={{ fontSize: '2rem', lineHeight: 1, mb: 1.75 }}>
                    {item.icon}
                  </Box>
                  <Typography variant="h4" component="h3" sx={{ mb: 1.25, color: 'text.primary' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.95rem' }}>
                    {item.description}
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
