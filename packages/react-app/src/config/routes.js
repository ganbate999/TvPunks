import {
  Home as HomeIcon,
  BarChartOutlined as DashboardIcon,
  CodeOutlined as CodeIcon,
  GitHub as GitHubIcon,
  Public as PublicIcon,
  PublicOff as PrivateIcon,
  AccountBoxRounded as UserIcon,
  SettingsOutlined as SettingsIcon,
  ListAlt as ListIcon,
  CreditCard as BillingIcon,
} from "@mui/icons-material";

import { Mint } from "../pages/Mint";
import { Roadmap } from "../pages/Roadmap";
import { Story } from "../pages/Story";
import { Faq } from "../pages/Faq";

// import { Route } from '../types/Route';

const routes = [
  {
    key: "router-mint",
    title: "MINTING",
    description: "Mint",
    component: Mint,
    path: "/",
    isEnabled: true,
    icon: HomeIcon,
    appendDivider: true,
  },
  {
    key: "router-roadmap",
    title: "ROADMAP",
    description: "Roadmap",
    component: Roadmap,
    path: "/roadmap",
    isEnabled: true,
    icon: HomeIcon,
    appendDivider: true,
  },
  {
    key: "router-story",
    title: "STORY",
    description: "Story",
    component: Story,
    path: "/story",
    isEnabled: true,
    icon: HomeIcon,
    appendDivider: true,
  },
  {
    key: "router-faq",
    title: "FAQ",
    description: "Faq",
    component: Faq,
    path: "/faq",
    isEnabled: true,
    icon: HomeIcon,
    appendDivider: true,
  },
];

export default routes;
