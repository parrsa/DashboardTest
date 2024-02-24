import * as React from 'react';
import { Grid, Button } from "@mui/material";
import colors from "../../../../assets/theme/base/colors";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import MSelectBox from '../../../../components/MselectBox';
import MInput from '../../../../components/Minput';
import MTButton from '../../../../components/Mbutton';
import * as yup from 'yup';
import { useFormik } from 'formik';


const formValidationSchema = yup.object({
    brand: yup.string().required('عنوان الزامی است'),
    model: yup.string().required('عنوان الزامی است'),
    typers: yup.string().required('عنوان الزامی است'),
    kabelrabet: yup.string().required('عنوان الزامی است'),
    serial: yup.string().required('عنوان الزامی است'),
});


function Baskolls() {
    const formik = useFormik({
        initialValues: {
            brand: '',
            model: '',
            typers: '',
            kabelrabet: '',
            serial: '',
        },
        validationSchema: formValidationSchema,
        onSubmit: (values) => {
            // console.log("values");
        },
    });
    return (
        <>
            <Grid container xs={12} justifyContent={"center"} textAlign={{ xs: "center" }}  >
                <Grid item container md={10} xs={12} marginTop={{ md: 5, xs: -10 }} >
                    <Grid item md={12} justifyContent={"center"}>
                        <form onSubmit={formik.handleSubmit} >
                            <Grid item container justifyContent={{ md: "space-between", xs: "center" }} md={12} height={{ md: "" }}>
                                <FormControl sx={{ m: 1, minWidth: 250 }}>
                                    {/* <MInput
                                        popup
                                        id="brand"
                                        name=" brand"
                                        value={formik.values.brand}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.brand && Boolean(formik.errors.brand)}
                                        helperText={formik.touched.brand && formik.errors.brand}
                                        sx={{ "& .MuiInputLabel-root": { marginLeft: "72%" } }} label={"مارک"}
                                    /> */}
                                    <MInput
                                        popup
                                        id="brand"
                                        name="brand"
                                        label="مارک"
                                        value={formik.values.brand}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        sx={{ "& .MuiInputLabel-root": { marginLeft: { md: "72%" } } }}
                                        error={formik.touched.brand && Boolean(formik.errors.brand)}
                                        helperText={formik.touched.brand && formik.errors.brand}
                                    />
                                </FormControl>
                                <FormControl sx={{ m: 1, minWidth: 250 }}>
                                    {/* <MInput
                                        popup sx={{ "& .MuiInputLabel-root": { marginLeft: "77%" } }} label={"مدل"}
                                    /> */}
                                    <MInput
                                        popup
                                        id="model"
                                        name="model"
                                        label="مدل"
                                        value={formik.values.model}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        sx={{ "& .MuiInputLabel-root": { marginLeft: { md: "77%" } } }}
                                        error={formik.touched.model && Boolean(formik.errors.model)}
                                        helperText={formik.touched.model && formik.errors.model}
                                    />
                                </FormControl>
                                <FormControl sx={{ m: 1, minWidth: 250 }}>
                                    <InputLabel sx={{ marginLeft: "62%", marginTop: "-5px", backgroundColor: colors.white.main, width: "65px", fontSize: "20px" }} id="demo-controlled-open-select-label">rs232</InputLabel>
                                    <MSelectBox
                                        form
                                        // open={opens}
                                        // onClose={handleClose}
                                        // onOpen={handleOpen}
                                        // value={age}
                                        id="typers"
                                        name="typers"
                                        value={formik.values.typers}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.typers && Boolean(formik.errors.typers)}
                                        helperText={formik.touched.typers && formik.errors.typers}
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
                            </Grid>
                            <Grid item container md={10} >
                                <Grid md={8.9} item container justifyContent={{ md: "space-between", xs: "center" }} >
                                    <FormControl sx={{ m: 1, minWidth: 250 }}>
                                        {/* <MInput
                                            popup sx={{ "& .MuiInputLabel-root": { marginLeft: "65%" } }} label={"کابل رابط"}
                                        /> */}

                                        <MInput
                                            popup
                                            id="kabelrabet"
                                            name="kabelrabet"
                                            label="کابل رابط"
                                            value={formik.values.kabelrabet}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            sx={{ "& .MuiInputLabel-root": { marginLeft: { md: "65%" } } }}
                                            error={formik.touched.kabelrabet && Boolean(formik.errors.kabelrabet)}
                                            helperText={formik.touched.kabelrabet && formik.errors.kabelrabet}
                                        />
                                    </FormControl>
                                    <FormControl sx={{ m: 1, minWidth: 250, }}>
                                        <InputLabel 
                                        sx={{ marginLeft: "68%", marginTop: "-5px", backgroundColor: colors.white.main, width: "65px", fontSize: "20px" }} 
                                        id="demo-controlled-open-select-label">سریال</InputLabel>
                                        <MSelectBox
                                            form
                                            // open={opens}
                                            // onClose={handleClose}
                                            // onOpen={handleOpen}
                                            // value={age}
                                            id="serial"
                                            name="serial"
                                            value={formik.values.serial}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.serial && Boolean(formik.errors.serial)}
                                            helperText={formik.touched.serial && formik.errors.serial}
                                        // onChange={handleChange}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Tens</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </MSelectBox>
                                    </FormControl>
                                </Grid>

                            </Grid>
                            <Grid item container justifyContent={"center"} md={12}>
                                <MTButton submit type="submit" >ثبت</MTButton>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
export default Baskolls