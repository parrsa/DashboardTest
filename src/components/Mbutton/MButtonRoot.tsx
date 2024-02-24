import { styled } from "@mui/material/styles";
import { Button, SxProps, Theme, useTheme } from "@mui/material";
import colors from "../../assets/theme/base/colors";

interface owner {
    width?: string
    color?: string
    variant?: string
    size?: string
    circular?: boolean
    iconOnly?: boolean
    border?: string
    borderRadius?: string
    bgColor?: string
    positon?: string
    login?: boolean
    submit?: boolean
    common?: boolean
    darkMode?: boolean
    fullWidth?: boolean
    sx?: SxProps
}

interface styledProps {
    theme?: Theme
    ownerState: owner
}

export default styled(Button)(({ ownerState }: any) => {
    const theme = useTheme<Theme>()
    const {
        fullWidth,
        login,
        positon,
        borderRadius,
        iconOnly,
        variant,
        circular,
        submit,
        color,
        size,
        darkMode,
        bgColor,
        common,
        width
    } = ownerState
    let { palette, functions, boxShadow } = theme as any;

    function loginStyle() {
        return (
            {
                borderRadius: '.7rem',
                backgroundColor: "#FDB833 !important",
                color: "black",
                fontWeight: "bold",
                fontSize: "15px",
                width: "10rem",
                "&:hover": {
                    color: colors.success + "!important",
                    backgroundColor: colors.white.main + "!important",
                    border: `1px solid ${colors.success}`
                },
                "&:focus": {
                    color: colors.success,
                    backgroundColor: colors.white.main,
                    border: `1px solid ${colors.success}`
                }
            }

        )
    }

    /* const submitStyle = () => {
         return (
             {
                 border: `2px solid ${colors.success.main}`,
                 backgroundColor: "red !important",
                 color: theme.palette.white.main,
                 fontWeight: "bold",
                 fontSize: "1.5rem",
                 padding: ".3rem",
                 "&:hover": {
                     color: theme.palette.success.main + "!important",
                     backgroundColor: theme.palette.white.main + "!important",
                     border: `2px solid ${theme.palette.success.main}+"!important"`
                 },
                 "&:focus": {
                     color: theme.palette.white.main + "!important",
                     backgroundColor: theme.palette.success.main + "!important",
                     border: `2px solid ${theme.palette.success.main}`
                 },
             }

         )
     }*/

    /*function popUpStyle() {
        return (
            {
                border: `2px solid ${theme.palette.forms.yellow}`,
                backgroundColor: theme.palette.forms.yellow,
                color: theme.palette.white.main,
                fontWeight: "bold",
                fontSize: "1.5rem",
                padding:".3rem",
                "&:hover": {
                    color: theme.palette.forms.yellow,
                    backgroundColor: theme.palette.white.main,
                    border: `2px solid ${theme.palette.forms.yellow}`
                },
                "&:focus": {
                    color: theme.palette.forms.yellow,
                    backgroundColor: theme.palette.white.main,
                    border: `2px solid ${theme.palette.forms.yellow}`
                },
            }

        )
    }*/

    function tableDeleteStyle() {
        return (
            {
                width: "200px",
                borderRadius: "1rem",
                backgroundColor: bgColor,
                padding: "1rem 2rem"
            }
        )

    }

    const commonStyle = () => {
        return (
            {
                width: "200px",
                borderRadius: "1rem",
                backgroundColor: bgColor,
                padding: "1rem 2rem",
                border: "1px solid #fff",
                "&:hover": {
                    border: "1px solid black"
                },
            }
        )
    }
    const submitStyle = () => {
        return (
            {
                borderRadius: '.7rem',
                backgroundColor: "#FDB833 !important",
                color: "black",
                fontWeight: "bold",
                fontSize: "15px",
                width: "12rem",
                marginTop: 5,
                height: '2.5rem',
                "&:hover": {
                    color: colors.success + "!important",
                    backgroundColor: colors.white.main + "!important",
                    border: `1px solid ${colors.success}`
                },
                "&:focus": {
                    color: colors.success,
                    backgroundColor: colors.white.main,
                    border: `1px solid ${colors.success}`
                }
            }

        )
    }

    return {
        backgroundColor: bgColor + "!important",
        width: fullWidth ? "100% !important" : width,
        ...(common && commonStyle()),
        ...(login && loginStyle()),
        ...(submit && submitStyle()),
        /*
                ...(popup && popUpStyle()),
        */
        /*
                ...(tableDelete && tableDeleteStyle())
        */
    }
})
