import React, { useRef } from "react";

import {
  Button,
  HStack,
  Image,
  useToast,
  Modal,
  Pressable,
  ScrollView,
  Text,
  VStack,
  FlatList,
  Spinner,
  View,
} from "native-base";
import {
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Linking,
} from "react-native";
import colors from "../../../utils/colors";
import Clipboard from "@react-native-clipboard/clipboard";
import NameBox from "../../../globalComponents/infoBox/NameBox";
import ProgressBox from "../../../globalComponents/ProgressBox/ProgressBox";
import QRCode from "react-native-qrcode-svg";

function AnonymousApproval({ navigation }) {
  const plus = require("../../../../assets/icons/+.png");
  const donation1 = require("../../../../assets/icons/donation1.png");
  const settings = require("../../../../assets/icons/settings-2.png");
  const dLogo = require("../../../../assets/images/approval/check.png");
  const copy = require("../../../../assets/images/connectWallet/copy.png");
  const logo = require("../../../../assets/images/logo/DechoLogomarkgradientlogomark.png");
  const background = require("../../../../assets/images/bgImgs/Artboard1.png");
  const toast = useToast();

  const width = Dimensions.get("window").width;

  const flatListRef = useRef();
  const [showModal, setShowModal] = React.useState(false);
  const [approvals, setApprovals] = React.useState(null);
  const [address, setAddress] = React.useState("");

  const onPressDisprove = (index) => {
    try {
      flatListRef.current.scrollToIndex({ animated: true, index: index + 1 });
    } catch (error) {
      flatListRef.current.scrollToIndex({ animated: true, index: index });
      toast.show({
        description: "You have gotten to the end of the list",
      });
    }
  };

  if (!approvals) {
    fetch("https://decho-staging.herokuapp.com/api/v1/causes")
      .then((response) => response.json())
      .then((responseData) => {
        setApprovals(
          responseData.data.filter((cause) => cause.status === "pending")
        );
      })
      .catch((error) => console.log(error));
  }

  function checkLoading() {
    if (!approvals) {
      return <Spinner />;
    } else {
      return (
        <FlatList
          ref={flatListRef}
          data={approvals}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={({ item, index }) => {
            return (
              <VStack w={width} px={7} py={1}>
                <NameBox
                  name={item.title}
                  slogan={item.short_description}
                  img={item.photo_url}
                  balance={item.balance}
                  goal={item.cause_approval.goal}
                  website={item.long_description}
                  address={item.decho_wallet.address}
                  navigation={navigation}
                />
                <HStack
                  justifyContent={"center"}
                  alignItems={"center"}
                  space={5}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: colors.grey,
                      height: 60,
                      width: 126,
                      borderRadius: 20,
                      alignItems: "center",
                      justifyContent: "center",
                      marginVertical: 20,
                      flexDirection: "row",
                    }}
                    onPress={() => onPressDisprove(index)}
                  >
                    <Text
                      color={colors.white}
                      fontSize={18}
                      fontFamily={"JosefinSans-Regular"}
                    >
                      Skip
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      backgroundColor: colors.teal,
                      height: 60,
                      width: 126,
                      borderRadius: 20,
                      alignItems: "center",
                      justifyContent: "center",
                      marginVertical: 20,
                      flexDirection: "row",
                    }}
                    onPress={() => {
                      setAddress(item.decho_wallet.address);
                      setShowModal(true);
                    }}
                  >
                    <Text
                      color={colors.white}
                      fontSize={18}
                      fontFamily={"JosefinSans-Regular"}
                    >
                      Vote {">"}
                    </Text>
                  </TouchableOpacity>
                </HStack>
              </VStack>
            );
          }}
        />
      );
    }
  }

  return (
    <VStack w={"100%"} h={"100%"} backgroundColor={colors.black}>
      <ImageBackground
        source={background}
        style={{
          height: "100%",
        }}
      >
        <ScrollView>
          <VStack w={"100%"} h={"100%"} pt={45} space={3} mb={110}>
            <Text
              mx={7}
              color={colors.white}
              fontSize={"36"}
              fontFamily={"JosefinSans-Bold"}
            >
              Vote [TestNet]
            </Text>

            {checkLoading()}
          </VStack>
          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content w={"95%"}>
              <Modal.CloseButton />
              <Modal.Header>Vote</Modal.Header>
              <Modal.Body>
                <Text
                  my={2}
                  color={colors.black}
                  fontSize={"16"}
                  fontFamily={"JosefinSans-Regular"}
                >
                  Make your vote towards this project by sending CHOICE to this
                  address.
                  {"\n"}Your Choice will be refunded and rewarded!
                </Text>
                <HStack
                  alignSelf={"center"}
                  p={1}
                  m={2}
                  borderWidth={3}
                  borderColor={colors.grey}
                  borderRadius={"sm"}
                >
                  <QRCode
                    value={address}
                    size={250}
                    logo={logo}
                    logoBackgroundColor={colors.white}
                    logoBorderRadius={800}
                    color={colors.grey}
                  />
                </HStack>
                <Pressable
                  onPress={() => {
                    Clipboard.setString(address);
                    toast.show({
                      description: "Copied Address",
                    });
                  }}
                  flexDirection={"row"}
                  background={colors.grey}
                  px={1}
                  py={5}
                  borderRadius={"md"}
                  justifyContent={"space-around"}
                >
                  <Text
                    color={colors.white}
                    fontSize={"8"}
                    fontFamily={"JosefinSans-Regular"}
                  >
                    {address}
                  </Text>
                  <Image
                    source={copy}
                    alt="applause"
                    h="3"
                    w="3"
                    alignSelf={"center"}
                  />
                </Pressable>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  onPress={() => {
                    Linking.openURL("algorand://main");
                    setShowModal(false);
                  }}
                  bgColor={colors.teal}
                  colorScheme="teal"
                >
                  Proceed
                </Button>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </ScrollView>
      </ImageBackground>
      <View
        style={{
          width: 208,
          height: 60,
          backgroundColor: colors.darkgrey,
          alignSelf: "center",
          borderRadius: 99,
          position: "absolute",
          bottom: 50,
          elevation:5,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
        onPress={
          ()=>{
            navigation.navigate('CreateCampaign');
            toast.show({
              description: "Create A Campaign feature coming soon!",
            });
          }
        }>
          <Image source={plus} width={6} height={6} alt={"Icon"}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: colors.lightgrey,
            padding: 10,
            borderRadius: 99,
          }}
          onPress={() => {
            navigation.push("AnonymousDonate");
          }}
        >
          <Image source={donation1} width={6} height={6} alt={"Icon"}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Options");
          }}
        >
          <Image source={settings} width={6} height={6} alt={"Icon"}></Image>
        </TouchableOpacity>
      </View>
    </VStack>
  );
}

export default AnonymousApproval;

