import React, { useEffect, useState } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { theme } from './theme/theme';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ExpertiseSection from './components/sections/ExpertiseSection';
import PlatinaSection from './components/sections/PlatinaSection';
import EngineeringSection from './components/sections/EngineeringSection';
import AchievementSection from './components/sections/AchievementSection';
import SkillsSection from './components/sections/SkillsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ProjectsSection from './components/sections/ProjectsSection';
import TeachingSection from './components/sections/TeachingSection';
import ContactSection from './components/sections/ContactSection';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Subtle, non-intrusive scroll progress indicator */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3px',
          width: `${scrollProgress}%`,
          backgroundColor: '#2d7a5e',
          zIndex: 9999,
          transition: 'width 0.1s linear',
        }}
      />

      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'background.default',
        }}
      >
        <Navbar />

        <Box component="main" sx={{ flexGrow: 1 }}>
          <HeroSection />
          <AboutSection />
          <ExpertiseSection />
          <PlatinaSection />
          <EngineeringSection />
          <AchievementSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <TeachingSection />
          <ContactSection />
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}
