// import { FC, useState } from 'react';
import { styled, Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import { Navigation } from '../Navigation';
// import { Header } from '../Header';
// import { Footer } from '../Footer';

import Menu from '../../assets/img/menu.png';
import backgroundgif from '../../assets/img/back-01.gif';
import MainBg from '../../assets/img/main_bg.png';
// import Dot from '../../assets/img/dot.svg';
import discord from '../../assets/img/discord.png';
import twitter from '../../assets/img/twitter.png';


import { FOOTER_HEIGHT } from '../../utils/constants';
import { routes } from '../../config';
import { PixelateFont } from '../Font/PixelateFont';

export const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <MainSectionWrapper>
      <LayoutWrapper>
        <ContentWrapper>
          <Box component="main" sx={{ flexGrow: 1, p: 3, }}>
            <MainAppWrapper>
              <SubMainAppWrapper>
                <Grid container sx={{ width: '75%', marginRight: 'auto' }}>
                  <Grid item md={4} sm={12} xs={12} sx={{ px: 3, py: 5 }}>
                    <MenuImgWrapper>
                      <StyledMenu src={Menu} alt="menu" />
                      <MenuWrapper>
                        {routes.map((route) => {
                          return (
                            <MenuItem key={route.key}>
                              {location.pathname === route.path ? (
                                <PixelBorder>
                                  <Box sx={{ px: 2 }}>
                                    <Link to={route.path} style={{ textDecoration: 'none' }}>
                                      <PixelateFont color="#626262" size={50} fontWeight="bold">
                                        {route.title}
                                      </PixelateFont>
                                    </Link>
                                  </Box>
                                </PixelBorder>
                              ) : (
                                <Box sx={{ px: 2 }}>
                                  <Link to={route.path} style={{ textDecoration: 'none' }}>
                                    <PixelateFont color="#626262" size={50} fontWeight="bold">
                                      {route.title}
                                    </PixelateFont>
                                  </Link>
                                </Box>
                              )}
                            </MenuItem>
                          );
                        })}
                        <MenuItem>                          
                          <CenterImgWrapper>
                            <img src={discord} alt="discord" />
                            <img src={twitter} alt="twitter" />
                          </CenterImgWrapper>
                        </MenuItem>
                      </MenuWrapper>
                    </MenuImgWrapper>
                  </Grid>
                  <Grid item md={8} sm={12} xs={12} sx={{ px: 3, py: 3 }}>
                    <MainBgWrapper>{children}</MainBgWrapper>
                  </Grid>
                </Grid>
              </SubMainAppWrapper>
            </MainAppWrapper>
          </Box>
        </ContentWrapper>
      </LayoutWrapper>
    </MainSectionWrapper>
  );
};

const MainSectionWrapper = styled('div')`
  width: 100%;
  height: 100%;
  margin-top: 100px;
  display: flex;
  align-items: center;
`;

const MainBgWrapper = styled('div')`
  width: 100%;
  height: 80%;
  background-image: url(${MainBg});
  background-size: 100% 100%;  
`;

const MenuImgWrapper = styled('div')`
  width: 100%;  
  position: relative;  
`;

const MenuWrapper = styled('div')`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex: 5;
  flex-direction: column;
  padding-bottom: 30%;
  padding-top: 10%;
  z-index: 1;
`;

const MenuItem = styled('div')`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledMenu = styled('img')`
  width: 100%;
  height:100%;
`;

const MainAppWrapper = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const SubMainAppWrapper = styled('div')`
  width: 100%;
`;

const LayoutWrapper = styled('div')`
  
  width: 1600px;
  height: 850px;
  margin: auto;  
  margin-top: auto;
  background-image: url(${backgroundgif});
  background-size: 100% 100%;
  
`;

const ContentWrapper = styled('div')`
  display: flex;
  min-height: calc(85vh - ${FOOTER_HEIGHT}px);
`;

const PixelBorder = styled('div')`
  border-style: solid;
  border-width: 4px;
  border-color: #626262;
  border-image-slice: 2;
  border-image-width: 1;
  border-image-outset: 0;
  border-image-source: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='6' height='6'><path d='M0 2h2v2H0zM2 0h2v2H2zM4 2h2v2H4zM2 4h2v2H2z' fill='%23626262' /></svg>");
  position: relative;
  border-radius: 14px;
  display: inline-block;
`;
const CenterImgWrapper = styled('div')`
  @media (max-width: 991px) {
    display: none;
  }

  img {
    width: 30%;
    margin: auto;
    border-radius: 30px;
  }
`;