import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

const Link: {
    defaultProps?: ComponentsProps['MuiLink'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiLink'];
    variants?: ComponentsVariants['MuiLink'];
} = {
    defaultProps: {
        underline: "none",
        color: "black",
        fontSize: "16px",
    },
    styleOverrides: {
        root: {

        }
    }
}
export default Link