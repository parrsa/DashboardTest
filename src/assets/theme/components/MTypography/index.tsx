import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";
const Typography: {
    defaultProps?: ComponentsProps['MuiTypography'];
    styleOverrides?: ComponentsOverrides<Theme>['MuiTypography'];
    variants?: ComponentsVariants['MuiTypography'];
} = {
    defaultProps: {
    },
    styleOverrides: {
        root: {
            fontFamily: "yekan",
            color: "black",
            fontSize: "16px"
        },
        body1: {
            fontWeight: 700,
            lineHeight: 1.5,
        },
        body2: {
            fontWeight: 900,
            lineHeight: 1.68,
        },
        caption: {
            fontSize: '0.95rem',
            fontWeight: 800,
            lineHeight: 8
        },
        subtitle1: {
            fontSize: '20px',
            fontWeight: 500,
            lineHeight: 1.65
        },
        subtitle2: {
            fontSize: '1rem',
            fontWeight: 500,
            lineHeight: 2.1,
            color: "#fff"
        },
        overline: {
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.5px',
            lineHeight: 2.5,
            textTransform: 'uppercase'
        },
        h1: {
            fontWeight: 700,
            fontSize: '3.5rem',
            lineHeight: 1.2
        },
        h2: {
            fontWeight: 700,
            fontSize: '3rem',
            lineHeight: 1
        },
        h3: {
            fontWeight: 700,
            fontSize: '2.25rem',
            lineHeight: 1.2
        },
        h4: {
            fontWeight: 900,
            fontSize: '2rem',
            lineHeight: 1.2
        },
        h5: {
            fontWeight: 700,
            fontSize: '1.5rem',
            lineHeight: 1.2
        },
        h6: {
            fontWeight: 700,
            fontSize: '1.125rem',
            lineHeight: 1.2
        }
    }
}
export default Typography