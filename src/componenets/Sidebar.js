import * as React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Button, Divider, ListItemButton, Toolbar, AppBar, CssBaseline, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';


const drawerWidth = 180;

function Sidebar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ padding: '20px', height: '100%' }}>
      <Toolbar />
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ marginBottom: 3, fontWeight: 700, textAlign: 'center' }}
      >
        <Button variant="outlined">r0guelike</Button>
      </Typography>
      <Divider />
      {/* Main Sections */}
      <List>
        {[ 'About', 'Projects', 'CV', 'Web Development', 'Data Science'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                textAlign: 'left',
                paddingY: 1.5,
                paddingLeft: 0,
                color: '#000',
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: '#1976d2',
                  fontWeight: 'bold',
                },
              }}
            >
              <ListItemText
                primary={text}
                sx={{
                  textTransform: 'uppercase',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ marginY: 2 }} />
      {/* Contact Section */}
      <Box sx={{ marginTop: 'auto', textAlign: 'left' }}>
        <Typography variant="body1" sx={{ fontWeight: 700, marginBottom: 1 }}>
          Contact Me
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'right',
            gap: 2,
            marginTop: 2,
            marginRight: 2,
          }}
        >
          <Typography
            component="a"
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: '#000',
              '&:hover': { color: '#1976d2' },
            }}
          > Instagram
          </Typography>

          <Typography
            component="a"
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: '#000',
              '&:hover': { color: '#1976d2' },
            }}
          >LinkedIn
          </Typography>

          <Typography
            component="a"
            href="mailto:your.email@example.com"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: '#000',
              '&:hover': { color: '#1976d2' },
            }}
          > Email
          </Typography>

          <Typography
            component="a"
            href="/resume.pdf" // Link to your CV
            target="_blank"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: '#000',
              '&:hover': { color: '#1976d2' },
            }}
          >Download CV
          </Typography>
        </Box>
        <Divider sx={{ marginY: 2 }} />
        <Typography variant="caption" sx={{ color: '#757575', marginTop: 3 }}>

          Made with 💻 in Nepal
        </Typography>
      </Box>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: 'white',
          boxShadow: 'none',
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: 'black' }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ color: 'black' }}>
            Namaste !!
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            backgroundColor: 'white',
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography sx={{ marginBottom: 2 }}>
          Hi, I'm Rajan Swornakar Sunar, also known as roguelike.
          I'm a skilled web developer and data engineer based in kathmandu, Nepal with professional experience in full stack web development and technical writing.
          Whether it's wrangling data with Python or diving deep into machine learning, I thrive on tackling challenges that others might shy away from.
          Buidling upon my abilities in Programming, machine learning, and stastical analaysis to tackle data science challenges. 
          I'm passionate about crafting innovative solutions that combine technical expertise with a strong understanding of user needs.
        </Typography>
      </Box>
    </Box>
  );
}

Sidebar.propTypes = {
  window: PropTypes.func,
};

export default Sidebar;
