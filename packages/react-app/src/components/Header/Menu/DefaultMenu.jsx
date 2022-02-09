import { Divider, Menu, MenuItem } from '@mui/material';

import { Settings, Preferences, SignOut } from '../../Actions';

export const DefaultMenu = ({ isMenuOpen, handleMenuClose, anchorEl }) => (
  <Menu anchorEl={anchorEl} id="primary-search-account-menu" keepMounted open={isMenuOpen} onClose={handleMenuClose}>
    <MenuItem onClick={handleMenuClose}>
      <Settings disableTooltip />
      Settings
    </MenuItem>
    <MenuItem onClick={handleMenuClose}>
      <Preferences disableTooltip />
      Preferences
    </MenuItem>
    <Divider />
    <MenuItem onClick={handleMenuClose}>
      <SignOut disableTooltip />
      Sign Out
    </MenuItem>
  </Menu>
);
