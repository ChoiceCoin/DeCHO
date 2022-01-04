import React from 'react';
import { VStack, Text, TextArea, ScrollView, Button } from 'native-base';
import colors from '../utils/colors';
import {
    useFonts,
    JosefinSans_700Bold,
    JosefinSans_400Regular,
} from '@expo-google-fonts/josefin-sans';
import AppLoading from 'expo-app-loading';
import { KeyboardAvoidingView, Input, Modal, Image } from 'native-base';
import { Platform } from "react-native";

const warning = require('../../assets/images/connectWallet/warning.png');
function ConnectWallet({ navigation }) {
    let [fontsLoaded] = useFonts({ JosefinSans_700Bold, JosefinSans_400Regular });
    const [showModal, setShowModal] = React.useState(false);

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
            background={colors.white}
          >
              <ScrollView style={{ flex: 1 }}>
                  <VStack w="100%" h="100%" px={5} pt={10}>
                    <Button variant={'link'} onPress={()=>{
                      navigation.goBack()
                    }}>
                      Go back
                    </Button>
                      <Text
                        mb={5}
                        color={colors.black}
                        fontSize={'30'}
                        fontFamily={'JosefinSans_400Regular'}>
                          DeCHO
                      </Text>
                      <Text
                        mb={5}
                        color={colors.black}
                        fontSize={'20'}
                        fontFamily={'JosefinSans_400Regular'}>
                          Please note that your keys are only stored locally and not saved
                          to any of our databses.
                      </Text>
                      <Text
                        mb={1}
                        color={colors.black}
                        fontSize={'24'}
                        fontFamily={'JosefinSans_700Bold'}>
                          Alias
                      </Text>
                      <Input
                        my="5"
                        placeholder="e.g. John Doe"
                        w={{
                            base: '100%',
                            md: '25%',
                        }}
                      />
                      <Text
                        mb={5}
                        color={colors.black}
                        fontSize={'24'}
                        fontFamily={'JosefinSans_700Bold'}>
                          Memonic Keys
                      </Text>
                      <Text
                        mb={5}
                        color={colors.black}
                        fontSize={'20'}
                        fontFamily={'JosefinSans_400Regular'}>
                          Enter your phrases separated by spaces
                      </Text>
                      <TextArea></TextArea>
                      <Text
                        my={5}
                        color={colors.black}
                        fontSize={'16'}
                        fontFamily={'JosefinSans_700Bold'}>
                          Phrase Counter :{' '}
                          <Text fontFamily={'JosefinSans_400Regular'}>0</Text>
                      </Text>
                  </VStack>
              </ScrollView>
              <Button
                isLoading={showModal}
                mx={5}
                mb={5}
                colorScheme="teal"
                onPress={() => setShowModal(true)}>
                  Connect
              </Button>
              <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                  <Modal.Content maxWidth="400px">
                      <Modal.CloseButton />
                      <Modal.Header>An Error Occured!</Modal.Header>
                      <Modal.Body>
                          <Image
                            mt={5}
                            source={warning}
                            alt="applause"
                            h="75"
                            w="75"
                            alignSelf={'center'}
                          />
                          <Text
                            my={2}
                            color={colors.red}
                            fontSize={'16'}
                            alignSelf={'center'}
                            fontFamily={'JosefinSans_400Regular'}>
                              Error message
                          </Text>
                      </Modal.Body>
                      <Modal.Footer>
                          <Button
                            onPress={() => {
                                setShowModal(false);
                            }}
                            colorScheme="teal">
                              Try Again
                          </Button>
                      </Modal.Footer>
                  </Modal.Content>
              </Modal>
          </KeyboardAvoidingView>
        );
    }
}

export default ConnectWallet;

