import { styled } from "@mui/material/styles";
import { TextField, Theme } from "@mui/material";

interface owner {
    fullWidth?: boolean
    helperText?: string
    border?: string
    error?: string
    bgColor?: boolean
    direction?: boolean
    login?: string
    value?: string
    popup?: string
    internShip?: boolean
    form?: boolean
    fullHeight?: boolean
}

interface InputProps {
    ownerState: owner;
    theme?: Theme;
}

export default styled(TextField)(({ theme, ownerState }: any) => {
    const { border, direction, login, form, bgColor, fullHeight, popup, internShip, error, fullWidth, height, txt } = ownerState

    function loginStyle() {
        return (
            {
                '& .MuiFormHelperText-root': {
                    color: theme.palette.error.light + "!important",
                    fontSize: ".8rem",
                    fontWeight: "bold",
                    padding: "0.1rem 0 !important"
                },
                "& .MuiOutlinedInput-notchedOutline": {
                    border: 0,
                },
                "& .MuiInputBase-root": {
                    border: 0,
                    fontSize: "1rem",
                    fontWeight: "bold"
                },
                "& .MuiInputLabel-root": {
                    fontSize: "1rem",
                    fontWeight: "bold !important",
                    background: theme.palette.white.main + "!important",
                    borderRadius: "10px !important",
                    color: theme.palette.secondary.main + "!important",
                    padding: "0 10px !important",
                    marginLeft: "65%",
                }
            })
    }

    function formStyle() {
        return {
            border: "1px solid #ccc",
            borderRadius: "2rem !important",
            boxShadow: "-1px 10px 39px 0px rgba(189,178,189,1)",
            backgroundColor: "white",
            '& .MuiFormHelperText-root': {
                fontSize: ".85rem",
                fontWeight: "bold",
                padding: "0.1rem 0 !important"
            },
            "& .MuiOutlinedInput-notchedOutline": {
                border: 0,
            },
            "& .MuiInputBase-root": {
                borderRadius: "1rem",
                border: error ? "1px solid red" : 0,
                fontSize: "1rem !important",
                padding: "1rem .5rem !important",
                fontWeight: "bold",
                backgroundColor: theme.palette.white.main + "!important",
            },
            "& .MuiInputLabel-root": {
                fontFamily: "iranSans",
                fontSize: "1rem",
                fontWeight: "bold !important",
                background: "white" + "!important",
                borderRadius: "10px !important",
                color: "#918686" + "!important",
                padding: ".8rem   10px !important",
            }
        }
    }

    function popupStyle() {
        return (
            {
                '& .MuiFormHelperText-root': {
                    color: "black !important",
                    fontSize: ".84rem",
                    fontWeight: "bold",
                    padding: "0.1rem 0 !important",
                    height: "10px",
                },
                "& .MuiInputBase-root": {
                    border: error ? "1px solid red" : "1px solid black",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    backgroundColor: theme.palette.white.main + "!important",
                    height: "3rem !important"
                },
                "& .MuiInputLabel-root": {
                    fontSize: "1rem",
                    fontWeight: "bold !important",
                    background: theme.palette.white.main + "!important",
                    borderRadius: "10px !important",
                    color: theme.palette.secondary.formInputText + "!important",
                    padding: "0 10px !important",
                    // marginLeft: "70%"
                },
                "& .MuiOutlinedInput-notchedOutline": {
                    // marginLeft: "65%",
                    // border: "none !important",
                    backgroundColor: "transparent !important"
                }


            }
        )
    }

    function Text() {
        return {
            '& .MuiFormHelperText-root': {
                color: " !important",
                fontSize: ".84rem",
                fontWeight: "bold",
                padding: "0.1rem 0 !important",
                border: "1px solid black",
                height: "10px"
            },
            "& .MuiInputBase-root": {
                border: error ? "1px solid red" : "1px solid black",
                fontWeight: "bold",
                fontSize: "1rem",
                backgroundColor: theme.palette.white.main + "!important",
                height: "3rem !important"
            },
            "& .MuiInputLabel-root": {
                fontSize: "1rem",
                fontWeight: "bold !important",
                background: theme.palette.white.main + "!important",
                borderRadius: "10px !important",
                color: theme.palette.secondary.formInputText + "!important",
                padding: "0 10px !important",
                marginLeft: "70%"
            },
            "& .MuiOutlinedInput-notchedOutline": {
                marginLeft: "65%",
                border: "none !important",
                backgroundColor: "transparent !important"
            }
        }
    }

    function internStyle() {
        // return {
        //     border: "1px solid #ccc",
        //     height: fullHeight && "100% !important",
        //     /*
        //                 padding:".4rem .7rem",
        //     */
        //     borderRadius: "2rem !important",
        //     '& .MuiFormHelperText-root': {
        //         fontSize: ".85rem",
        //         fontWeight: "bold",
        //         padding: "0.1rem 0 !important"
        //     },
        //     "& .MuiOutlinedInput-notchedOutline": {
        //         border: 0,
        //     },
        //     "& .MuiInputBase-root": {
        //         height: fullHeight && "100% !important",
        //         borderRadius: "1rem",
        //         border: error ? "1px solid red" : 0,
        //         fontSize: "1rem !important",
        //         padding: ".1rem .5rem !important",
        //         fontWeight: "bold",
        //         backgroundColor: "#EAEBF3",

        //     },
        //     "& .MuiInputLabel-root": {
        //         fontFamily: "iranSans",
        //         fontSize: "1rem",
        //         fontWeight: "bold !important",
        //         backgroundColor: "#EAEBF3 !important",
        //         borderRadius: "10px !important",
        //         color: "#918686" + "!important",
        //         padding: ".3rem   10px !important"
        //     },

        // }

        return {
            '& .MuiFormHelperText-root': {
                color: " !important",
                fontSize: ".84rem",
                fontWeight: "bold",
                padding: "0.1rem 0 !important",
                border: "1px solid black",
                height: "10px"
            },
            "& .MuiInputBase-root": {
                border: error ? "1px solid red" : "1px solid black",
                fontWeight: "bold",
                fontSize: "1rem",
                backgroundColor: theme.palette.white.main + "!important",
                height: "3rem !important"
            },
            "& .MuiInputLabel-root": {
                fontSize: "1rem",
                fontWeight: "bold !important",
                background: theme.palette.white.main + "!important",
                borderRadius: "10px !important",
                color: theme.palette.secondary.formInputText + "!important",
                padding: "0 10px !important",
                marginLeft: "45%"
            },
            "& .MuiOutlinedInput-notchedOutline": {
                marginLeft: "65%",
                border: "none !important",
                backgroundColor: "transparent !important"
            }
        }
    }
    return {
        width: fullWidth && "100%",
        // height: fullHeight ? "100%" : height,
        fontWeight: "bold",
        ...(popup && popupStyle()),
        direction: direction,
        backgroundColor: bgColor + "!important",
        ...(login && loginStyle()),
        ...(form && formStyle()),
        ...(txt && Text()),
        ...(internShip && internStyle())
    }
})
