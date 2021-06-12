import React from 'react';
import { Dimensions,SafeAreaView,Image } from 'react-native';
import Constants from "expo-constants";

//get dimension in window as height and weight
const {height,width} =Dimensions.get ('window');

//import theme.ts
import { Box } from './SwgIcons/theme';
import { backgroundColor } from '@shopify/restyle';
import { verticalScale,moderateScale } from 'react-native-size-matters';

//get image
export const welcomeAssets=require("../../assets/images/wel.png");

const Welcome=()=>{
    return (
    <SafeAreaView style={{flex:1,paddingTop:Constants.statusBarHeight}}>
        <Box flex={1} backgroundColor="white" justifyContent="flex-start">
            <Box height={height*0.5} justifyContent="center" alignItems="center">
                <Box
                height={verticalScale(250)}
                width={moderateScale(250)}
                backgroundColor="white"
                alignItems="center"
                justifyContent="center"
                padding="m">
                    <Image source={welcomeAssets} style={{flex:1}} resizeMode="contain"></Image>
                </Box>
            </Box>
        </Box>
    </SafeAreaView>
    );
};

export default Welcome;