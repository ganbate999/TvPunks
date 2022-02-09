import { Box, styled } from '@mui/material';
import { Helmet } from 'react-helmet';
import { TitleFont } from '../components/Font/TitleFont';
import { APP_TITLE, PAGE_TITLE_STORY } from '../utils/constants';
import StoryLeftImg from '../assets/img/story_left.png';
import StoryRightImg from '../assets/img/story_right.png';
import { ContentFont } from '../components/Font/ContentFont';

export const Story = () => {
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_STORY} | {APP_TITLE}
        </title>
      </Helmet>
      <Box sx={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ textAlign: 'center', padding: 3, paddingBottom:0, paddingTop: 1, position: 'relative' }}>
          <TitleFont fontWeight="bold" size={40} color="#212121">
            OUR <br></br> STORY
          </TitleFont>
          <LeftImgWrapper>
            <LeftImg src={StoryLeftImg} alt="roadmap-left" />
          </LeftImgWrapper>
          <RightImgWrapper>
            <RightImg src={StoryRightImg} alt="roadmap-right" />
          </RightImgWrapper>
        </Box>
        <Box sx={{ textAlign: 'center' }}></Box>
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'auto', textAlign: 'center', px: 4, py: 2, pb: 3 }}>
          <ContentFont fontWeight="bold" size={22} color="#212121">
            <GreyText>33it Studios&nbsp;</GreyText>
            is relatively new to the NFT space; it has been a great 6 months of learning the block-chain, buying arts
            and having fun! Along the way we have noticed it is very easy connect with projects you believe in. Creating
            a new part of your life where you can meet new people, learn from others and overall have a great time! Our
            idea with TV Punks, is to create an NFT that isn&apos;t constrained to the artwork. We want to build a club
            for the holders, a social community that works together to build whatever the community decides and make it
            great.
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
  border: 5px solid #212121;
  border-radius: 10px;
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
  border: 5px solid #212121;
  border-radius: 10px;
`;

const GreyText = styled('span')`
  color: #626262;
`;
