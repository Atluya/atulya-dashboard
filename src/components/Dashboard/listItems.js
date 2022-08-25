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
    <ListItemButton>
      <Link to={"/"}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText style={{textDecoration: 'none', color: 'black'}} primary="Dashboard" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <Link to={"/admin/colleges"}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText style={{textDecoration: 'none', color: 'black'}} primary="Colleges" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <Link to={"/admin/users"}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText style={{textDecoration: 'none', color: 'black'}} primary="Users" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <Link to={"/admin/superadmins"}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText style={{textDecoration: 'none', color: 'black'}} primary="Super Admins" />
      </Link>
    </ListItemButton>
    <ListItemButton>
      <Link to={"/admin/news"}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText style={{textDecoration: 'none', color: 'black'}} primary="News" />
      </Link>
    </ListItemButton>
    
  </React.Fragment>
);