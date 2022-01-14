import React from 'react';
import { VStack, Text, TextArea, ScrollView, Button } from 'native-base';
import colors from '../utils/colors';
import { KeyboardAvoidingView, Input, Modal, Image } from 'native-base';
import { Platform } from "react-native";

const warning = require('../../assets/images/connectWallet/warning.png');
function ConnectWallet({ navigation }) {
    const [showModal, setShowModal] = React.useState(false);

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
                        fontWeight={'500'}
                        fontFamily={Platform.OS === 'ios' ? 'Gill Sans' : ''}>
                          DeCHO
                      </Text>
                      <Text
                        mb={5}
                        color={colors.black}
                        fontSize={'20'}
                        fontFamily={Platform.OS === 'ios' ? 'Gill Sans' : ''}>
                          Please note that your keys are only stored locally and not saved
                          to any of our databses.
                      </Text>
                      <Text
                        mb={1}
                        color={colors.black}
                        fontSize={'24'}
                        fontWeight={'500'}
                        fontFamily={Platform.OS === 'ios' ? 'Gill Sans' : ''}>
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
                        fontWeight={'500'}
                        fontFamily={Platform.OS === 'ios' ? 'Gill Sans' : ''}>
                          Memonic Keys
                      </Text>
                      <Text
                        mb={5}
                        color={colors.black}
                        fontSize={'20'}
                        fontFamily={Platform.OS === 'ios' ? 'Gill Sans' : ''}>
                          Enter your phrases separated by spaces
                      </Text>
                      <TextArea></TextArea>
                      <Text
                        my={5}
                        color={colors.black}
                        fontSize={'16'}
                        fontWeight={'500'}
                        fontFamily={Platform.OS === 'ios' ? 'Gill Sans' : ''}>
                          Phrase Counter :{' '}
                          <Text fontFamily={Platform.OS === 'ios' ? 'Gill Sans' : ''}>0</Text>
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
                            fontFamily={Platform.OS === 'ios' ? 'Gill Sans' : ''}>
                              Coming SOON!
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


export default ConnectWallet;

