import React from "react";
import { View } from "react-native";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import {
  Button,
  HStack,
  Image,
  useToast,
  Modal,
  Slider,
  ScrollView,
  Text,
  VStack,
  FlatList,
  Spinner,
} from "native-base";
import { Dimensions, Linking, TouchableOpacity } from "react-native";
import colors from "../../../utils/colors";
import NameBox from "../../../globalComponents/infoBox/NameBox";
import { WALLET_CONNECT_BASE_URL } from "@env";

//Images import
const plus = require("../../../../assets/icons/+.png");
const approval = require("../../../../assets/icons/check-circle-2.png");
const settings = require("../../../../assets/icons/settings-2.png");
const Search = require("../../../../assets/icons/search.png");
const minimize = require("../../../../assets/icons/minimize-2.png");

function wcDonate({ navigation }) {
  const copy = require("../../../../assets/images/connectWallet/copy.png");
  const logo = require("../../../../assets/images/logo/DechoLogomarkgradientlogomark.png");
  const background = require("../../../../assets/images/bgImgs/Artboard1.png");

  const toast = useToast();

  const width = Dimensions.get("window").width;

  const [showModal, setShowModal] = React.useState(false);
  const [address, setAddress] = React.useState("");
  const [menuToggle, setMenuToggle] = React.useState(false);

  const [goal, setGoal] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [onChangeValue, SetOnChangeValue] = React.useState(0)

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
                  goal={item.donations.goal}
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
                    setGoal(item.donations.goal);
                    setAmount(item.balance);
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
              navigation.push("wcApproval");
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
                Make your Donation towards this project by using ALGO.
                {"\n"}Your Algo will be refunded if this project does not reach
                it's Goal
              </Text>
              <Slider
              alignSelf={'center'}
                    w="3/4"
                    maxW="300"
                    defaultValue={parseInt(goal) - parseInt(amount)}
                    colorScheme={"teal"}
                    minValue={0}
                    maxValue={parseInt(goal) - parseInt(amount)}
                    onChange={v => {
                      SetOnChangeValue(Math.floor(v))
                    }}
                    accessibilityLabel="slider"
                    step={1}
                  >
                    <Slider.Track>
                      <Slider.FilledTrack />
                    </Slider.Track>
                    <Slider.Thumb />
                  </Slider>
                  <Text alignSelf={'center'}
                fontSize={"36"}
                fontFamily={"JosefinSans-Bold"}
              >
                    {onChangeValue} ALGO
                  </Text>
            </Modal.Body>
            <Modal.Footer>
              <Button
                onPress={() => {
                  navigation.navigate('WebviewURL', {source : WALLET_CONNECT_BASE_URL+"?recipientAddress="+address+"&amountToSend="+onChangeValue+"&requestType=makeTxn&txnMethod=algo&deviceType=android"})
                  setShowModal(false);}}
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

export default wcDonate;

