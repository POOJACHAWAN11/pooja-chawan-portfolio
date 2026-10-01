import React from 'react';
import { Box, Container, Grid, Card, CardContent, Typography, Chip } from '@mui/material';
import { FaCheckCircle } from 'react-icons/fa';
import SectionHeader from '../common/SectionHeader';
import { EXPERTISE_TRACKS } from '../../data/portfolioData';

export default function ExpertiseSection() {
  return (
    <Box
      id="expertise"
      component="section"
      sx={{
        py: { xs: 8, md: 11 },
        backgroundColor: '#eef2ec',
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader
          badge="Core Expertise"
          title="Two roles, one uncompromising quality bar."
          lead="I build the product and I write automated test suites for it — ensuring features ship faster to customers and break less in production."
        />

        <Grid container spacing={3.5}>
          {EXPERTISE_TRACKS.map((track) => (
            <Grid item xs={12} md={6} key={track.role}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  p: { xs: 3, md: 4 },
                  backgroundColor: '#ffffff',
                  borderTop: `6px solid ${track.themeColor}`,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                  {/* Role Badge */}
                  <Chip
                    label={track.role}
                    size="small"
                    sx={{
                      backgroundColor: track.bgColor,
                      color: track.themeColor,
                      fontWeight: 800,
                      letterSpacing: '0.04em',
                      fontSize: '0.75rem',
                      mb: 2,
                    }}
                  />

                  {/* Headline */}
                  <Typography variant="h3" component="h3" sx={{ mb: 2.5, color: 'text.primary' }}>
                    {track.headline}
                  </Typography>

                  {/* Metrics Bar */}
                  <Box
                    sx={{
                      display: 'flex',
                      gap: { xs: 2.5, sm: 4 },
                      mb: 3.5,
                      pb: 2.5,
                      borderBottom: '1px solid #dde4dc',
                    }}
                  >
                    {track.metrics.map((m) => (
                      <Box key={m.lbl}>
                        <Typography
                          variant="h4"
                          sx={{
                            color: track.themeColor,
                            fontWeight: 800,
                            lineHeight: 1.1,
                            fontSize: { xs: '1.4rem', sm: '1.7rem' },
                          }}
                        >
                          {m.val}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: 'text.secondary', fontWeight: 600, fontSize: '0.78rem' }}
                        >
                          {m.lbl}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  {/* Bullet Highlights with React Icons */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    {track.highlights.map((item, idx) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                        <FaCheckCircle
                          style={{
                            color: track.themeColor,
                            fontSize: '1.1rem',
                            marginTop: '3px',
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{ color: 'text.secondary', fontSize: '0.94rem', lineHeight: 1.55 }}
                        >
                          {item}
                        </Typography>
                      </Box>
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
