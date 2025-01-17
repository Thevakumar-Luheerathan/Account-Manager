import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MainGrid from './MainGrid';
import SideMenu from './SideMenu';

export default function Dashboard(props: { disableCustomTheme?: boolean }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideMenu />
      {/* <Stack
        spacing={2}
        sx={{
          alignItems: 'center',
          mx: 3,
          pb: 5,
          mt: { xs: 8, md: 0 },
        }}
      >
        <MainGrid />
      </Stack> */}
    </Box>
  );
}
