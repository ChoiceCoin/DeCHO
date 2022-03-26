import React from "react";
import QRCode from "react-native-qrcode-svg";
import { View } from "react-native";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
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
} from "native-base";
import { Dimensions, Linking, TouchableOpacity } from "react-native";
import colors from "../../../utils/colors";
import Clipboard from "@react-native-clipboard/clipboard";
import NameBox from "../../../globalComponents/infoBox/NameBox";

//Images import
const plus = require("../../../../assets/icons/+.png");
const approval = require("../../../../assets/icons/check-circle-2.png");
const settings = require("../../../../assets/icons/settings-2.png");
const Search = require("../../../../assets/icons/search.png");
const minimize = require("../../../../assets/icons/minimize-2.png");

function AnonymousDonate({ navigation }) {
  const copy = require("../../../../assets/images/connectWallet/copy.png");
  const logo = require("../../../../assets/images/logo/DechoLogomarkgradientlogomark.png");
  const background = require("../../../../assets/images/bgImgs/Artboard1.png");

  const toast = useToast();

  const width = Dimensions.get("window").width;

  const [showModal, setShowModal] = React.useState(false);
  const [address, setAddress] = React.useState("");
  const [menuToggle, setMenuToggle] = React.useState(false);

  const [approvals, setApprovals] = React.useState(null);
  // https://apps.apple.com/us/app/algorand-wallet/id1459898525
  //   https://play.google.com/store/apps/details?id=com.algorand.android&hl=en_US&gl=US

  if (!approvals) {
    fetch("https://decho-staging.herokuapp.com/api/v1/causes")
      .then((response) => response.json())
      .then((responseData) => {
        setApprovals(
          responseData.data.filter((cause) => cause.status === "Approved")
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
          data={approvals}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={({ item }) => {
            return (
              <VStack w={width} px={7} py={1}>
                <NameBox
                  name={item.title}
                  slogan={item.short_description}
                  img={item.photo_url}
                  balance={item.balance}
                  goal={item.cause_approval.goal}
                  address={item.decho_wallet.address}
                  navigation={navigation}
                />
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
                    Donate {">"}
                  </Text>
                </TouchableOpacity>
              </VStack>
            );
          }}
        />
      );
    }
  }

  function menuToggleFunction() {
    if (menuToggle) {
      return (
        <View
          style={{
            width: 70,
            height: 282,
            elevation: 5,
            backgroundColor: "#7C7C7C",
            alignSelf: "center",
            borderRadius: 99,
            position: "absolute",
            bottom: 15,
            right: 15,
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              padding: 10,
              borderRadius: 99,
            }}
            onPress={() => {
              setMenuToggle(false);
            }}
          >
            <Image
              source={minimize}
              mt={2}
              width={6}
              height={6}
              alt={"Icon"}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: colors.lightgrey,
              padding: 10,
              borderRadius: 99,
            }}
            onPress={() => {
              navigation.push("AnonymousApproval");
            }}
          >
            <Image source={approval} width={6} height={6} alt={"Icon"}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              borderRadius: 99,
            }}
            onPress={() => {
              navigation.navigate("CreateCampaign");
              toast.show({
                description: "Create A Campaign feature coming soon!",
              });
            }}
          >
            <Image source={plus} width={6} height={6} alt={"Icon"}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: colors.lightgrey,
              padding: 10,
              borderRadius: 99,
            }}
            onPress={() => {
              toast.show({
                description: "Search feature coming soon!",
              });
            }}
          >
            <Image source={Search} width={6} height={6} alt={"Icon"}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              borderRadius: 99,
            }}
            onPress={() => {
              navigation.navigate("Options");
            }}
          >
            <Image
              source={settings}
              width={6}
              height={6}
              mb={2}
              alt={"Icon"}
            ></Image>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            elevation: 5,
            backgroundColor: colors.darkgrey,
            borderRadius: 99,
            position: "absolute",
            bottom: 15,
            right: 15,
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
          onPress={() => {
            setMenuToggle(true);
          }}
        >
          <Text fontSize={24} color={colors.white}>
            {" "}
            -{" "}
          </Text>
        </TouchableOpacity>
      );
    }
  }
  return (
    <ImageBackground
      source={background}
      style={{
        height: "100%",
      }}
    >
      <ScrollView>
        <VStack w={"100%"} h={"100%"} pt={10} space={3} mb={110}>
          <Text
            mx={7}
            color={colors.white}
            fontSize={"36"}
            fontFamily={"JosefinSans-Bold"}
          >
            Donate [TestNet]
          </Text>
          {/*<Input mx={5} placeholder={'Search....'} />*/}
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
                Make your vote towards this project by sending ALGO to this
                address.
                {"\n"}Your Algo will be refunded if this project does not reach
                it's Goal
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
                py={5}
                px={2}
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
                colorScheme="teal"
              >
                Proceed
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </ScrollView>
      {/* Floating Action Button clone */}
      {menuToggleFunction()}
    </ImageBackground>
  );
}

export default AnonymousDonate;

