import { PageLayoutProps } from "../../../Types/index";
import { Box, Toolbar} from "@mui/material"
import Navbars from "./component/Navbar";
import CssBaseline from "@mui/material/CssBaseline";
const MainLayout: React.FC<PageLayoutProps> = ({ children }: PageLayoutProps) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Navbars/>
            <Box component="main" sx={{ flexGrow: 1}}>
                <Toolbar />
                {children}
            </Box>
        </Box>
    )
}
export default MainLayout


// import React, { useState } from 'react';
// import { useLocation, useNavigate } from "react-router-dom";
// import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
// import AddIcon from '@mui/icons-material/Add';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import { Toolbar } from "@mui/material";
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import { navList } from './component/Navbar/navList';

// const drawerWidth = 240;

// const urlSplit = (path: string): string => {
//     const splitUrl = path.split("/");
//     const newText = splitUrl[1];
//     return newText;
// };

// interface PageLayoutProps {
//     children: React.ReactNode;
// }

// interface ILists {
//     text: string;
//     path: string;
//     name: string;
//     icon: React.ReactNode;
//     id: number;
// };

// const lists: ILists[] = [
//     {
//         text: "ثبت بازدید ها",
//         path: "/mainpage",
//         name: "inspection",
//         icon: <AddIcon />,
//         id: 1
//     },
//     {
//         text: "داشبورد",
//         path: "/aboute",
//         name: "dashboard",
//         icon: <DashboardIcon />,
//         id: 2
//     },
//     {
//         text: "خروج",
//         path: "/",
//         name: "login",
//         icon: <ExitToAppIcon />,
//         id: 3
//     },
// ]

// function MainLayout({ children }: PageLayoutProps) {
//     const [open, setOpen] = useState(false);
//     const { pathname } = useLocation();
//     const navigate = useNavigate();

//     return (
//         <>
//             <Box>
//                 <Box padding={{ lg: `0 ${drawerWidth} px 0 0`, xs: "0rem" }}>
//                     <Box
//                         onClick={() => setOpen(!open)}
//                         sx={{
//                             display: "none",
//                             "@media(max-width:1200px)": {
//                                 display: "block",
//                                 padding: "1rem 2rem",
//                             }
//                         }}
//                     >
//                         {
//                             open ? <CloseIcon /> : <MenuIcon />
//                         }
//                     </Box>
//                     {
//                         urlSplit(pathname) !== "dashboard" &&
//                         <Toolbar sx={{ "@media(max-width:1000px)": { display: "none" } }} />
//                     }
//                     {children}
//                 </Box>
//                 <Drawer
//                     sx={{
//                         width: drawerWidth,
//                         flexShrink: 0,
//                         '& .MuiDrawer-paper': {
//                             width: drawerWidth,
//                             boxSizing: 'border-box',
//                             background: "#90E0EF",
//                             transition: "linear all .5s",
//                             "@media(max-width:1200px)": {
//                                 transition: "linear all .5s",
//                                 transform: `${!open && "translateX(180%)"}`
//                             }
//                         },
//                     }}
//                     variant="permanent"
//                     anchor="right"
//                 >
//                     <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} padding={"1rem 0"} borderBottom={"1px solid grey"}>
//                         <AccountCircleIcon fontSize={"large"} />
//                         <Typography>username</Typography>
//                     </Box>
//                     <List onClick={() => setOpen(false)}>
//                         {lists.map((item, index) => (
//                             <ListItem  key={item.id} disablePadding sx={{ background: ` ${urlSplit(pathname) === urlSplit(item.path) && "white"}` }}>
//                                 <ListItemButton>
//                                     <ListItemText primary={item.text} />
                                   
//                                 </ListItemButton>
//                             </ListItem>
//                         ))}
//                     </List >
//                 </Drawer >
//             </Box >
//         </>

//     );
// };

// export default MainLayout;