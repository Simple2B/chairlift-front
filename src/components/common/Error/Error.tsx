import * as React from 'react';
import './Error.sass';
import { blue } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IError {}

const primary = blue[500];

// eslint-disable-next-line no-empty-pattern
const Error: React.FC<IError> = ({}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: primary,
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        404
      </Typography>
    </Box>
  );
};

export default Error;
