import { Typography } from '@mui/material';
import { useEffect } from 'react';
import WebFont from 'webfontloader';

export const PixelateFont = (prop) => {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['VT323'],
      },
    });
  }, []);

  return (
    <>
      <Typography typography="p" fontFamily={'VT323'} color={prop.color} fontSize={prop.size} fontWeight={prop.fontWeight}>
        {prop.children}
      </Typography>
    </>
  );
};
