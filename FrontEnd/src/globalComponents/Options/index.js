import React from "react";
import {
  Button,
  Image,
  ScrollView,
  useToast,
  Text,
  VStack,
  Divider,
  HStack,
} from "native-base";
import { TouchableOpacity } from "react-native";
import { Linking } from "react-native";
import colors from "../../utils/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

const dechoImage = require("../../../assets/icons/dechoSettings.png");
const Disconnect = require("../../../assets/icons/link-2-off.png");
const contact = require("../../../assets/icons/user.png");
const globe = require("../../../assets/icons/globe.png");

const storeOnboardState = async () => {
  try {
    await AsyncStorage.setItem("@onboadState", "null");
  } catch (e) {
    // saving error
  }
};

function Options({ navigation }) {
  const toast = useToast();

  return (
    <>
      <ScrollView bg={colors.black} w={"100%"} h={"100%"}>
        <Image source={dechoImage} w="100%" />
        <VStack w={"100%"} h={"100%"} px={5} space={3}>
          <VStack p={2}>
            <TouchableOpacity
              style={{
                height: 60,
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
              onPress={() => {
                storeOnboardState();

                navigation.navigate("ProceedWallet");
              }}
            >
              <HStack alignItems={"center"}>
                <Image
                  width={5}
                  height={5}
                  marginRight={5}
                  source={Disconnect}
                />
                <Text
                  fontSize={24}
                  color={colors.white}
                  fontFamily={"JosefinSans-Regular"}
                >
                  Disconnect
                </Text>
              </HStack>
              <Text
                fontSize={24}
                color={colors.white}
                fontFamily={"JosefinSans-Regular"}
              >
                {" >"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 60,
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
              onPress={() => {
                Linking.openURL("https://decho.finance/contact-us").catch(
                  (error) => toast.show({ description: error })
                );
              }}
            >
              <HStack alignItems={"center"}>
                <Image width={5} height={5} marginRight={5} source={contact} />
                <Text
                  fontSize={24}
                  color={colors.white}
                  fontFamily={"JosefinSans-Regular"}
                >
                  Contact Us
                </Text>
              </HStack>
              <Text
                fontSize={24}
                color={colors.white}
                fontFamily={"JosefinSans-Regular"}
              >
                {" >"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 60,
                marginBottom: 5,
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
              onPress={() => {
                Linking.openURL("https://decho.finance").catch((error) =>
                  toast.show({ description: error })
                );
              }}
            >
              <HStack alignItems={"center"} >
                <Image width={5} height={5} marginRight={5} source={globe} />
                <Text
                  fontSize={24}
                  color={colors.white}
                  fontFamily={"JosefinSans-Regular"}
                >
                  Visit Our Website
                </Text>
              </HStack>
              <Text
                fontSize={24}
                color={colors.white}
                fontFamily={"JosefinSans-Regular"}
              >
                {" >"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 60,
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
              onPress={() => {
                Linking.openURL("https://decho.finance").catch((error) =>
                  toast.show({ description: error })
                );
              }}
            >
              <HStack alignItems={"center"} >
                <Image width={5} height={5} marginRight={5} source={globe} />
                <Text
                  fontSize={24}
                  color={colors.white}
                  fontFamily={"JosefinSans-Regular"}
                >
                  CHOICECOIN Rewards
                </Text>
              </HStack>
              <Text
                fontSize={24}
                color={colors.white}
                fontFamily={"JosefinSans-Regular"}
              >
                {" >"}
              </Text>
            </TouchableOpacity>
            
          </VStack>
        </VStack>
      </ScrollView>
      <TouchableOpacity
        style={{
          backgroundColor: colors.darkgrey,
          elevation : 5,
          position: "absolute",
          right: 20,
          bottom: 20,
          height: 60,
          width: 126,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text
          color={colors.white}
          fontSize={18}
          fontFamily={"JosefinSans-Regular"}
        >
          {"< "}Go Back
        </Text>
      </TouchableOpacity>
    </>
  );
}

export default Options;

