import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import BirkarImage from '../../../../../assets/images/birkar.png'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {navList} from './navList';
import colors from '../../../../../assets/theme/base/colors';
import {useLocation, useNavigate} from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import Cookies from 'js-cookie';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import {Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 200;

const urlSplit = (path: string): string => {
    const splitUrl = path.split("/");
    const newText = splitUrl[1];
    return newText;
};

function Navbars() {
    const [open, setOpen] = React.useState(false);
    const {pathname} = useLocation();
    const Cook = Cookies.get('TokenLogin')
    const navigate = useNavigate()
    React.useEffect(() => {
        if (Cook === undefined) {
            // navigate('/')
        }
    }, [Cook])
    return (
        <>
            <AppBar position="fixed"
                    sx={{backgroundColor: colors.hardware.header, zIndex: (theme) => theme.zIndex.drawer + 1}}>
                <Toolbar sx={{justifyContent: "space-between", alignItems: "center", display: {md: "flex"}}}>
                    <Button sx={{display: {xs: "flex", lg: "none"}, backgroundColor: "black"}}
                            onClick={() => setOpen(!open)}><MenuIcon color="action"/></Button>
                    <Box sx={{flexGrow: 0}}>
                        <IconButton sx={{p: 0}}>
                            <PersonIcon/>
                            <Typography variant='body1' color={colors.white.main}>ادمین</Typography>
                        </IconButton>
                    </Box>
                    <img src={BirkarImage} height={65} width={80} alt='images'
                         style={{marginTop: "10px", cursor: "pointer"}}/>
                </Toolbar>
            </AppBar>

            <Drawer
                sx={{
                    width: {lg: drawerWidth, md: "auto", xs: "auto"},
                    flexShrink: 0,
                    backgroundColor: "#FDB833",
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        background: "#FDB833",
                        transition: "linear all .5s",
                        "@media(max-width:1200px)": {
                            transition: "linear all .5s",
                            transform: `${!open && "translateX(180%)"}`
                        },
                    },
                }}
                variant="permanent"
                anchor="right"
            >

                <List onClick={() => setOpen(false)} sx={{marginTop: 10}}>
                    {navList.map((item, index) => (
                        <ListItem onClick={() => {
                            if (item.id === 2) {
                                Cookies.remove('TokenLogin');
                            }
                            navigate(item.path)
                        }} key={item.id} disablePadding
                                  sx={{background: ` ${urlSplit(pathname) === urlSplit(item.path) && "white"}`}}>
                            <ListItemButton>
                                <ListItemText primary={item.title}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    )
}

export default Navbars