import React from "react";
import { VStack, Text, ScrollView, Divider, Image } from "native-base";
import colors from "../utils/colors";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Icon Images
const linkImg = require('../../assets/icons/link.png');
const eyeOffImg = require('../../assets/icons/eye-off.png');

const storeOnboardState = async () => {
  try {
    await AsyncStorage.setItem("@onboadState", "Done");
  } catch (e) {
    // saving error
  }
};
const getOnboardState = async () => {
  try {
    return (value = await AsyncStorage.getItem("@onboadState"));
  } catch (e) {
    // error reading value
  }
};

function ProceedWallet({ navigation }) {
  getOnboardState()
    .then((data) => data)
    .then((value) => {
      if (value == "Done") {
        navigation.navigate("AnonymousApproval");
      }
    });

  return (
    <ScrollView background={colors.black} style={{ flex: 1 }}>
      <VStack w="100%" h="100%" px={5} pt={10}>
        <Text
          mt={5}
          mb={5}
          color={colors.white}
          fontSize={"36"}
          fontFamily={"JosefinSans-Bold"}
        >
          DeCHO [TestNet]
        </Text>
        <Text
          mb={5}
          color={colors.white}
          fontSize={"14"}
          fontFamily={"JosefinSans-Bold"}
        >
          How do you want to proceed?
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: colors.lightgrey,
            height: 60,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: 'row'
          }}
          onPress={() => {
            navigation.navigate("WalletConnect");
          }}
        >
          <Image width={5} height={5} marginRight={5} source={linkImg}/>
          <Text fontSize={24} fontFamily={"JosefinSans-Regular"}>
            Connect Wallet
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: colors.lightgrey,
            height: 60,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 20,
            flexDirection: "row"
          }}
          onPress={() => {
            storeOnboardState();
            navigation.navigate("Onboarding");
          }}
        >
          <Image width={5} height={5} marginRight={5} source={eyeOffImg}/>
          <Text fontSize={24} fontFamily={"JosefinSans-Regular"}>
            Stay Anonymous
          </Text>
        </TouchableOpacity>

        <Divider my={5} color={colors.lightgrey} />
        <Text
          fontSize={"18"}
          fontFamily={"JosefinSans-Regular"}
          color={colors.white}
        >
          Connect Wallet uses the wallet connect protocol to connect to an
          existing Algorand Wallet.
        </Text>
        <Text
          fontSize={"18"}
          fontFamily={"JosefinSans-Regular"}
          color={colors.white}
        >
          {"\n"}Staying Anonymous will let you use an external wallet to
          simply send the assets to the generated Addresses
        </Text>
      </VStack>
    </ScrollView>
  );
}

export default ProceedWallet;

