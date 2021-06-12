import {createText,createBox, BaseTheme} from '@shopify/restyle';
import {moderateScale} from "react-native-size-matters";

const theme={
    colors:{
        white:"#fff",
        primary:"#2133A0",
        text:"#272829",
        button:"#7C72FF",
        color:"#BC0D34",
        grey:"#BAB098",
        danger:"#ff0055",
        green:"#00BF29",

    },
    spacing:{
        s:8,
        m:16,
        l:24,
        xl:40
    },
    borderRadius:{
        s:4,
        m:10,
        l:25,
        xl:75
    },
    textVariants:{
        title:{
            fontSize:moderateScale(15),
            fontFamily:"Gotham-Black",
            color:"white",
        },
        body:{
            fontSize:16,
            lineHeight:25,
            fontFamily:"Gotham-Medium",
            color:"text",

        },
        button:{
            fontSize:15,
            fontFamily:"Gotham-Bold",
            color:"text",
        },
        breakpoints:{},
    },

};
export type Theme=typeof theme;
export const Text = createText<BaseTheme>();
export const Box = createBox<BaseTheme>();
export default theme;