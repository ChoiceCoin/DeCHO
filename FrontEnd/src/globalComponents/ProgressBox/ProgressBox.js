import React from "react";
import { Progress, Text, VStack } from "native-base";
import { ImageBackground, Platform } from "react-native";

import colors from "../../utils/colors";

function ProgressBox(props) {
  return (
    <VStack px={5} borderRadius={"md"} pb={2}>
      <Text
        m={1}
        color={colors.lightgrey}
        fontSize={"18"}
        fontFamily={"JosefinSans-Bold"}
      >
        {props.prefix}
        {Number(props.progress.toFixed(2)).toLocaleString()}
      </Text>
      <Progress
        mb={1}
        value={(100 * props.progress) / props.goal}
        colorScheme={"light"}
      />
      <Text
        mb={1}
        color={colors.lightgrey}
        fontSize={"18"}
        fontFamily={"JosefinSans-Bold"}
        alignSelf={"flex-end"}
      >
        {props.prefix}
        {Number(props.goal.toFixed(2)).toLocaleString()}
      </Text>
    </VStack>
  );
}

export default ProgressBox;

