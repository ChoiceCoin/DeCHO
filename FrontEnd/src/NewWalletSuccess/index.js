import React from "react";
import { VStack, Text, TextArea, ScrollView, Button, HStack, Divider, useToast, Pressable } from "native-base";
import colors from "../utils/colors";
import { useFonts, JosefinSans_700Bold, JosefinSans_400Regular } from '@expo-google-fonts/josefin-sans';
import AppLoading from 'expo-app-loading';
import { KeyboardAvoidingView, Input, Modal, Image } from "native-base";
import { Platform } from "react-native";
import Clipboard from '@react-native-clipboard/clipboard';



const copy = require('../../assets/images/connectWallet/copy.png')

function NewWalletSuccess ({ navigation }) {
    let [fontsLoaded] = useFonts({JosefinSans_700Bold, JosefinSans_400Regular});
    const [showModal, setShowModal] = React.useState(false)
    const toast = useToast()


    if (!fontsLoaded && Platform.OS == 'ios') {
        return <AppLoading />;
      } else {
    return(
        <KeyboardAvoidingView
          background={colors.white}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex:1}}>
        <ScrollView style={{flex:1}}>
        <VStack w='100%' h='100%' px={5} pt={10}>
            {/*<Button variant={'link'} onPress={()=>{*/}
            {/*    navigation.goBack()*/}
            {/*}}>*/}
            {/*    Go back*/}
            {/*</Button>*/}
            <Text fontWeight={'bold'} mb={5} color={colors.black} fontSize={'30'} fontFamily={'JosefinSans_400Regular'}>DeCHO</Text>
            <Text fontWeight={'bold'} mb={5} color={colors.black} fontSize={'14'} fontFamily={'JosefinSans_400Regular'}>
            Success!
            </Text>
            <Text mb={1} color={colors.black} fontSize={'24'} fontFamily={'JosefinSans_400Regular'}>
              Your new wallet has been generated!
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
            <Text color={colors.black} fontSize={'14'} fontFamily={'JosefinSans_400Regular'}>
            SWKJYUGFDSHKJI88GF90UUHGD45D
            </Text>
            <Image source={copy} alt='applause' h='5' w='5' alignSelf={'center'} />
            </Pressable>
            <Divider my={5}/>

            <Text fontWeight={'bold'} mb={5} color={colors.black} fontSize={'24'} fontFamily={'JosefinSans_700Bold'}>Memonic Keys</Text>
            <Text mb={5} color={colors.black} fontSize={'20'} fontFamily={'JosefinSans_400Regular'}>
            Safe Guard your mnemonics and save them now!
            </Text>
            <TextArea mb={5}></TextArea>
        </VStack>
        </ScrollView>
        <Button /*isLoading = { showModal }*/ isLoading={true} mx={5} mb={5} colorScheme='teal' onPress={() => setShowModal(true)}>Coming Soon</Button>
        </KeyboardAvoidingView>
    )}
}

export default NewWalletSuccess
