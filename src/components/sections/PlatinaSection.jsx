import React from 'react';
import { Box, Container, Grid, Card, CardContent, Typography, Chip } from '@mui/material';
import SectionHeader from '../common/SectionHeader';
import { PLATINA_PRODUCT } from '../../data/portfolioData';

export default function PlatinaSection() {
  return (
    <Box
      id="platina"
      component="section"
      sx={{
        py: { xs: 9, md: 12 },
        backgroundColor: '#174d3b',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader
          badge={PLATINA_PRODUCT.badge}
          title="Platina — Women-Powered Food Entrepreneurship"
          lead={PLATINA_PRODUCT.lead}
          light
        />

        <Grid container spacing={3.5}>
          {/* Card 1: Product Story & Flow */}
          <Grid item xs={12} md={7}>
            <Card
              sx={{
                height: '100%',
                p: { xs: 3, md: 4 },
                backgroundColor: '#ffffff',
                color: 'text.primary',
                borderRadius: 4,
              }}
            >
              <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                <Chip
                  label="WOMEN-POWERED ENTREPRENEURSHIP"
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(23, 77, 59, 0.08)',
                    color: 'primary.main',
                    fontWeight: 800,
                    letterSpacing: '0.06em',
                    fontSize: '0.72rem',
                    mb: 2,
                  }}
                />
                <Typography variant="h3" sx={{ mb: 1.5, color: 'text.primary' }}>
                  From Home Chef to Customer Table
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                  {PLATINA_PRODUCT.story}
                </Typography>

                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'secondary.main',
                    display: 'block',
                    mb: 1.5,
                  }}
                >
                  Core Product Journey:
                </Typography>

                <Grid container spacing={1.5}>
                  {PLATINA_PRODUCT.flow.map((step) => (
                    <Grid item xs={12} sm={6} key={step}>
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: 2.5,
                          border: '1px solid #dde4dc',
                          backgroundColor: '#f7f9f6',
                          fontSize: '0.86rem',
                          fontWeight: 700,
                          color: 'text.primary',
                        }}
                      >
                        {step}
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 2: Architecture Layers */}
          <Grid item xs={12} md={5}>
            <Card
              sx={{
                height: '100%',
                p: { xs: 3, md: 4 },
                backgroundColor: '#103b2e',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.14)',
                borderRadius: 4,
              }}
            >
              <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                <Chip
                  label="ENGINEERING RIGOR"
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(201, 237, 117, 0.14)',
                    color: '#c9ed75',
                    border: '1px solid rgba(201, 237, 117, 0.3)',
                    fontWeight: 800,
                    letterSpacing: '0.06em',
                    fontSize: '0.72rem',
                    mb: 2,
                  }}
                />
                <Typography variant="h3" sx={{ mb: 1.5, color: '#ffffff' }}>
                  {PLATINA_PRODUCT.architectureHeadline}
                </Typography>
                <Typography variant="body2" sx={{ color: '#c4d7ce', mb: 3 }}>
                  {PLATINA_PRODUCT.architectureText}
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {PLATINA_PRODUCT.architectureLayers.map((layer) => (
                    <Box
                      key={layer.layer}
                      sx={{
                        p: 1.75,
                        borderRadius: 2.5,
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          fontFamily: (t) => t.typography.mono.fontFamily,
                          fontWeight: 700,
                          color: '#c9ed75',
                          letterSpacing: '0.08em',
                          display: 'block',
                          mb: 0.25,
                        }}
                      >
                        {layer.layer}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#ffffff', fontWeight: 500 }}>
                        {layer.stack}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 3: Target Roadmap */}
          <Grid item xs={12}>
            <Card
              sx={{
                p: { xs: 3, md: 4 },
                backgroundColor: 'rgba(16, 59, 46, 0.85)',
                border: '1px solid rgba(201, 237, 117, 0.2)',
                borderRadius: 4,
              }}
            >
              <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    mb: 3,
                    flexWrap: 'wrap',
                  }}
                >
                  <Chip
                    label="JANUARY 2027 TARGET"
                    size="small"
                    sx={{
                      backgroundColor: '#c9ed75',
                      color: '#174d3b',
                      fontWeight: 800,
                      letterSpacing: '0.06em',
                      fontSize: '0.75rem',
                    }}
                  />
                  <Typography variant="h4" sx={{ color: '#ffffff', m: 0 }}>
                    Milestone Delivery Plan
                  </Typography>
                </Box>

                <Grid container spacing={2.5}>
                  {PLATINA_PRODUCT.roadmap.map((stage) => (
                    <Grid item xs={12} md={4} key={stage.phase}>
                      <Box
                        sx={{
                          p: 2.5,
                          borderRadius: 3,
                          backgroundColor: '#ffffff',
                          color: 'text.primary',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: 'primary.main',
                            fontWeight: 800,
                            fontFamily: (t) => t.typography.mono.fontFamily,
                            mb: 1,
                          }}
                        >
                          {stage.phase}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {stage.details}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
