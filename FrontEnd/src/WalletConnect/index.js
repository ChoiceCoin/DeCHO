import React from "react";
import { VStack, Text, ScrollView, Divider, Image } from "native-base";
import colors from "../utils/colors";
import { TouchableOpacity, View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WebView } from "react-native-webview";
import { WALLET_CONNECT_BASE_URL } from "@env";

const getOnboardState = async () => {
  try {
    return (value = await AsyncStorage.getItem("@onboadState"));
  } catch (e) {
    // error reading value
  }
};

function WalletConnect({ navigation }) {
  getOnboardState()
    .then((data) => data)
    .then((value) => {
      if (value == "Done") {
        navigation.navigate("AnonymousApproval");
      }
    });

  return (
    <VStack w="100%" h="100%" pt={10} background={colors.black}>
      <Text
        mt={5}
        px={5}
        color={colors.white}
        fontSize={"18"}
        fontFamily={"JosefinSans-Bold"}
      ></Text>
      <WebView
        source={{ uri: WALLET_CONNECT_BASE_URL }}
        style={{
          width: "100%",
        }}
      />
      <View style={rightView}>
      <TouchableOpacity
        style={backButtonStyle}
        onPress={() => {
          navigation.goBack();
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
      <TouchableOpacity
        style={{margin:5}}
        onPress={() => {
          navigation.navigate('wcApproval');
        }}
      >
        <Text
          color={colors.white}
          fontSize={18}
          fontFamily={"JosefinSans-Regular"}
        >
          Proceed {">"}
        </Text>
      </TouchableOpacity>
      </View>
    </VStack>
  );
}

const backButtonStyle = {
  backgroundColor: colors.teal,
  height: 60,
  width: 126,
  borderRadius: 20,
  alignItems: "center",
  justifyContent: "center",
  margin: 5,
  flexDirection: "row",
};
const rightView = {
  position: "absolute",
  //backgroundColor: colors.teal,
  bottom: 0,
  right: 0,
  borderRadius: 20,
  alignItems: "center",
  justifyContent: "center",
  margin: 20,
  flexDirection: "column",
};

export default WalletConnect;

