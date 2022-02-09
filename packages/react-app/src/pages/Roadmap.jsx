import { Box, styled } from '@mui/material';
import { Helmet } from 'react-helmet';
import { TitleFont } from '../components/Font/TitleFont';
import { APP_TITLE, PAGE_TITLE_ROADMAP } from '../utils/constants';
import RoadmapLeftImg from '../assets/img/roadmap_left.png';
import RoadmapRightImg from '../assets/img/roadmap_right.png';
import { ContentFont } from '../components/Font/ContentFont';

export const Roadmap = () => {
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_ROADMAP} | {APP_TITLE}
        </title>
      </Helmet>
      <Box sx={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ textAlign: 'center', padding: 3, paddingBottom:0, paddingTop: 5, position: 'relative' }}>
          <TitleFont fontWeight="bold"  size={50} color="#212121">
            ROADMAP
          </TitleFont>
          <LeftImgWrapper>
            <LeftImg src={RoadmapLeftImg} alt="roadmap-left" />
          </LeftImgWrapper>
          <RightImgWrapper>
            <RightImg src={RoadmapRightImg} alt="roadmap-right" />
          </RightImgWrapper>
        </Box>
        {/* <Box sx={{ textAlign: 'center' }}>
          <ContentFont fontWeight="800" size={25} color="#626262">
            Roadmap is up to YOU!
          </ContentFont>
        </Box> */}
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'auto', textAlign:'center', px: 4, py: 2, pb: 3 }}>
          <ContentFont fontWeight="bold" size={25} color="#212121">
            We are opting for a community roadmap! You guys, &apos;Tv Punks&apos; holders will all have an equal vote in
            deciding what we do with the projects&apos; funds dedicated to the road map. We will be creating a discord
            on launch for all &apos;Tv Punks&apos; Holders to communicate, hangout and discuss the future of the
            project! This is also where votes will be held for use of the funds. You guys can take this project anywhere
            you please! It is all up to the holders.
          </ContentFont>
        </Box>
      </Box>
    </>
  );
};

const LeftImgWrapper = styled('div')`
  position: absolute;
  top: 50%;
  left: 25px;
  transform: translateY(-50%);
  @media (max-width: 991px) {
    display: none;
  }

`;

const LeftImg = styled('img')`
  height: 110px;
`;

const RightImgWrapper = styled('div')`
  position: absolute;  
  top: 50%;
  right: 25px;
  transform: translateY(-50%);
  @media (max-width: 991px) {
    display: none;
  }

`;

const RightImg = styled('img')`
  height: 110px;
`;
