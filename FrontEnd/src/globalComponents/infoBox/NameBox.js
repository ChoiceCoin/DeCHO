import React from "react";
import { TouchableOpacity, Linking } from 'react-native';
import { Box, HStack, Text, VStack, Image } from "native-base";
import colors from "../../utils/colors";
import FastImage from "react-native-fast-image";
import ProgressBox from "../ProgressBox/ProgressBox";

//iconGlobe
const globeImg = require("../../../assets/icons/globe.png");
function NameBox(props) {

  return (
    <>
      <VStack backgroundColor={colors.grey} borderRadius={"20"} shadow={5}>
        <FastImage
          style={{ height: 350, borderRadius: 20, borderTopRightRadius: 20 }}
          source={{ uri: props.img }}
        />
        <HStack px={5} pt={4} justifyContent={"space-between"}>
          <VStack mr={2} ml={-2}>
            <Text
              color={colors.white}
              fontSize={"24"}
              fontFamily={"JosefinSans-Bold"}
            >
              {props.name}
            </Text>
            <Text
              mb={1}
              color={colors.white}
              fontSize={"12"}
              fontFamily={"JosefinSans-Bold"}
              isTruncated
              maxW="250"
            >
              {props.slogan}
            </Text>
          </VStack>
          <TouchableOpacity
           onPress={() => {
            Linking.openURL("https://" + props.slogan).catch(
              (error) => toast.show({ description: error })
            );
          }}>
          <Box
            borderRadius={99}
            size={10}
            backgroundColor={colors.lightgrey}
            padding={3}
          >
            <Image width={4} height={4} source={globeImg} alt={"Website"} />
          </Box>
          </TouchableOpacity>
        </HStack>
        <TouchableOpacity onPress={() => {props.navigation.navigate('WebviewURL', {source : "https://testnet.algoexplorer.io/address/"+props.address})}}>
        <ProgressBox progress={props.balance} goal={props.goal} prefix={""} />
        </TouchableOpacity>
      </VStack>
    </>
  );
}

export default NameBox;

