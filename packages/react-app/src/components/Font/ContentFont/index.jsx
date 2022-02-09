import { Typography } from '@mui/material';
import { useEffect } from 'react';
import WebFont from 'webfontloader';

// type Prop = {
//   color?: string;
//   size?: number;
//   fontWeight?: string;
// };

export const ContentFont = (prop) => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Rubik'], 
      },
    });
  }, []);

  return (
    <>
      <Typography
        typography="p"
        fontFamily={' '}
        color={prop.color}
        fontSize={prop.size}
        fontWeight={prop.fontWeight}
      >
        {prop.children}
      </Typography>
    </>
  );
};
