import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
//! MUI
// 리액트에서 사용하는 UI 라이브러리
// (디자인 컴포넌트)

// 사용법
// npm install @mui/material @emotion/react @emotion/styled

// 핵심 컴포넌트 사용
  export default function Types() {
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <Typography variant="h3" gutterBottom>
        h3. Heading
      </Typography>
    </Box>
  );
}
  
