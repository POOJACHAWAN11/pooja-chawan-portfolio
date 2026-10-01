import React from 'react';
import { Box, Container, Card, CardContent, Typography } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SectionHeader from '../common/SectionHeader';
import { EXPERIENCE } from '../../data/portfolioData';

export default function ExperienceSection() {
  return (
    <Box
      id="experience"
      component="section"
      sx={{
        py: { xs: 8, md: 11 },
        backgroundColor: '#eef2ec',
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader
          badge="Career Journey"
          title="Where I’ve contributed and shipped."
          lead="Professional track record across full-stack production engineering, high-volume automated testing, and analytical research."
        />

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3.5 }}>
          {EXPERIENCE.map((job) => (
            <Card
              key={job.role}
              sx={{
                p: { xs: 3, md: 4 },
                backgroundColor: '#ffffff',
                borderRadius: 4,
                border: '1px solid #dde4dc',
              }}
            >
              <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'flex-start', sm: 'center' },
                    gap: 1,
                    mb: 1.5,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      fontFamily: (t) => t.typography.mono.fontFamily,
                      fontWeight: 700,
                      color: 'secondary.main',
                      backgroundColor: 'rgba(45, 122, 94, 0.08)',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 999,
                      border: '1px solid rgba(45, 122, 94, 0.2)',
                    }}
                  >
                    {job.period}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
                    <LocationOnIcon sx={{ fontSize: '0.95rem' }} />
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>
                      {job.location}
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="h3" sx={{ mb: 0.5, color: 'text.primary' }}>
                  {job.role}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2.5 }}>
                  <BusinessCenterIcon sx={{ fontSize: '1.1rem', color: 'primary.main' }} />
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'primary.main', m: 0 }}>
                    {job.company}
                  </Typography>
                </Box>

                <Box component="ul" sx={{ pl: 2.5, m: 0, color: 'text.secondary' }}>
                  {job.achievements.map((point, idx) => (
                    <Box
                      component="li"
                      key={idx}
                      sx={{
                        mb: 1.25,
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                        '&::marker': { color: 'secondary.main' },
                      }}
                    >
                      {point}
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
