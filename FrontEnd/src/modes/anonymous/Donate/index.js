import React from "react";
import {
  Button,
  HStack,
  Image,
  useToast,
  Modal,
  Pressable,
  Progress,
  ScrollView,
  Text,
  VStack,
  Input, FlatList,
} from "native-base";
import { Dimensions, Platform, TouchableOpacity } from "react-native";
import {
  useFonts,
  JosefinSans_700Bold,
  JosefinSans_400Regular,
} from '@expo-google-fonts/josefin-sans';
import colors from "../../../utils/colors";
import AppLoading from 'expo-app-loading';
import Clipboard from "@react-native-clipboard/clipboard";
import NameBox from "../../../globalComponents/infoBox/NameBox";
import ProgressBox from "../../../globalComponents/ProgressBox/ProgressBox";
import { TestData } from "../../../utils/data";

function AnonymousDonate({ navigation }) {

  const settings = require('../../../../assets/images/settings.png');
  const copy = require('../../../../assets/images/connectWallet/copy.png')

  const toast = useToast()

  const width = Dimensions.get('window').width

  let [fontsLoaded] = useFonts({ JosefinSans_700Bold, JosefinSans_400Regular });

  const [showModal, setShowModal] = React.useState(false);
  const [address, setAddress] = React.useState('')


  return(
    <ScrollView bg={colors.white}>
      <VStack w={'100%'} h={'100%'} pt={10} space={3}>
        <TouchableOpacity alignSelf={'flex-end'} onPress={()=>{
          navigation.navigate('Options')
        }}>
        <Image mx={5} source={settings} alt={'settings'} size={7} alignSelf={'flex-end'}/>
        </TouchableOpacity>
        <Text
          mx={5}
          color={colors.black}
          fontSize={'24'}
          fontWeight={'500'}
          fontFamily={Platform.OS === 'ios' ? 'Gill Sans' : ''}>
          Donate
        </Text>
        <Input mx={5} placeholder={'Search....'} />
        <Text fontSize={10} px={5}>
          Swipe left to see more >>
        </Text>
        <FlatList
          data={TestData}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={({item}) => {
            return <VStack w={width} px={5} py={1}>
              <NameBox name={item.name} slogan={item.slogan} img={item.image}/>
              <HStack justifyContent={'center'} alignItems={'center'} space={5} mt={10}>
                </HStack>
              <ProgressBox progress={item.progress} goal={item.goal} prefix={'$'}/>
              <Button my={2} colorScheme={'teal'} onPress={ ()=>{
                setShowModal(true)
              }
              }>Donate</Button>
            </VStack>
          }}/>

        <TouchableOpacity onPress={()=>{
          navigation.goBack()
        }}>
        <Text
        m={5}
        color={colors.black}
        fontSize={'12'}
        fontFamily={Platform.OS === 'ios' ? 'Gill Sans' : ''}
        alignSelf={'flex-start'}
        >
          {'<< View unapproved projects'}
      </Text></TouchableOpacity>
      </VStack>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content w={'80%'}>
          <Modal.CloseButton />
          <Modal.Header>Vote</Modal.Header>
          <Modal.Body>
            <Text
              my={2}
              color={colors.black}
              fontSize={'16'}
              fontFamily={Platform.OS === 'ios' ? 'Gill Sans' : ''}>
              Make your vote towards this project by sending ALGO to this address.
              {'\n'}Your Algo will be refunded if this project does not reach it's Goal
            </Text>
            <Pressable onPress={()=>{
              Clipboard.setString('SWKJYUGFDSHKJI88GF90UUHGD45D')
              toast.show(
                {
                  description : 'Copied Address'
                }
              )
            }}
                       flexDirection={'row'} background={colors.grey} p={5} borderRadius={'md'} justifyContent={'space-between'}>
              <Text color={colors.black} fontSize={'12'} fontFamily={Platform.OS === 'ios' ? 'Gill Sans' : ''}>
                SWKJYUGFDSHKJI88GF90UUHGD45D
              </Text>
              <Image source={copy} alt='applause' h='5' w='5' alignSelf={'center'} />
            </Pressable>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onPress={() => {
                setShowModal(false);
              }}
              colorScheme="teal">
              Proceed
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

    </ScrollView>
  )}


export default AnonymousDonate ;
//pwhncaef==============================[==---------0pp0--0
//joshua
