import React from 'react';
import { Box, Typography } from '@mui/material';

export default function SectionHeader({
  badge,
  title,
  lead,
  align = 'left',
  light = false,
  sx = {},
}) {
  const isCenter = align === 'center';

  return (
    <Box
      sx={{
        mb: { xs: 4, md: 5 },
        textAlign: align,
        maxWidth: isCenter ? 820 : 760,
        mx: isCenter ? 'auto' : 0,
        ...sx,
      }}
    >
      {badge && (
        <Typography
          variant="caption"
          sx={{
            display: 'inline-block',
            fontFamily: (t) => t.typography.mono.fontFamily,
            fontWeight: 700,
            fontSize: '0.78rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: light ? '#c9ed75' : 'secondary.main',
            mb: 1,
            px: 1.5,
            py: 0.5,
            borderRadius: 999,
            backgroundColor: light
              ? 'rgba(201, 237, 117, 0.12)'
              : 'rgba(45, 122, 94, 0.08)',
            border: `1px solid ${light ? 'rgba(201, 237, 117, 0.25)' : 'rgba(45, 122, 94, 0.18)'}`,
          }}
        >
          {badge}
        </Typography>
      )}

      {title && (
        <Typography
          variant="h2"
          component="h2"
          sx={{
            color: light ? '#ffffff' : 'text.primary',
            mt: 0.5,
            mb: lead ? 1.5 : 0,
          }}
        >
          {title}
        </Typography>
      )}

      {lead && (
        <Typography
          variant="subtitle1"
          sx={{
            color: light ? '#d3e2db' : 'text.secondary',
            maxWidth: 680,
            mx: isCenter ? 'auto' : 0,
            fontSize: { xs: '0.98rem', md: '1.08rem' },
          }}
        >
          {lead}
        </Typography>
      )}
    </Box>
  );
}
