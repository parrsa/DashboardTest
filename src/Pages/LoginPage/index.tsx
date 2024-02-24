import React, { useEffect } from 'react';
import { Button, Grid } from '@mui/material';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import icons from '../../assets/images/Group 1.png'
import MInput from '../../components/Minput';
import axios from 'axios';
import MTButton from '../../components/Mbutton';
import * as yup from 'yup';
import { useFormik } from 'formik';
import colors from '../../assets/theme/base/colors';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
const formValidationSchema = yup.object({
    email: yup.string().required('عنوان الزامی است'),
    password: yup.string().required('پسورد الزامی است')
        .min(5, 'پسورد باید حداکثر 8 حرف باشد')
});

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function Login() {
    const [Cookiess, SetCookies] = useCookies(['TokenLogin'])
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    useEffect(() => {
        if (Cookiess.TokenLogin) {
            navigate('/mainpage')
        }
    }, [])

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: formValidationSchema,
        onSubmit: (values) => {
            const Login = async () => {
                const config = {
                    headers: {
                        'Content-type': 'application/json',
                    }
                }
                try {
                    const response = await axios.post('https://192.168.3.20:2624/User/login',
                        { phone: values.email, password: values.password },
                        config
                    )
                    if (response.status === 200) {
                        SetCookies("TokenLogin", response.data.token)
                        navigate('/mainpage')
                    }
                } catch (error: any) {
                    console.error(error.response)
                }
            }
            Login();
        },
    });
    return (
        <Grid container className='p' height={"100vh"} justifyContent={"center"} alignItems={"center"} >
            <Grid className='form' item container xs={11} md={3.2} borderRadius={2} height={"60%"}>
                <Grid item container justifyContent={"center"} alignItems={"center"}>
                    <img src={icons} alt='icons' width={70} height={70} />
                </Grid>
                <Grid item container md={12} justifyContent={"center"}>
                    <form onSubmit={formik.handleSubmit} >
                        <Grid item container justifyContent={"center"} alignItems={"center"}>
                            <MInput
                                popup
                                id="email"
                                name="email"
                                label="نام کاربری"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                            {/* <TextField label={"hello world"}/> */}
                        </Grid>
                        <Grid item container justifyContent={"center"} marginTop={{ xs: 2 }} alignItems={"center"}>
                            <MInput
                                popup
                                id="password"
                                name="password"
                                label="رمز عبور"
                                type="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                            />
                            {/* <TextField label={"hello world"}/> */}

                        </Grid>
                        <Grid item container justifyContent={"center"} alignItems={"center"} marginTop={2} >
                            <>
                                <MTButton color="primary" variant="contained" login type="submit">
                                    ورود
                                </MTButton>

                            </>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
            {open &&
                <>

                    <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} sx={{ float: "right" }}>
                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            This is a success message!
                        </Alert>
                    </Snackbar>
                </>
            }
        </Grid>
    )
}
export default Login



















