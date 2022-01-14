import React from "react";
import { Progress, Text, VStack } from "native-base";
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

function ProgressBox (props) {

  let [fontsLoaded] = useFonts({ JosefinSans_700Bold, JosefinSans_400Regular });
  const [showModal, setShowModal] = React.useState(false);


    return(
      <VStack bg={colors.lightBlue} px={5} borderRadius={'md'} mt={5} py={2}>
        <Text
          m={1}
          color={colors.black}
          fontSize={'18'}
          fontFamily={Platform.OS === 'ios' ? 'Gill Sans' : ''}>
          {props.prefix}{Number(props.progress.toFixed(2)).toLocaleString()}
        </Text>
        <Progress mb={1} value={100 * props.progress/props.goal} colorScheme={'emerald'}/>
        <Text
          mb={1}
          color={colors.black}
          fontSize={'18'}
          fontFamily={Platform.OS === 'ios' ? 'Gill Sans' : ''}
          alignSelf={'flex-end'}
        >
          {props.prefix}{Number(props.goal.toFixed(2)).toLocaleString()}
        </Text>
      </VStack>

    )}

export default ProgressBox;
