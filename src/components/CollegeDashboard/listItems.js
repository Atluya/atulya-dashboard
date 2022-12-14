import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <React.Fragment>
  <Link style={{textDecoration: 'none', color: 'black'}} to={"/college"}>
    <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="General Info" />
      
    </ListItemButton>
  </Link>
  <Link style={{textDecoration: 'none', color: 'black'}} to={"/college/tour"}>
    <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Tour" />
      
    </ListItemButton>
  </Link>
  <Link style={{textDecoration: 'none', color: 'black'}} to={"/college/gallery"}>
    <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Gallery" />
      
    </ListItemButton>
  </Link>
  <Link style={{textDecoration: 'none', color: 'black'}} to={"/college/location"}>
    <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Location" />
      
    </ListItemButton>
  </Link>
  <Link style={{textDecoration: 'none', color: 'black'}} to={"/college/social-media"}>
    <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Social Media" />
      
    </ListItemButton>
  </Link>
  <Link style={{textDecoration: 'none', color: 'black'}} to={"/college/admission-process"}>
    <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Admission Process" />
      
    </ListItemButton>
  </Link>
  <Link style={{textDecoration: 'none', color: 'black'}} to={"/college/documents"}>
    <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Documents" />
      
    </ListItemButton>
  </Link>
  <Link style={{textDecoration: 'none', color: 'black'}} to={"/college/clubs"}>
    <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Clubs" />
      
    </ListItemButton>
  </Link>
  {/* <Link style={{textDecoration: 'none', color: 'black'}} to={"/college/courses"}>
    <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Courses" />
      
    </ListItemButton>
  </Link> */}
  <Link style={{textDecoration: 'none', color: 'black'}} to={"/college/alumni"}>
    <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Alumni" />
    </ListItemButton>
  </Link>
  <Link style={{textDecoration: 'none', color: 'black'}} to={"/college/placements"}>
    <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Placements" />
    </ListItemButton>
  </Link>
  <Link style={{textDecoration: 'none', color: 'black'}} to={"/college/placement-stats"}>
    <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Placement Stats" />
    </ListItemButton>
  </Link>
  <Link style={{textDecoration: 'none', color: 'black'}} to={"/college/dispute"}>
    <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dispute" />
    </ListItemButton>
  </Link>
  <Link style={{textDecoration: 'none', color: 'black'}} to={"/college/facilities"}>
    <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Facilities" />
    </ListItemButton>
  </Link>
  <Link style={{textDecoration: 'none', color: 'black'}} to={"/college/extra-curricular"}>
    <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Extra Curricular" />
    </ListItemButton>
  </Link>
  <Link style={{textDecoration: 'none', color: 'black'}} to={"/college/scholarships"}>
    <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Scholarships" />
    </ListItemButton>
  </Link>
  <Link style={{textDecoration: 'none', color: 'black'}} to={"/college/important-links"}>
    <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Important Links" />
    </ListItemButton>
  </Link>
  <Link style={{textDecoration: 'none', color: 'black'}} to={"/college/contact"}>
    <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Contact Details" />
    </ListItemButton>
  </Link>
  <Link style={{textDecoration: 'none', color: 'black'}} to={"/college/hostels"}>
    <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Hostel" />
    </ListItemButton>
  </Link>
  {/* <Link style={{textDecoration: 'none', color: 'black'}} to={"/college/ads"}>
    <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Ads Analytics" />
    </ListItemButton>
  </Link> */}
  <Link style={{textDecoration: 'none', color: 'black'}} to={"/college/review"}>
    <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Review" />
    </ListItemButton>
  </Link>
  <Link style={{textDecoration: 'none', color: 'black'}} to={"/college/file-upload"}>
    <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="File Upload" />
    </ListItemButton>
  </Link>
  <Link style={{textDecoration: 'none', color: 'black'}} to={"/college/updates"}>
    <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Updates" />
    </ListItemButton>
  </Link>
  </React.Fragment>
);