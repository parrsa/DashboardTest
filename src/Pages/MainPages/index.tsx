import * as React from 'react';
import MainLatout from '../../components/layouts/mainLayout/index'
import { Grid } from "@mui/material";
import colors from "../../assets/theme/base/colors";
import MInput from '../../components/Minput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import MSelectBox from '../../components/MselectBox';
import Computers from './component/Computer';
import Baskolls from './component/Baskoll';
import { Typography, Button, } from "@mui/material";
import images from '../../assets/images/tokyo-selecting-a-value-in-the-browser-window.png'
const MainPages: React.FC = () => {
    const [values, setValues] = React.useState(0);
    return (
        <MainLatout>
            <Grid container zIndex={10} item width={"100%"} height={{ md: "", xs: "100vh" }} md={13}  >
                <Grid container xs={12} marginTop={2} height={{ md: "15vh" }} justifyContent={"center"} textAlign={{ xs: "center" }} alignItems={"center"} >
                    {/* فیلتر */}
                    <Grid item container md={(values === 1) ? 10 : 8} justifyContent={{md:"space-between" , xs:"center"}} >
                        <FormControl sx={{ m: 1, minWidth: 250 }}>
                            <InputLabel sx={{ marginLeft: "65%", marginTop: "-5px", backgroundColor: colors.white.main, width: "65px", fontSize: "20px" }} id="demo-controlled-open-select-label">سیستم</InputLabel>
                            <MSelectBox
                                form
                                // open={open}
                                // onClose={handleClose}
                                // onOpen={handleOpen}
                                // value={age}
                                label="Age"
                            // onChange={handleChange}
                            >
                                <MenuItem onClick={() => setValues(0)}>
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem onClick={() => setValues(2)} value={20}>باسکول</MenuItem>
                                <MenuItem onClick={() => setValues(1)} value={10}>کامپیوتر</MenuItem>
                            </MSelectBox>
                        </FormControl>
                        {values === 1 &&
                            <FormControl sx={{ m: 1, minWidth: 250 }}>
                                <InputLabel sx={{ marginLeft: "65%", marginTop: "-5px", backgroundColor: colors.white.main, width: "65px", fontSize: "20px" }} id="demo-controlled-open-select-label">نوع</InputLabel>
                                <MSelectBox
                                    form
                                    // open={opens}
                                    // onClose={handleClose}
                                    // onOpen={handleOpen}
                                    // value={age}
                                    label="Age"
                                // onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </MSelectBox>
                            </FormControl>
                        }

                        <FormControl sx={{ m: 1, minWidth: 250 }}>
                            <MInput label={"کارخانه"} sx={{ "& .MuiInputLabel-root": { marginLeft:{md:"65%" , xs:"68%"} } }} widht={{xs:"1rem"}} popup height={"30rem"} />
                        </FormControl>
                    </Grid>
                </Grid>
                <hr style={{ position: "relative", width: "100%", height: 1 }} />
                <Grid item container xs={12} height={{ md: "70vh" }} display={{ md: "flex", xs: "flex" }} textAlign={{ xs: "center", md: "center" }}>
                    {values === 0 &&
                        <Grid container xs={12} height={"72.2vh"} textAlign={{ xs: "center" }}  >
                            <Grid item container md={12} justifyContent={"center"} >
                                <img src={images} alt='images' />
                            </Grid>
                            <Grid item container md={12} justifyContent={"center"} >
                                <Typography variant='h4'>سیستم خود را مشخص کنید !</Typography>
                            </Grid>
                        </Grid>
                    }
                    {/* کامپیوتر */}
                    {
                        values === 1 && <Computers />
                    }
                    {/* باسکول */}
                    {values === 2 && <Baskolls />}
                </Grid>

            </Grid>
        </MainLatout>
    );
};

export default MainPages;