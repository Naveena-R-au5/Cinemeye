import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import style from './nav.module.css'
import logo from '../../logo.png'
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 2,
    backgroundColor:'#071538'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '50%',
      borderRadius:10
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent:'space-between',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
       <MenuItem>
        <Link to='/' style={{color:'black',textDecoration:'none'}}><p>Home</p></Link>
      </MenuItem>
      <MenuItem>
        <p>Main page</p>
      </MenuItem>
      <MenuItem>
        <p>TV channel</p>
      </MenuItem>
      <MenuItem>
        <p>Movies</p>
      </MenuItem>
      <MenuItem>
        <p>Tv series</p>
      </MenuItem>
      <MenuItem>
        <p>concerts</p>
      </MenuItem>
      <MenuItem>
        <p>sports</p>
      </MenuItem>
      <MenuItem>
        <p>For kids</p>
      </MenuItem>
      <MenuItem>
        <p>Favourites</p>
      </MenuItem>
      <MenuItem>
        <p>Personal data</p>
      </MenuItem>
      <MenuItem>
        <p>Login</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <p>Try now</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
      <div className={style.last}>
            <div><p>Also find us in</p></div>
           <div className={style.social}>
           &nbsp;&nbsp;&nbsp;&nbsp; <i class="fa fa-apple" aria-hidden="true"></i>&nbsp;&nbsp;
          <i class="fa fa-facebook" aria-hidden="true"></i>
          </div> 
      </div>
      </MenuItem>
     
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" style={{backgroundColor:'#071538',boxShadow:'none'}}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
          <Link style={{color:'white',textDecoration:'none'}} to='/'><h1 className={style.heading}><img src={logo} alt='img' className={style.img}/>&nbsp;&nbsp;Cinemeye</h1></Link>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
         
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <button className={style.b1}><i className="fa fa-globe" style={{color:'rgb(150, 147, 147)'}} aria-hidden="true"></i>&nbsp;&nbsp;EN</button>
              <button className={style.b2}>Login</button>
              <button className={style.b3}>Try now</button>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
