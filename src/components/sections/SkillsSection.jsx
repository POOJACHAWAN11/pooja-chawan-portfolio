import React, { useState } from 'react';
import { Box, Container, Typography, Button, Chip } from '@mui/material';
import SectionHeader from '../common/SectionHeader';
import { SKILLS_DATA } from '../../data/portfolioData';

export default function SkillsSection() {
  const categories = Object.keys(SKILLS_DATA);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <Box
      id="skills"
      component="section"
      sx={{
        py: { xs: 8, md: 11 },
        backgroundColor: '#f6f8f5',
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader
          badge="Technical Skills"
          title="Tools, frameworks, and engineering standards."
          lead="Categorized technical proficiencies across modern frontend development, scalable backend services, test automation, and performance tuning."
        />

        {/* Category Filter Pills */}
        <Box
          sx={{
            display: 'flex',
            gap: 1.25,
            flexWrap: 'wrap',
            mb: 4,
          }}
        >
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <Button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                sx={{
                  borderRadius: 999,
                  px: 2.2,
                  py: 1,
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  backgroundColor: isSelected ? 'primary.main' : '#ffffff',
                  color: isSelected ? '#ffffff' : 'text.secondary',
                  border: '1px solid',
                  borderColor: isSelected ? 'primary.main' : '#dde4dc',
                  boxShadow: isSelected ? '0 4px 14px rgba(23, 77, 59, 0.16)' : 'none',
                  '&:hover': {
                    backgroundColor: isSelected ? 'primary.dark' : 'rgba(23, 77, 59, 0.05)',
                    borderColor: isSelected ? 'primary.dark' : 'secondary.main',
                    color: isSelected ? '#ffffff' : 'text.primary',
                  },
                }}
              >
                {cat}
                <Box
                  component="span"
                  sx={{
                    ml: 1,
                    px: 0.9,
                    py: 0.2,
                    borderRadius: 999,
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.25)' : 'rgba(23, 77, 59, 0.08)',
                    color: isSelected ? '#ffffff' : 'primary.main',
                  }}
                >
                  {SKILLS_DATA[cat].length}
                </Box>
              </Button>
            );
          })}
        </Box>

        {/* Skill Chips Grid */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1.5,
            minHeight: 120,
            p: { xs: 2.5, md: 3.5 },
            backgroundColor: '#ffffff',
            borderRadius: 4,
            border: '1px solid #dde4dc',
          }}
        >
          {SKILLS_DATA[activeCategory].map((skill) => (
            <Chip
              key={skill}
              label={skill}
              sx={{
                fontSize: { xs: '0.88rem', sm: '0.94rem' },
                py: 2.4,
                px: 1,
                borderRadius: 2.5,
                backgroundColor: '#f7f9f6',
                border: '1px solid #dde4dc',
                color: 'text.primary',
                fontWeight: 600,
                transition: 'all 0.2s ease',
                '&:hover': {
                  borderColor: 'secondary.main',
                  backgroundColor: 'rgba(45, 122, 94, 0.08)',
                  color: 'primary.main',
                  transform: 'translateY(-2px)',
                },
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
