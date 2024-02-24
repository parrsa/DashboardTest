import * as React from 'react';
import { Grid, Typography, Button, } from "@mui/material";
import colors from "../../../../assets/theme/base/colors";
import MInput from '../../../../components/Minput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import MSelectBox from '../../../../components/MselectBox';
import MTButton from '../../../../components/Mbutton';
import * as yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';

const formValidationSchema = yup.object({
    section: yup.string().required('عنوان الزامی است'),
    description: yup.string().required('عنوان الزامی است'),
    proPertyLabel: yup.string().required('عنوان الزامی است'),
    location: yup.string().required('عنوان الزامی است'),
    cpu: yup.string().required('عنوان الزامی است'),
    port: yup.string().required('عنوان الزامی است'),
    windows: yup.string().required('عنوان الزامی است'),
    ram: yup.string().required('عنوان الزامی است'),
    gpu: yup.string().required('عنوان الزامی است'),
    maderBoard: yup.string().required('عنوان الزامی است'),
    mb: yup.string().required('عنوان الزامی است'),
    hdd: yup.string().required('عنوان الزامی است'),
});

function Computers() {
    const formik = useFormik({
        initialValues: {
            section: '',
            description: '',
            proPertyLabel: '',
            location: '',
            cpu: '',
            port: '',
            windows: '',
            ram: '',
            gpu: '',
            maderBoard: '',
            mb: '',
            hdd: ''
        },
        validationSchema: formValidationSchema,
        onSubmit: (values) => {
            console.log("p")
        },
    });
    return (
        <>
            <Grid container xs={12} justifyContent={"center"} textAlign={{ xs: "center" }}  >
                <Grid item container md={12} marginTop={2} height={"100vh"} >
                    <Grid item container md={12} justifyContent={"center"}>
                        <form onSubmit={formik.handleSubmit}>
                            {/* <MInput
                        popup
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    /> */}
                            <Grid item container justifyContent={"space-evenly"} md={12}>
                                <FormControl sx={{ m: 1, minWidth: 250 }}>
                                    <InputLabel sx={{ marginLeft: { md: "68%", xs: "65%" }, marginTop: "-5px", backgroundColor: colors.white.main, width: "65px", fontSize: "20px" }} id="demo-controlled-open-select-label">قسمت</InputLabel>
                                    <MSelectBox
                                        form
                                        // open={opens}
                                        // onClose={handleClose}
                                        // onOpen={handleOpen}
                                        // value={age}
                                        id="section"
                                        name="section"
                                        value={formik.values.section}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.section && Boolean(formik.errors.section)}
                                        helperText={formik.touched.section && formik.errors.section}
                                        height={"30rem"}
                                    // onChange={handleChange}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Teasdasdn</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </MSelectBox>
                                </FormControl>
                                <FormControl sx={{ m: 1, minWidth: 250 }}>
                                    {/* <MInput popup sx={{ "& .MuiInputLabel-root": { marginLeft: { md: "50%", xs: "45%" } } }} label={"توضیحات سیستم"} /> */}
                                    <MInput
                                        popup
                                        id="description"
                                        name="description"
                                        label={"توضیحات سیستم"}
                                        value={formik.values.description}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        sx={{ "& .MuiInputLabel-root": { marginLeft: { md: "50%", xs: "45%" } } }}
                                        error={formik.touched.description && Boolean(formik.errors.description)}
                                        helperText={formik.touched.description && formik.errors.description}
                                        height={"30rem"}
                                    />
                                </FormControl>
                            </Grid>


                            <Grid item container justifyContent={"space-evenly"} md={12} marginTop={{ lg: 5 }}  >
                                <FormControl sx={{ m: 1, minWidth: 250 }}>
                                    {/* <MInput popup sx={{ "& .MuiInputLabel-root": { marginLeft: { md: "55%", xs: "52%" } } }} label={"برچسب اموال"} /> */}
                                    <MInput
                                        popup
                                        id="proPertyLabel"
                                        name="proPertyLabel"
                                        label={"برچسپ اموال"}
                                        value={formik.values.proPertyLabel}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        sx={{ "& .MuiInputLabel-root": { marginLeft: { md: "55%", xs: "52%" } } }}
                                        error={formik.touched.proPertyLabel && Boolean(formik.errors.proPertyLabel)}
                                        helperText={formik.touched.proPertyLabel && formik.errors.proPertyLabel}
                                        height={"30rem"}
                                    />
                                </FormControl>
                                <FormControl sx={{ m: 1, minWidth: 250 }}>
                                    {/* <MInput popup sx={{ "& .MuiInputLabel-root": { marginLeft: { md: "58%", xs: "52%" } } }} label={"محل استقرار"} /> */}
                                    <MInput
                                        popup
                                        id="location"
                                        name="location"
                                        label={"محل استقرار"}
                                        value={formik.values.location}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        sx={{ "& .MuiInputLabel-root": { marginLeft: { md: "58%", xs: "52%" } } }}
                                        error={formik.touched.location && Boolean(formik.errors.location)}
                                        helperText={formik.touched.location && formik.errors.location}
                                        height={"30rem"}
                                    />

                                </FormControl>
                                <hr style={{ position: "relative", width: "100%", height: 1, marginTop: "8px" }} />
                            </Grid>

                            <Grid item container justifyContent={"center"} >
                                <Grid item container md={10} justifyContent={"center"} height={"5vh"} >
                                    <Typography variant='body2'>مشخصات سیستم</Typography>
                                </Grid>
                                <Grid item container md={10} xs={8} justifyContent={{ md: "space-between", xs: "centre" }} alignItems={"center"} >
                                    <FormControl sx={{ m: 1, minWidth: 250 }}>
                                        {/* <MInput popup sx={{ "& .MuiInputLabel-root": { marginLeft: { md: "68%" } } }} label={"پردازش"} /> */}
                                        <MInput
                                            popup
                                            id="cpu"
                                            name="cpu"
                                            label={"پردازش"}
                                            value={formik.values.cpu}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            sx={{ "& .MuiInputLabel-root": { marginLeft: { md: "68%" } } }}
                                            error={formik.touched.cpu && Boolean(formik.errors.cpu)}
                                            helperText={formik.touched.cpu && formik.errors.cpu}
                                            height={"30rem"}
                                        />
                                    </FormControl>

                                    <FormControl sx={{ m: 1, minWidth: 250 }}>
                                        <InputLabel sx={{ marginLeft: { md: "68%" }, marginTop: "-5px", backgroundColor: colors.white.main, width: "65px", fontSize: "20px" }} id="demo-controlled-open-select-label">پورت</InputLabel>
                                        <MSelectBox
                                            form
                                            // open={opens}
                                            // onClose={handleClose}
                                            // onOpen={handleOpen}
                                            // value={age}
                                            id="port"
                                            name="port"
                                            value={formik.values.port}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.port && Boolean(formik.errors.port)}
                                            helperText={formik.touched.port && formik.errors.port}
                                            height={"30rem"}
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

                                    <FormControl sx={{ m: 1, minWidth: 250 }}>
                                        {/* <MInput popup sx={{ "& .MuiInputLabel-root": { marginLeft: { md: "70%" } } }} label={"ویندوز"} height={"30rem"} /> */}
                                        <MInput
                                            popup
                                            id="windows"
                                            name="windows"
                                            label={"ویندوز"}
                                            value={formik.values.windows}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            sx={{ "& .MuiInputLabel-root": { marginLeft: { md: "70%" } } }}
                                            error={formik.touched.windows && Boolean(formik.errors.windows)}
                                            height={"30rem"}
                                            helperText={formik.touched.windows && formik.errors.windows}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item container md={10} xs={8} justifyContent={{ md: "space-between", xs: "centre" }} alignItems={"center"}>
                                    <FormControl sx={{ m: 1, minWidth: 250 }}>
                                        {/* <MInput popup sx={{ "& .MuiInputLabel-root": { marginLeft: { md: "79%" } } }} label={"رم"} /> */}
                                        <MInput
                                            popup
                                            id="ram"
                                            name="ram"
                                            label={"رم"}
                                            value={formik.values.ram}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            sx={{ "& .MuiInputLabel-root": { marginLeft: { md: "70%" } } }}
                                            error={formik.touched.ram && Boolean(formik.errors.ram)}
                                            helperText={formik.touched.ram && formik.errors.ram}
                                            height={"30rem"}
                                        />

                                    </FormControl>

                                    <FormControl sx={{ m: 1, minWidth: 250 }}>
                                        <InputLabel sx={{ marginLeft: { md: "65%" }, marginTop: "-5px", backgroundColor: colors.white.main, width: "65px", fontSize: "20px" }} id="demo-controlled-open-select-label">گرافیک</InputLabel>
                                        <MSelectBox
                                            form
                                            // open={opens}
                                            // onClose={handleClose}
                                            // onOpen={handleOpen}
                                            // value={age}
                                            id="gpu"
                                            name="gpu"
                                            value={formik.values.gpu}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.gpu && Boolean(formik.errors.gpu)}
                                            helperText={formik.touched.gpu && formik.errors.gpu} height={"30rem"}
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

                                    <FormControl sx={{ m: 1, minWidth: 250 }}>
                                        {/* <MInput label={"Mb"} sx={{ "& .MuiInputLabel-root": { marginLeft: { md: "75%" } } }} popup height={"30rem"} /> */}
                                        <MInput
                                            popup
                                            id="maderBoard"
                                            name="maderBoard"
                                            label={"Mb"}
                                            value={formik.values.maderBoard}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            sx={{ "& .MuiInputLabel-root": { marginLeft: { md: "75%" } } }}
                                            error={formik.touched.maderBoard && Boolean(formik.errors.maderBoard)}
                                            helperText={formik.touched.maderBoard && formik.errors.maderBoard} height={"30rem"}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item container md={10} xs={8} justifyContent={{ md: "", xs: "centre" }} alignItems={"center"}>
                                    <FormControl sx={{ m: 1, minWidth: 250 }}>
                                        {/* <MInput label={"Mb"} sx={{ "& .MuiInputLabel-root": { marginLeft: { md: "76%" } } }} popup height={"30rem"} /> */}
                                        <MInput
                                            popup
                                            id="mb"
                                            name="mb"
                                            label={"Mb"}
                                            value={formik.values.mb}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            sx={{ "& .MuiInputLabel-root": { marginLeft: { md: "76%" } } }}
                                            error={formik.touched.mb && Boolean(formik.errors.mb)}
                                            helperText={formik.touched.mb && formik.errors.mb} height={"30rem"}
                                        />
                                    </FormControl>

                                    <FormControl sx={{ m: 1, minWidth: 250, marginRight: { md: 20.2 } }}>
                                        {/* <MInput label={"Hdd"} sx={{ "& .MuiInputLabel-root": { marginLeft: { md: "72%" } } }} popup height={"30rem"} /> */}
                                        <MInput
                                            popup
                                            id="hdd"
                                            name="hdd"
                                            label={"hdd"}
                                            value={formik.values.hdd}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            sx={{ "& .MuiInputLabel-root": { marginLeft: { md: "72%" } } }}
                                            error={formik.touched.hdd && Boolean(formik.errors.hdd)}
                                            helperText={formik.touched.hdd && formik.errors.hdd} height={"30rem"}
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>

                            <Grid item container justifyContent={"center"} marginTop={{ md: 5 }} md={12}>
                                <MTButton submit type="submit">ثبت اطلاعات</MTButton>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
export default Computers
