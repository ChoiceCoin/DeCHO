import React, { useRef } from "react";

import {
  Button,
  HStack,
  Image,
  useToast,
  Modal,
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
} from "react-native";
import colors from "../../../utils/colors";
import NameBox from "../../../globalComponents/infoBox/NameBox";
import { Slider } from "native-base";
import { WALLET_CONNECT_BASE_URL } from "@env";

function wcApproval({ navigation }) {
  const plus = require("../../../../assets/icons/+.png");
  const donation1 = require("../../../../assets/icons/donation1.png");
  const settings = require("../../../../assets/icons/settings-2.png");
  const copy = require("../../../../assets/images/connectWallet/copy.png");
  const background = require("../../../../assets/images/bgImgs/Artboard1.png");
  const toast = useToast();

  const width = Dimensions.get("window").width;

  const flatListRef = useRef();
  const [showModal, setShowModal] = React.useState(false);
  const [approvals, setApprovals] = React.useState(null);
  const [address, setAddress] = React.useState("");
  const [goal, setGoal] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [onChangeValue, SetOnChangeValue] = React.useState(0)

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
                      setGoal(item.cause_approval.goal);
                      setAmount(item.balance);
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
                  Make your vote towards this project using $CHOICE.
                  {"\n"}
                  Your Choice will be refunded and rewarded!
                </Text>
                <HStack
                  alignSelf={"center"}
                  p={1}
                  m={2}
                >
                  <Slider
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
                 
                </HStack>
                <Text alignSelf={'center'}
                fontSize={"36"}
                fontFamily={"JosefinSans-Bold"}
              >
                    {onChangeValue} Votes
                  </Text>
                </Modal.Body>
              <Modal.Footer>
                <Button
                  onPress={() => {
                    navigation.navigate('WebviewURL', {source : WALLET_CONNECT_BASE_URL+"?recipientAddress="+address+"&amountToSend="+onChangeValue+"&requestType=makeTxn&txnMethod=asa&deviceType=android"})
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
          elevation: 5,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
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
            navigation.push("wcDonate");
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

export default wcApproval;

