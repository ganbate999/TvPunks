import { Badge, Icon, useTheme } from '@mui/material';

import { LIGHT_MODE_THEME } from '../../../utils/constants';

export const ActionIcon = (badgeContent, icon) => {
  const theme = useTheme();
  return badgeContent ? (
    <Badge badgeContent={badgeContent} color={theme.palette.mode === LIGHT_MODE_THEME ? 'error' : 'primary'}>
      <Icon component={icon} />
    </Badge>
  ) : (
    <Icon component={icon} />
  );
};
