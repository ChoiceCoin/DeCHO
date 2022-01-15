import React from 'react';
import {
    VStack,
    Text,
    ScrollView,
    Button,
    Divider,
} from 'native-base';
import colors from '../utils/colors';
import { Platform } from "react-native";

function ProceedWallet({ navigation }) {


        return (
          <ScrollView background={colors.white} style={{ flex: 1 }}>
              <VStack w="100%" h="100%" px={5} pt={10}>
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
                      How do you want to proceed?
                  </Text>
                  <Button
                    my={5}
                    variant={'outline'}
                    onPress={() => {
                        navigation.navigate('ConnectWallet');
                    }}
                    colorScheme="teal">
                      <Text
                        fontSize={'16'}
                        color={colors.teal}
                        fontFamily={Platform.OS === 'ios' ? 'Gill Sans' : ''}>
                          Use Existing Wallet
                      </Text>
                  </Button>
                  <Button
                    my={5}
                    variant={'outline'}
                    onPress={() => {
                        navigation.navigate('NewWalletSuccess');
                    }}
                    colorScheme="teal">
                      <Text
                        fontSize={'16'}
                        color={colors.teal}
                        fontFamily={Platform.OS === 'ios' ? 'Gill Sans' : ''}>
                          Generate a new Wallet (recommended)
                      </Text>
                  </Button>
                  <Button my={5} variant={'outline'}
                          onPress={() => {
                            navigation.navigate('Onboarding');
                          }}
                          colorScheme="teal">
                      <Text
                        fontSize={'16'}
                        color={colors.teal}
                        fontFamily={Platform.OS === 'ios' ? 'Gill Sans' : ''}>
                          Stay Anonymous
                      </Text>
                  </Button>
                  <Divider my={5} />
                  <Text fontSize={'16'} fontFamily={Platform.OS === 'ios' ? 'Gill Sans' : ''}>
                      Generate a new Wallet allows you operate and use majority of the
                      functions inside the app.
                  </Text>
                  <Text fontSize={'16'} fontFamily={Platform.OS === 'ios' ? 'Gill Sans' : ''}>
                      {'\n'}Staying Anonymous, you will only be able to use your external
                      wallet to make transactions.
                  </Text>
                  <Text fontSize={'16'} fontFamily={Platform.OS === 'ios' ? 'Gill Sans' : ''}>
                      {'\n'}Using an Existing wallet, you give the app authority to make
                      the permitted transactions on your behalf.
                  </Text>
              </VStack>
          </ScrollView>
        );
    }

export default ProceedWallet;

