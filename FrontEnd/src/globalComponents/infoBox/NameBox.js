import React from "react";
import { Text } from "native-base";
import { ImageBackground, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  useFonts,
  JosefinSans_700Bold,
  JosefinSans_400Regular,
} from '@expo-google-fonts/josefin-sans';
import colors from "../../utils/colors";
import AppLoading from 'expo-app-loading';

import xki from "../../../assets/images/xki.jpg";

function NameBox(props) {

  let [fontsLoaded] = useFonts({ JosefinSans_700Bold, JosefinSans_400Regular });
  const [showModal, setShowModal] = React.useState(false);

  if (!fontsLoaded && Platform.OS == 'ios') {
    return <AppLoading />;
  } else {
    return(
      <ImageBackground source={props.img} style={{height:350}} imageStyle={{ borderRadius: 10}}>
        <LinearGradient colors={['transparent', colors.white]} style={{flex:1,
          justifyContent:'flex-end',
          alignItems:'flex-end',
          paddingRight: 20,
        }}>
          <Text
            color={colors.black}
            fontSize={'24'}
            fontWeight={'bold'}
            fontFamily={'JosefinSans_700Bold'}>
            {props.name}
          </Text>
          <Text
            mb={1}
            color={colors.grey}
            fontSize={'12'}
            fontFamily={'JosefinSans_400Regular'}>
            {props.slogan}
          </Text>
        </LinearGradient>
      </ImageBackground>
  )}
}

export default NameBox;
