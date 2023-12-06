import React, { FC, Suspense } from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

interface RouteSuspenseProps {
  Comp: React.FunctionComponent;
}

const RouteSuspense: FC<RouteSuspenseProps> = ({ Comp }) => {
  return (
    <Suspense
      fallback={
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      }
    >
      <Comp />
    </Suspense>
  );
};

export default RouteSuspense;
