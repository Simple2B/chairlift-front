import * as React from 'react';
import { Sidebar as ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { NavLink } from 'react-router-dom';
import altiumLogo from '../.././../img/A365_logo.svg';
// TODO: add this style (documentation)
// import 'react-pro-sidebar/dist/css/styles.css';
import { tokens } from '../../../theme';
import { ReactElement, useState } from 'react';
import NotStartedIcon from '@mui/icons-material/NotStarted';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ShareIcon from '@mui/icons-material/Share';
import ForumIcon from '@mui/icons-material/Forum';
import DescriptionIcon from '@mui/icons-material/Description';
import PortraitIcon from '@mui/icons-material/Portrait';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

export interface IItem {
  title: string;
  to: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: ReactElement<any, any>;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const Item: React.FC<IItem> = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: selected === title ? colors.primary[400] : colors.grey[500],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <NavLink to={to} />
    </MenuItem>
  );
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ISideBar {}

// eslint-disable-next-line no-empty-pattern
const SideBar: React.FC<ISideBar> = ({}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState<string>('Dashboard');
  return (
    <Box
      sx={{
        height: '100vh',
        '& .pro-sidebar-inner': {
          background: `${colors.primary[400]} !important`,
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent !important',
        },
        '& .pro-inner-item': {
          // TODO: it will be checking
          // padding: '5px 35px 5px 20px !important',
        },
        '& .pro-inner-item:hover': {
          color: '#868dfb !important',
        },
        '& .pro-menu-item.active': {
          color: '#6870fa !important',
        },
      }}
    >
      <ProSidebar
        defaultCollapsed={isCollapsed}
        backgroundColor={'rgba(0, 0, 0, 0)'}
        style={{ height: '100vh' }}
      >
        <Menu>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: '10px 0 10px 0',
              color: colors.grey[500],
            }}
          >
            {!isCollapsed && (
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box
                  sx={{
                    width: '20%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img src={altiumLogo} alt="Altium Logo" style={{ width: '100%' }} />
                </Box>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon style={{ color: colors.grey[600] }} />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          <div style={{ height: '1px', backgroundColor: 'rgba(0, 0, 0, 1)' }} />

          {/* TODO: add name, img ?? */}
          {/* {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{ cursor: 'pointer', borderRadius: '50%' }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: '10px 0 0 0' }}
                >
                  Ed Roh
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )} */}
          <Box>
            {!isCollapsed && (
              <Typography variant="h6" color={colors.grey[300]} sx={{ m: '15px 0 5px 20px' }}>
                SensorLogic
              </Typography>
            )}
            {/* TODO: refactoring icons (create data and map) */}
            <Item
              title="Get Started"
              to="/get_started"
              icon={<NotStartedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Projects"
              to="/projects"
              icon={<FolderCopyIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Components"
              to="/Components"
              icon={<SettingsInputComponentIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="MCAD CoDesigner"
              to="/designer"
              icon={<DesignServicesIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Admin"
              to="/admin"
              icon={<AdminPanelSettingsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Trash"
              to="/trash"
              icon={<DeleteForeverIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <div
              style={{
                height: '1px',
                backgroundColor: 'rgba(0, 0, 0, 1)',
                marginTop: '7px',
                marginBottom: '5px',
              }}
            />

            <Item
              title="Shared with me"
              to="/shared_with_me"
              icon={<ShareIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <div
              style={{
                height: '1px',
                backgroundColor: 'rgba(0, 0, 0, 1)',
                marginTop: '5px',
                marginBottom: '7px',
              }}
            />
            {!isCollapsed && (
              <Typography variant="h6" color={colors.grey[300]} sx={{ m: '15px 0 5px 20px' }}>
                Help and Resources
              </Typography>
            )}
            <Item
              title="Forum"
              to="/forum"
              icon={<ForumIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Documentation"
              to="/documentation"
              icon={<DescriptionIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {/*  */}
            <Item
              title="Free Training"
              to="/training"
              icon={<PortraitIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chat"
              to="/line_chat"
              icon={<ChatBubbleOutlineIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default SideBar;
