import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <React.Fragment>
    {/* <ListItemButton>
      <Link to={"/"}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText style={{textDecoration: 'none', color: 'black'}} primary="Dashboard" />
      </Link>
    </ListItemButton> */}
    <Link to={"/admin/colleges"}>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText style={{textDecoration: 'none', color: 'black'}} primary="Colleges" />
      </ListItemButton>
    </Link>
    <Link to={"/admin/users"}>
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText style={{textDecoration: 'none', color: 'black'}} primary="Users" />
      </ListItemButton>
    </Link>
    <Link to={"/admin/superadmins"}>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText style={{textDecoration: 'none', color: 'black'}} primary="Super Admins" />
    </ListItemButton>
    </Link>
    <Link to={"/admin/news"}>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText style={{textDecoration: 'none', color: 'black'}} primary="News" />
    </ListItemButton>
    </Link>
    <Link to={"/admin/disputes"}>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText style={{textDecoration: 'none', color: 'black'}} primary="Disputes" />
    </ListItemButton>
    </Link>
  </React.Fragment>
);