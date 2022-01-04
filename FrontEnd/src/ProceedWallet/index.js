import React from 'react';
import {
    VStack,
    Text,
    TextArea,
    ScrollView,
    Button,
    Divider,
} from 'native-base';
import colors from '../utils/colors';
import {
    useFonts,
    JosefinSans_700Bold,
    JosefinSans_400Regular,
} from '@expo-google-fonts/josefin-sans';
import AppLoading from 'expo-app-loading';

const warning = require('../../assets/images/connectWallet/warning.png');
function ProceedWallet({ navigation }) {
    let [fontsLoaded] = useFonts({ JosefinSans_700Bold, JosefinSans_400Regular });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
          <ScrollView background={colors.white} style={{ flex: 1 }}>
              <VStack w="100%" h="100%" px={5} pt={10}>
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
                        fontFamily={'JosefinSans_400Regular'}>
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
                        fontFamily={'JosefinSans_400Regular'}>
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
                        fontFamily={'JosefinSans_400Regular'}>
                          Stay Anonymous
                      </Text>
                  </Button>
                  <Divider my={5} />
                  <Text fontSize={'16'} fontFamily={'JosefinSans_400Regular'}>
                      Generate a new Wallet allows you operate and use majority of the
                      functions inside the app.
                  </Text>
                  <Text fontSize={'16'} fontFamily={'JosefinSans_400Regular'}>
                      {'\n'}Staying Anonymous, you will only be able to use your external
                      wallet to make transactions.
                  </Text>
                  <Text fontSize={'16'} fontFamily={'JosefinSans_400Regular'}>
                      {'\n'}Using an Existing wallet, you give the app authority to make
                      the permitted transactions on your behalf.
                  </Text>
              </VStack>
          </ScrollView>
        );
    }
}

export default ProceedWallet;

