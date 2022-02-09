import { styled, Typography } from '@mui/material';

export const PageTitle = ({ title }) => (
  <StyledPageTitle variant="h2" component="h3" color="textSecondary">
    {title}
  </StyledPageTitle>
);

const StyledPageTitle = styled(Typography)`
  text-transform: uppercase;
`;
