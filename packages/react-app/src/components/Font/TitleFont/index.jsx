import { Typography } from '@mui/material';
import { useEffect } from 'react';
import WebFont from 'webfontloader';

export const TitleFont = (prop) => {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['VT323', 'Comic Neue'],
      },
    });
  }, []);

  return (
    <>
      <Typography style={prop.style} typography="p" fontFamily={'Comic Neue'} color={prop.color} fontSize={prop.size} fontWeight={prop.fontWeight}>
        {prop.children}
      </Typography>
    </>
  );
};
