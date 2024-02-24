import { createTheme } from "@mui/material";
import colors from "./base/colors";
import Typogr from './components/MTypography/index'
import Link from "./components/Link";
const theme = createTheme({
    direction: "rtl",
    palette: { ...colors },
    components: {
        MuiTypography: { ...Typogr },
        MuiLink: { ...Link },
    }
})
export default theme