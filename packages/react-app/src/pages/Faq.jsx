import { Box, styled } from '@mui/material';
import { Helmet } from 'react-helmet';
import { TitleFont } from '../components/Font/TitleFont';
import { APP_TITLE, PAGE_TITLE_FAQ } from '../utils/constants';
import { ContentFont } from '../components/Font/ContentFont';

import StoryLeftImg from '../assets/img/faq_left.png';
import StoryRightImg from '../assets/img/faq_right.png';

export const Faq = () => {
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_FAQ} | {APP_TITLE}
        </title>
      </Helmet>
      <Box sx={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ textAlign: 'center', padding: 3, paddingBottom:0, paddingTop: 1, position: 'relative' }}>
          <TitleFont fontWeight="bold" size={50} color="#212121">
            FAQ.
          </TitleFont>
          <Box sx={{ pt: 1 }}>
            <ContentFont fontWeight="800" size={17} color="#626262">
              Q: How many will be available to mint?
            </ContentFont>
            <ContentFont fontWeight="800" size={17} color="#212121">
              A: 5000, and the first 500 will be free.
            </ContentFont>
          </Box>
          <LeftImgWrapper>
            <LeftImg src={StoryLeftImg} alt="roadmap-left" />
          </LeftImgWrapper>
          <RightImgWrapper>
            <RightImg src={StoryRightImg} alt="roadmap-right" />
          </RightImgWrapper>
        </Box>
        <Box sx={{ textAlign: 'center', px: 5, py: 2 }}>
         
          <Box sx={{ pt: 1 }}>
            <ContentFont fontWeight="800" size={17} color="#626262">
              Q: How do we mint?
            </ContentFont>
            <ContentFont fontWeight="800" size={17} color="#212121">
              A: Connect your wallet, press the mint button on the navigation bar; then select how many you want and
              click mint. Sign the transaction in metamask and you are good to go!
            </ContentFont>
          </Box>
          <Box sx={{ pt: 1 }}>
            <ContentFont fontWeight="800" size={17} color="#626262">
              Q: What inspired you to create this collection?
            </ContentFont>
            <ContentFont fontWeight="800" size={17} color="#212121">
              A. My friend and I were talking about NFTs and the massive social changes they were having on the internet
              and social media we used, we imagined a future where NFTs have expanded past a representation of who you
              are online and can now be used to express and define you in the real world through wearable digital art.
            </ContentFont>
          </Box>
          <Box sx={{ pt: 1 }}>
            <ContentFont fontWeight="800" size={17} color="#626262">
              Q: What can we expect for the future if we mint a Tv Punk?
            </ContentFont>
            <ContentFont fontWeight="800" size={17} color="#212121">
              A: Our plan is to use this project as a genesis for many more projects to come! Our artist is amazing and
              we are going to be working on many projects this year together. If you own an original &apos;Tv Punk&apos;
              You will not only be a part of the community and have a vote in the project&apos;s road map but you will
              also be granted whitelist or a cheaper mint price in future projects!
            </ContentFont>
          </Box>
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
`;

const RightImg = styled('img')`
  height: 110px;
`;
