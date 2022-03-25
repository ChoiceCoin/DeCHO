import React from "react";
import { VStack, Text} from "native-base";
import colors from "../utils/colors";
import { TouchableOpacity } from "react-native";
import { WebView } from 'react-native-webview';


function WebviewURL({ route, navigation }) {
 
  return (<>
      <VStack w="100%" h="100%" pt={10} background={colors.black}>
        <WebView source={{ uri: route.params.source}} style={{
          width:'100%',
        }} />
        
      </VStack>
      
      <TouchableOpacity
      style={backButtonStyle}
      onPress={() => {
        navigation.goBack()
      }}
    >
      <Text
        color={colors.white}
        fontSize={18}
        fontFamily={"JosefinSans-Regular"}
      >
        {"<"} Go Back
      </Text>
</TouchableOpacity>
</>
  );

 
}

const backButtonStyle={
  position:'absolute',
  backgroundColor: colors.teal,
  height: 60,
  bottom:0,
  right:0,
  width: 126,
  borderRadius: 20,
  alignItems: "center",
  justifyContent: "center",
  margin: 20,
  flexDirection: "row",
}


export default WebviewURL;

