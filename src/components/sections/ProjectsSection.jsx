import React from 'react';
import { Box, Container, Grid, Card, CardContent, Typography, Chip } from '@mui/material';
import SectionHeader from '../common/SectionHeader';
import { PROJECTS } from '../../data/portfolioData';

export default function ProjectsSection() {
  return (
    <Box
      id="projects"
      component="section"
      sx={{
        py: { xs: 8, md: 11 },
        backgroundColor: '#f6f8f5',
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader
          badge="Featured Engineering Work"
          title="Selected projects shipped to production."
          lead="Real-world products solving critical education, collaboration, and training challenges with enterprise-grade resilience."
        />

        <Grid container spacing={3.5}>
          {PROJECTS.map((proj) => (
            <Grid item xs={12} md={4} key={proj.title}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  p: { xs: 3, md: 3.5 },
                  backgroundColor: '#ffffff',
                }}
              >
                <CardContent sx={{ p: 0, '&:last-child': { pb: 0 }, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Category Tag */}
                  <Typography
                    variant="caption"
                    sx={{
                      fontFamily: (t) => t.typography.mono.fontFamily,
                      color: 'primary.main',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      display: 'block',
                      mb: 1,
                    }}
                  >
                    {proj.category}
                  </Typography>

                  {/* Title */}
                  <Typography variant="h4" component="h3" sx={{ mb: 2, color: 'text.primary' }}>
                    {proj.title}
                  </Typography>

                  {/* Points List */}
                  <Box component="ul" sx={{ pl: 2, m: 0, mb: 3, flex: 1, color: 'text.secondary' }}>
                    {proj.points.map((pt, idx) => (
                      <Box
                        component="li"
                        key={idx}
                        sx={{
                          mb: 1,
                          fontSize: '0.9rem',
                          lineHeight: 1.55,
                          '&::marker': { color: 'secondary.main' },
                        }}
                      >
                        {pt}
                      </Box>
                    ))}
                  </Box>

                  {/* Tech Stack Chips */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, pt: 2, borderTop: '1px solid #dde4dc' }}>
                    {proj.stack.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(23, 77, 59, 0.08)',
                          color: 'primary.main',
                          fontWeight: 600,
                          fontSize: '0.74rem',
                          borderRadius: 2,
                        }}
                      />
                    ))}
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
